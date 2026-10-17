//! Test scheduler and warm worker execution pool for Rocha.

use rocha_protocol::{RunFileOptions, WorkerMessage};
use rocha_report::{EventMerger, MergeMode, Reporter, Summary};
use rocha_worker::{derive_file_timeout, WorkerConfig, WorkerError, WorkerProcess};
use std::collections::VecDeque;
use std::path::PathBuf;
use std::sync::Arc;
use std::time::{Duration, Instant};
use thiserror::Error;
use tokio::sync::{mpsc, Mutex};

pub mod sharding;
pub mod timings;
pub use sharding::{
    calculate_imbalance, calculate_shard_weights, partition_files_into_shards, select_shard_files,
    ShardError, ShardSpec,
};
pub use timings::{
    compute_file_key, order_files_longest_first, simulate_schedule, TimingEntry, TimingStore,
};

/// Isolation mode between test file executions.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum IsolationMode {
    /// Each test file is executed in a fresh Node process (default).
    #[default]
    File,
    /// Workers are reused across multiple files sequentially without restart.
    None,
}

/// Errors that can occur during test suite scheduling and pool execution.
#[derive(Debug, Error)]
pub enum SchedulerError {
    /// Run interrupted by signal (130 for SIGINT, 143 for SIGTERM).
    #[error("Run interrupted by signal {code}")]
    Interrupted { code: i32, summary: Summary },
    /// Worker error.
    #[error("Worker error: {0}")]
    Worker(#[from] WorkerError),
    /// Standard I/O error.
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
    /// Task join error.
    #[error("Join error: {0}")]
    Join(#[from] tokio::task::JoinError),
}

/// Configuration options for the scheduler and worker pool.
#[derive(Debug, Clone)]
pub struct SchedulerConfig {
    /// Maximum concurrent worker slots.
    pub jobs: usize,
    /// Worker process isolation mode.
    pub isolate: IsolationMode,
    /// Configuration used to spawn Node workers.
    pub worker_config: WorkerConfig,
    /// Options passed to the worker harness for each file.
    pub run_options: RunFileOptions,
    /// Hard wall-clock limit for each file execution.
    pub file_timeout: Duration,
    /// Grace duration added to test timeout to enforce hard test cap.
    pub test_grace: Duration,
    /// Event release order to reporters (ordered vs streaming).
    pub merge_mode: MergeMode,
    /// Path to timing history JSON file (e.g. .rocha/timings.json).
    pub timings_file: Option<PathBuf>,
    /// Root directory used for relative paths in timing history keys.
    pub root_dir: PathBuf,
    /// Optional sharding specification (e.g. shard 1 of 3).
    pub shard: Option<ShardSpec>,
    /// Whether to bail promptly on the first test failure across all workers.
    pub bail: bool,
    /// Shared tracker of active child process IDs (for test assertion of zero zombies).
    pub tracked_pids: Option<Arc<Mutex<Vec<u32>>>>,
}

impl Default for SchedulerConfig {
    fn default() -> Self {
        let cpus = std::thread::available_parallelism()
            .map(|p| p.get())
            .unwrap_or(4);
        let jobs = std::cmp::max(1, cpus.saturating_sub(1));

        Self {
            jobs,
            isolate: IsolationMode::File,
            worker_config: WorkerConfig::default(),
            run_options: RunFileOptions::default(),
            file_timeout: derive_file_timeout(None, None),
            test_grace: Duration::from_secs(5),
            merge_mode: MergeMode::Ordered,
            timings_file: Some(PathBuf::from(".rocha/timings.json")),
            root_dir: std::env::current_dir().unwrap_or_else(|_| PathBuf::from(".")),
            shard: None,
            bail: false,
            tracked_pids: None,
        }
    }
}

/// Multi-worker pool scheduler executing test files concurrently.
pub struct Scheduler {
    config: SchedulerConfig,
}

impl Scheduler {
    /// Create a new scheduler with the provided configuration.
    pub fn new(config: SchedulerConfig) -> Self {
        Self { config }
    }

    /// Return the scheduler configuration.
    pub fn config(&self) -> &SchedulerConfig {
        &self.config
    }

    /// Execute a collection of test files across the worker pool and feed events into `reporter`.
    pub async fn run_files<R: Reporter>(
        &self,
        files: Vec<PathBuf>,
        reporter: &mut R,
    ) -> Result<Summary, SchedulerError> {
        if files.is_empty() {
            let summary = Summary::default();
            reporter.finish(&summary)?;
            return Ok(summary);
        }

        // Load historical timings if configured
        let mut timing_store = self
            .config
            .timings_file
            .as_ref()
            .map(TimingStore::load)
            .unwrap_or_default();

        // Filter files by shard if requested
        let target_files = if let Some(shard) = self.config.shard {
            select_shard_files(&files, shard, &timing_store, &self.config.root_dir)
        } else {
            files
        };

        if target_files.is_empty() {
            let summary = Summary::default();
            reporter.finish(&summary)?;
            return Ok(summary);
        }

        // Order queue longest-first using timings
        let ordered_files =
            order_files_longest_first(&target_files, &timing_store, &self.config.root_dir);

        let file_strings: Vec<String> = ordered_files
            .into_iter()
            .map(|p| p.to_string_lossy().to_string())
            .collect();

        let start_time = Instant::now();
        let (tx, mut rx) = mpsc::unbounded_channel::<(String, WorkerMessage)>();

        // Cancellation watch channel for bail & signals
        let (abort_tx, abort_rx) = tokio::sync::watch::channel(false);
        let interrupted = Arc::new(std::sync::atomic::AtomicI32::new(0));

        // Shared queue of files
        let queue = Arc::new(Mutex::new(VecDeque::from(file_strings.clone())));
        let num_jobs = std::cmp::min(self.config.jobs, file_strings.len());
        let num_jobs = std::cmp::max(1, num_jobs);

        // Spawn OS signal listener task
        let sig_abort_tx = abort_tx.clone();
        let sig_queue = Arc::clone(&queue);
        let sig_interrupted = Arc::clone(&interrupted);

        let signal_task = tokio::spawn(async move {
            #[cfg(unix)]
            {
                use tokio::signal::unix::{signal, SignalKind};
                let mut sigint = match signal(SignalKind::interrupt()) {
                    Ok(s) => s,
                    Err(_) => return,
                };
                let mut sigterm = match signal(SignalKind::terminate()) {
                    Ok(s) => s,
                    Err(_) => return,
                };

                tokio::select! {
                    _ = sigint.recv() => {
                        sig_interrupted.store(130, std::sync::atomic::Ordering::SeqCst);
                        let _ = sig_abort_tx.send(true);
                        sig_queue.lock().await.clear();
                    }
                    _ = sigterm.recv() => {
                        sig_interrupted.store(143, std::sync::atomic::Ordering::SeqCst);
                        let _ = sig_abort_tx.send(true);
                        sig_queue.lock().await.clear();
                    }
                }
            }
            #[cfg(not(unix))]
            {
                if tokio::signal::ctrl_c().await.is_ok() {
                    sig_interrupted.store(130, std::sync::atomic::Ordering::SeqCst);
                    let _ = sig_abort_tx.send(true);
                    sig_queue.lock().await.clear();
                }
            }
        });

        let mut worker_tasks = Vec::new();

        for _ in 0..num_jobs {
            let q = Arc::clone(&queue);
            let tx_clone = tx.clone();
            let config = self.config.clone();
            let mut worker_abort_rx = abort_rx.clone();

            let task = tokio::spawn(async move {
                match config.isolate {
                    IsolationMode::None => {
                        let mut worker = match WorkerProcess::spawn(&config.worker_config).await {
                            Ok(w) => w,
                            Err(e) => return Err(SchedulerError::Worker(e)),
                        };
                        if let Some(ref pids) = config.tracked_pids {
                            if let Some(pid) = worker.id() {
                                pids.lock().await.push(pid);
                            }
                        }

                        while let Some(file) = {
                            if *worker_abort_rx.borrow() {
                                None
                            } else {
                                let mut guard = q.lock().await;
                                guard.pop_front()
                            }
                        } {
                            if !worker.is_alive() {
                                worker = match WorkerProcess::spawn(&config.worker_config).await {
                                    Ok(w) => w,
                                    Err(e) => return Err(SchedulerError::Worker(e)),
                                };
                                if let Some(ref pids) = config.tracked_pids {
                                    if let Some(pid) = worker.id() {
                                        pids.lock().await.push(pid);
                                    }
                                }
                            }
                            let tx = tx_clone.clone();
                            let file_name = file.clone();
                            let aborted = {
                                let mut run_fut = std::pin::pin!(worker
                                    .run_file_with_hard_timeout(
                                        &file,
                                        config.run_options.clone(),
                                        config.file_timeout,
                                        config.test_grace,
                                        |ev| {
                                            let _ = tx.send((file_name.clone(), ev.clone()));
                                        },
                                    ));

                                tokio::select! {
                                    _ = &mut run_fut => false,
                                    _ = worker_abort_rx.changed() => *worker_abort_rx.borrow(),
                                }
                            };

                            if aborted {
                                let _ = worker
                                    .abort("execution aborted", Duration::from_millis(500))
                                    .await;
                                return Ok(());
                            }
                        }

                        let _ = worker.shutdown().await;
                        Ok(())
                    }
                    IsolationMode::File => {
                        let mut active_worker: Option<WorkerProcess> = None;

                        while let Some(file) = {
                            if *worker_abort_rx.borrow() {
                                None
                            } else {
                                let mut guard = q.lock().await;
                                guard.pop_front()
                            }
                        } {
                            let mut worker = match active_worker.take() {
                                Some(w) => w,
                                None => match WorkerProcess::spawn(&config.worker_config).await {
                                    Ok(w) => w,
                                    Err(e) => return Err(SchedulerError::Worker(e)),
                                },
                            };
                            if let Some(ref pids) = config.tracked_pids {
                                if let Some(pid) = worker.id() {
                                    pids.lock().await.push(pid);
                                }
                            }

                            let has_more = !q.lock().await.is_empty() && !*worker_abort_rx.borrow();
                            let spare_task = if has_more {
                                let w_cfg = config.worker_config.clone();
                                Some(tokio::spawn(
                                    async move { WorkerProcess::spawn(&w_cfg).await },
                                ))
                            } else {
                                None
                            };

                            let tx = tx_clone.clone();
                            let file_name = file.clone();
                            let aborted = {
                                let mut run_fut = std::pin::pin!(worker
                                    .run_file_with_hard_timeout(
                                        &file,
                                        config.run_options.clone(),
                                        config.file_timeout,
                                        config.test_grace,
                                        |ev| {
                                            let _ = tx.send((file_name.clone(), ev.clone()));
                                        },
                                    ));

                                tokio::select! {
                                    _ = &mut run_fut => false,
                                    _ = worker_abort_rx.changed() => *worker_abort_rx.borrow(),
                                }
                            };

                            if aborted {
                                let _ = worker
                                    .abort("execution aborted", Duration::from_millis(500))
                                    .await;
                            } else {
                                let _ = worker.shutdown().await;
                            }

                            if let Some(st) = spare_task {
                                match st.await {
                                    Ok(Ok(mut w)) => {
                                        if let Some(ref pids) = config.tracked_pids {
                                            if let Some(pid) = w.id() {
                                                pids.lock().await.push(pid);
                                            }
                                        }
                                        if aborted || *worker_abort_rx.borrow() {
                                            let _ = w.shutdown().await;
                                        } else {
                                            active_worker = Some(w);
                                        }
                                    }
                                    Ok(Err(e)) => return Err(SchedulerError::Worker(e)),
                                    Err(je) => return Err(SchedulerError::Join(je)),
                                }
                            }

                            if aborted {
                                return Ok(());
                            }
                        }

                        if let Some(mut remaining) = active_worker {
                            let _ = remaining.shutdown().await;
                        }

                        Ok(())
                    }
                }
            });

            worker_tasks.push(task);
        }

        // Close the sending end of this thread so rx closes when workers complete
        drop(tx);

        // Process events through EventMerger into reporter
        let mut merger = EventMerger::new(file_strings.clone(), self.config.merge_mode);
        let mut file_durations: Vec<(String, f64)> = Vec::new();

        while let Some((file, event)) = rx.recv().await {
            // Check for test or hook failure when bail is enabled
            if (self.config.bail || self.config.run_options.bail)
                && matches!(
                    &event,
                    WorkerMessage::TestFail { .. } | WorkerMessage::HookFail { .. }
                )
            {
                let _ = abort_tx.send(true);
                let mut guard = queue.lock().await;
                guard.clear();
            }

            if let WorkerMessage::FileDone { counts, .. } = &event {
                file_durations.push((file.clone(), counts.duration_ms as f64));
            }
            merger.push(&file, event, reporter);
        }

        signal_task.abort();

        // Update timing history
        if let Some(ref timings_path) = self.config.timings_file {
            for (f, dur) in file_durations {
                let p = PathBuf::from(&f);
                let key = compute_file_key(&self.config.root_dir, &p);
                timing_store.record_duration(&key, dur);
            }
            let _ = timing_store.save(timings_path);
        }

        // Wait for all worker tasks to finish
        for t in worker_tasks {
            t.await??;
        }

        merger.set_duration_ms(start_time.elapsed().as_millis() as u64);
        let summary = merger.finish(reporter)?;

        let sig_code = interrupted.load(std::sync::atomic::Ordering::SeqCst);
        if sig_code != 0 {
            return Err(SchedulerError::Interrupted {
                code: sig_code,
                summary,
            });
        }

        Ok(summary)
    }
}
