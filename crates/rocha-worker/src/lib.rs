//! Worker process management, framed I/O, handshake, and crash detection.

/// Derive effective file timeout based on CLI argument and recorded timing history.
///
/// If `--file-timeout` is given, it is used directly.
/// Otherwise, defaults to `max(60s, 10 × recorded)`.
pub fn derive_file_timeout(
    recorded_time: Option<Duration>,
    cli_timeout: Option<Duration>,
) -> Duration {
    if let Some(t) = cli_timeout {
        t
    } else if let Some(rec) = recorded_time {
        std::cmp::max(Duration::from_secs(60), rec * 10)
    } else {
        Duration::from_secs(60)
    }
}
use rocha_protocol::{
    encode_frame, CodecError, OrchestratorMessage, ProtocolError, RunFileOptions, StreamingDecoder,
    TestCounts, WorkerMessage, PROTOCOL_VERSION,
};
use std::path::PathBuf;
use std::process::Stdio;
use std::sync::Arc;
use std::time::{Duration, Instant};
use thiserror::Error;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::process::{Child, ChildStdin, ChildStdout, Command};
use tokio::sync::Mutex;

/// Errors that can occur during worker process management and execution.
#[derive(Debug, Error)]
pub enum WorkerError {
    /// Standard I/O error.
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
    /// Frame codec / serialization error.
    #[error("Codec error: {0}")]
    Codec(#[from] CodecError),
    /// Handshake protocol version mismatch.
    #[error("Protocol version mismatch: expected {expected}, got {actual}")]
    VersionMismatch { expected: u32, actual: u32 },
    /// Worker process crashed unexpectedly.
    #[error("Worker crashed while executing '{file}': {message}")]
    WorkerCrashed { file: String, message: String },
    /// Execution timed out.
    #[error("Worker execution timed out after {0:?}")]
    Timeout(Duration),
    /// General protocol violation or unexpected message.
    #[error("Protocol error: {0}")]
    Protocol(String),
}

/// Configuration options for launching a worker process.
#[derive(Debug, Clone)]
pub struct WorkerConfig {
    /// Path to Node.js executable.
    pub node_path: PathBuf,
    /// Path to the harness worker script (e.g. `harness/bin/worker.js`).
    pub harness_worker_path: PathBuf,
    /// Optional path to `--require` loader (e.g. `loader/register.cjs`).
    pub loader_path: Option<PathBuf>,
    /// Additional Node.js command-line options (`--node-option`).
    pub node_options: Vec<String>,
    /// Timeout for initial handshake `Ready` message.
    pub handshake_timeout: Duration,
    /// Custom script content if spawning an inline Node evaluation.
    pub inline_script: Option<String>,
}

impl Default for WorkerConfig {
    fn default() -> Self {
        Self {
            node_path: PathBuf::from("node"),
            harness_worker_path: PathBuf::from("harness/bin/worker.js"),
            loader_path: None,
            node_options: Vec::new(),
            handshake_timeout: Duration::from_secs(5),
            inline_script: None,
        }
    }
}

/// A running Node worker process managed by the orchestrator.
impl std::fmt::Debug for WorkerProcess {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("WorkerProcess")
            .field("protocol_version", &self.protocol_version)
            .finish()
    }
}

pub struct WorkerProcess {
    child: Child,
    stdin: ChildStdin,
    stdout: ChildStdout,
    decoder: StreamingDecoder<WorkerMessage>,
    protocol_version: u32,
    stderr_captured: Arc<Mutex<Vec<u8>>>,
}

impl WorkerProcess {
    /// Spawn a new worker process according to `config` and perform protocol handshake.
    pub async fn spawn(config: &WorkerConfig) -> Result<Self, WorkerError> {
        let mut cmd = Command::new(&config.node_path);

        if let Some(ref loader) = config.loader_path {
            if loader.exists() {
                cmd.arg("--require").arg(loader);
            }
        }

        for opt in &config.node_options {
            cmd.arg(opt);
        }

        if let Some(ref script) = config.inline_script {
            cmd.arg("-e").arg(script);
        } else {
            let worker_script = if config.harness_worker_path.is_absolute()
                || config.harness_worker_path.exists()
            {
                config.harness_worker_path.clone()
            } else {
                let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
                let workspace_root = manifest_dir
                    .parent()
                    .and_then(|p| p.parent())
                    .unwrap_or(&manifest_dir);
                let cand = workspace_root.join(&config.harness_worker_path);
                if cand.exists() {
                    cand
                } else {
                    config.harness_worker_path.clone()
                }
            };
            cmd.arg(&worker_script);
        }

        cmd.stdin(Stdio::piped());
        cmd.stdout(Stdio::piped());
        cmd.stderr(Stdio::piped());

        let mut child = cmd.spawn()?;
        let stdin = child
            .stdin
            .take()
            .ok_or_else(|| std::io::Error::other("Failed to capture worker stdin"))?;
        let mut stdout = child
            .stdout
            .take()
            .ok_or_else(|| std::io::Error::other("Failed to capture worker stdout"))?;
        let stderr = child
            .stderr
            .take()
            .ok_or_else(|| std::io::Error::other("Failed to capture worker stderr"))?;

        let stderr_captured = Arc::new(Mutex::new(Vec::new()));
        let stderr_clone = Arc::clone(&stderr_captured);

        tokio::spawn(async move {
            let mut reader = stderr;
            let mut buf = [0u8; 4096];
            while let Ok(n) = reader.read(&mut buf).await {
                if n == 0 {
                    break;
                }
                let mut guard = stderr_clone.lock().await;
                guard.extend_from_slice(&buf[..n]);
            }
        });

        // Perform handshake with timeout
        let mut decoder = StreamingDecoder::<WorkerMessage>::new();
        let handshake_fut = async {
            let mut buf = [0u8; 4096];
            loop {
                if let Some(msg) = decoder.poll_next()? {
                    match msg {
                        WorkerMessage::Ready { protocol_version } => {
                            if protocol_version != PROTOCOL_VERSION {
                                return Err(WorkerError::VersionMismatch {
                                    expected: PROTOCOL_VERSION,
                                    actual: protocol_version,
                                });
                            }
                            return Ok(protocol_version);
                        }
                        other => {
                            return Err(WorkerError::Protocol(format!(
                                "Expected Ready handshake, got {:?}",
                                other
                            )));
                        }
                    }
                }

                let n = stdout.read(&mut buf).await?;
                if n == 0 {
                    let stderr_msg =
                        String::from_utf8_lossy(&stderr_captured.lock().await).to_string();
                    return Err(WorkerError::WorkerCrashed {
                        file: String::new(),
                        message: format!("Worker exited before handshake: {}", stderr_msg),
                    });
                }
                decoder.feed(&buf[..n]);
            }
        };

        let protocol_version =
            match tokio::time::timeout(config.handshake_timeout, handshake_fut).await {
                Ok(res) => res?,
                Err(_) => {
                    let _ = child.kill().await;
                    return Err(WorkerError::Timeout(config.handshake_timeout));
                }
            };

        Ok(Self {
            child,
            stdin,
            stdout,
            decoder,
            protocol_version,
            stderr_captured,
        })
    }

    /// Return the negotiated wire protocol version.
    pub fn protocol_version(&self) -> u32 {
        self.protocol_version
    }

    /// Execute a test file on this worker process with streaming callback and timeout cap.
    pub async fn run_file_streaming<F>(
        &mut self,
        file: &str,
        options: RunFileOptions,
        timeout: Duration,
        mut on_event: F,
    ) -> Result<WorkerMessage, WorkerError>
    where
        F: FnMut(&WorkerMessage),
    {
        let frame = encode_frame(&OrchestratorMessage::RunFile {
            file: file.to_string(),
            options,
        })?;
        self.stdin.write_all(&frame).await?;
        self.stdin.flush().await?;

        let run_fut = async {
            let mut buf = [0u8; 8192];
            loop {
                while let Some(msg) = self.decoder.poll_next()? {
                    on_event(&msg);
                    match msg {
                        WorkerMessage::FileDone { .. } => return Ok(msg),
                        WorkerMessage::Fatal { error } => {
                            return Err(WorkerError::WorkerCrashed {
                                file: file.to_string(),
                                message: error.message,
                            });
                        }
                        _ => {}
                    }
                }

                let n = self.stdout.read(&mut buf).await?;
                if n == 0 {
                    let stderr_msg =
                        String::from_utf8_lossy(&self.stderr_captured.lock().await).to_string();
                    let exit_status = self
                        .child
                        .try_wait()?
                        .map(|s| s.to_string())
                        .unwrap_or_else(|| "terminated".into());
                    return Err(WorkerError::WorkerCrashed {
                        file: file.to_string(),
                        message: format!("Exit status {}. Stderr: {}", exit_status, stderr_msg),
                    });
                }
                self.decoder.feed(&buf[..n]);
            }
        };

        match tokio::time::timeout(timeout, run_fut).await {
            Ok(res) => res,
            Err(_) => {
                let _ = self.child.kill().await;
                Err(WorkerError::Timeout(timeout))
            }
        }
    }

    /// Execute a test file and collect all resulting events until completion.
    pub async fn run_file(
        &mut self,
        file: &str,
        options: RunFileOptions,
        timeout: Duration,
    ) -> Result<Vec<WorkerMessage>, WorkerError> {
        let mut events = Vec::new();
        let done_msg = self
            .run_file_streaming(file, options, timeout, |msg| {
                events.push(msg.clone());
            })
            .await?;
        if !events.contains(&done_msg) {
            events.push(done_msg);
        }
        Ok(events)
    }

    /// Kill the worker process forcefully.
    pub async fn kill(&mut self) -> Result<(), WorkerError> {
        let _ = self.child.kill().await;
        let _ = self.child.wait().await;
        Ok(())
    }

    /// Request graceful shutdown and wait for exit.
    pub async fn shutdown(&mut self) -> Result<(), WorkerError> {
        let frame = encode_frame(&OrchestratorMessage::Shutdown)?;
        let _ = self.stdin.write_all(&frame).await;
        let _ = self.stdin.flush().await;

        let wait_fut = self.child.wait();
        if tokio::time::timeout(Duration::from_millis(500), wait_fut)
            .await
            .is_err()
        {
            let _ = self.child.kill().await;
        }
        Ok(())
    }

    /// Read currently captured stderr bytes.
    pub async fn captured_stderr(&self) -> Vec<u8> {
        self.stderr_captured.lock().await.clone()
    }

    /// Check whether the worker child process is still running.
    pub fn is_alive(&mut self) -> bool {
        matches!(self.child.try_wait(), Ok(None))
    }

    /// Execute a test file with hard orchestrator-side timeouts.
    ///
    /// Hard timeouts:
    /// - `file_timeout`: overall file wall-clock cap.
    /// - `test_grace`: added to `options.timeout_ms` to determine hard test cap.
    ///
    /// If breached, worker is killed immediately, a synthetic failure is emitted for the active test,
    /// and `FileDone` is returned so execution continues.
    pub async fn run_file_with_hard_timeout<F>(
        &mut self,
        file: &str,
        options: RunFileOptions,
        file_timeout: Duration,
        test_grace: Duration,
        mut on_event: F,
    ) -> Result<WorkerMessage, WorkerError>
    where
        F: FnMut(&WorkerMessage),
    {
        let frame = encode_frame(&OrchestratorMessage::RunFile {
            file: file.to_string(),
            options: options.clone(),
        })?;
        self.stdin.write_all(&frame).await?;
        self.stdin.flush().await?;

        let test_base_ms = if options.timeout_ms > 0 {
            options.timeout_ms
        } else {
            2000
        };
        let test_hard_cap = Duration::from_millis(test_base_ms) + test_grace;

        let file_start = Instant::now();
        let mut active_test: Option<(String, Instant)> = None;
        let mut buf = [0u8; 8192];

        loop {
            let file_deadline = file_start + file_timeout;
            let test_deadline = active_test
                .as_ref()
                .map(|(_, start)| *start + test_hard_cap);
            let next_deadline = match test_deadline {
                Some(td) => std::cmp::min(file_deadline, td),
                None => file_deadline,
            };

            let now = Instant::now();
            let sleep_dur = if next_deadline > now {
                next_deadline - now
            } else {
                Duration::from_millis(0)
            };

            tokio::select! {
                _ = tokio::time::sleep(sleep_dur) => {
                    let is_test_timeout = active_test
                        .as_ref()
                        .map(|(_, start)| start.elapsed() >= test_hard_cap)
                        .unwrap_or(false);
                    let active_id = active_test.map(|(id, _)| id).unwrap_or_else(|| "hard_timeout".into());

                    let _ = self.child.kill().await;
                    let _ = self.child.wait().await;

                    let (name, message) = if is_test_timeout {
                        (
                            "TimeoutError",
                            format!(
                                "Hard timeout of {:?} exceeded for test '{}' (infinite loop or hang)",
                                test_hard_cap, active_id
                            ),
                        )
                    } else {
                        (
                            "TimeoutError",
                            format!(
                                "File execution hard timeout of {:?} exceeded for '{}'",
                                file_timeout, file
                            ),
                        )
                    };

                    let fail_msg = WorkerMessage::TestFail {
                        id: active_id.clone(),
                        duration_ms: file_start.elapsed().as_millis() as u64,
                        error: ProtocolError {
                            name: name.into(),
                            message,
                            stack: None,
                            code: Some("ERR_HARD_TIMEOUT".into()),
                            actual: None,
                            expected: None,
                            show_diff: false,
                            operator: None,
                        },
                    };
                    on_event(&fail_msg);

                    let done_msg = WorkerMessage::FileDone {
                        file: file.to_string(),
                        counts: TestCounts {
                            passes: 0,
                            failures: 1,
                            pending: 0,
                            duration_ms: file_start.elapsed().as_millis() as u64,
                        },
                    };
                    on_event(&done_msg);
                    return Ok(done_msg);
                }
                res = self.read_frame_or_data(&mut buf) => {
                    match res? {
                        Some(msg) => {
                            match &msg {
                                WorkerMessage::TestStart { id, .. } => {
                                    active_test = Some((id.clone(), Instant::now()));
                                }
                                WorkerMessage::TestPass { id, .. }
                                | WorkerMessage::TestFail { id, .. }
                                | WorkerMessage::TestPending { id } => {
                                    if active_test.as_ref().map(|(tid, _)| tid) == Some(id) {
                                        active_test = None;
                                    }
                                }
                                WorkerMessage::FileDone { .. } => {
                                    on_event(&msg);
                                    return Ok(msg);
                                }
                                WorkerMessage::Fatal { error } => {
                                    on_event(&msg);
                                    return Err(WorkerError::WorkerCrashed {
                                        file: file.to_string(),
                                        message: error.message.clone(),
                                    });
                                }
                                _ => {}
                            }
                            on_event(&msg);
                        }
                        None => {
                            let stderr_msg =
                                String::from_utf8_lossy(&self.stderr_captured.lock().await).to_string();
                            let exit_status = self
                                .child
                                .try_wait()?
                                .map(|s| s.to_string())
                                .unwrap_or_else(|| "terminated".into());
                            return Err(WorkerError::WorkerCrashed {
                                file: file.to_string(),
                                message: format!("Exit status {}. Stderr: {}", exit_status, stderr_msg),
                            });
                        }
                    }
                }
            }
        }
    }

    async fn read_frame_or_data(
        &mut self,
        buf: &mut [u8; 8192],
    ) -> Result<Option<WorkerMessage>, WorkerError> {
        if let Some(msg) = self.decoder.poll_next()? {
            return Ok(Some(msg));
        }

        let n = self.stdout.read(buf).await?;
        if n == 0 {
            return Ok(None);
        }
        self.decoder.feed(&buf[..n]);

        Ok(self.decoder.poll_next()?)
    }
}
