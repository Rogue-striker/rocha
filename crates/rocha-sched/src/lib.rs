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

pub mod timings;
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
    pub async fn run_files<R: Reporter + Send + 'static>(
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

        // Order queue longest-first using timings
        let ordered_files = order_files_longest_first(&files, &timing_store, &self.config.root_dir);

        let file_strings: Vec<String> = ordered_files
            .into_iter()
            .map(|p| p.to_string_lossy().to_string())
            .collect();

        let start_time = Instant::now();
        let (tx, mut rx) = mpsc::unbounded_channel::<(String, WorkerMessage)>();

        // Shared queue of files
        let queue = Arc::new(Mutex::new(VecDeque::from(file_strings.clone())));
        let num_jobs = std::cmp::min(self.config.jobs, file_strings.len());
        let num_jobs = std::cmp::max(1, num_jobs);

        let mut worker_tasks = Vec::new();

        for _ in 0..num_jobs {
            let q = Arc::clone(&queue);
            let tx_clone = tx.clone();
            let config = self.config.clone();

            let task = tokio::spawn(async move {
                match config.isolate {
                    IsolationMode::None => {
                        let mut worker = match WorkerProcess::spawn(&config.worker_config).await {
                            Ok(w) => w,
                            Err(e) => return Err(SchedulerError::Worker(e)),
                        };

                        while let Some(file) = {
                            let mut guard = q.lock().await;
                            guard.pop_front()
                        } {
                            if !worker.is_alive() {
                                worker = match WorkerProcess::spawn(&config.worker_config).await {
                                    Ok(w) => w,
                                    Err(e) => return Err(SchedulerError::Worker(e)),
                                };
                            }
                            let tx = tx_clone.clone();
                            let file_name = file.clone();
                            let _ = worker
                                .run_file_with_hard_timeout(
                                    &file,
                                    config.run_options.clone(),
                                    config.file_timeout,
                                    config.test_grace,
                                    |ev| {
                                        let _ = tx.send((file_name.clone(), ev.clone()));
                                    },
                                )
                                .await;
                        }

                        let _ = worker.shutdown().await;
                        Ok(())
                    }
                    IsolationMode::File => {
                        let mut active_worker: Option<WorkerProcess> = None;

                        while let Some(file) = {
                            let mut guard = q.lock().await;
                            guard.pop_front()
                        } {
                            let mut worker = match active_worker.take() {
                                Some(w) => w,
                                None => match WorkerProcess::spawn(&config.worker_config).await {
                                    Ok(w) => w,
                                    Err(e) => return Err(SchedulerError::Worker(e)),
                                },
                            };

                            let has_more = !q.lock().await.is_empty();
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
                            let _ = worker
                                .run_file_with_hard_timeout(
                                    &file,
                                    config.run_options.clone(),
                                    config.file_timeout,
                                    config.test_grace,
                                    |ev| {
                                        let _ = tx.send((file_name.clone(), ev.clone()));
                                    },
                                )
                                .await;

                            let _ = worker.shutdown().await;

                            if let Some(st) = spare_task {
                                match st.await {
                                    Ok(Ok(w)) => active_worker = Some(w),
                                    Ok(Err(e)) => return Err(SchedulerError::Worker(e)),
                                    Err(je) => return Err(SchedulerError::Join(je)),
                                }
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
            if let WorkerMessage::FileDone { counts, .. } = &event {
                file_durations.push((file.clone(), counts.duration_ms as f64));
            }
            merger.push(&file, event, reporter);
        }

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
        Ok(summary)
    }
}
