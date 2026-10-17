//! File watching and incremental test execution for Rocha.

use globset::{Glob, GlobSet, GlobSetBuilder};
use notify::{Event, RecommendedWatcher, RecursiveMode, Watcher as NotifyWatcher};
use std::collections::HashSet;
use std::path::{Component, Path, PathBuf};
use std::sync::mpsc as std_mpsc;
use std::time::Duration;
use thiserror::Error;
use tokio::sync::mpsc as tokio_mpsc;

/// Watcher configuration options.
#[derive(Debug, Clone)]
pub struct WatchConfig {
    /// Root directory or paths to watch.
    pub root_dir: PathBuf,
    /// Explicit file patterns to watch (if empty, watches all relevant files).
    pub watch_files: Vec<String>,
    /// Patterns to ignore.
    pub watch_ignore: Vec<String>,
    /// Debounce duration before firing burst event.
    pub debounce: Duration,
}

impl Default for WatchConfig {
    fn default() -> Self {
        Self {
            root_dir: std::env::current_dir().unwrap_or_else(|_| PathBuf::from(".")),
            watch_files: Vec::new(),
            watch_ignore: Vec::new(),
            debounce: Duration::from_millis(100),
        }
    }
}

/// Errors originating from the watcher.
#[derive(Debug, Error)]
pub enum WatchError {
    /// Notify filesystem watcher error.
    #[error("Notify error: {0}")]
    Notify(#[from] notify::Error),
    /// Glob compilation error.
    #[error("Glob error: {0}")]
    Glob(#[from] globset::Error),
    /// I/O error.
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
}

/// File system change watcher with debouncing and pattern filtering.
pub struct Watcher {
    _raw_watcher: RecommendedWatcher,
    rx: tokio_mpsc::Receiver<Vec<PathBuf>>,
}

impl Watcher {
    /// Create and start a new debounced file watcher.
    pub fn new(config: WatchConfig) -> Result<Self, WatchError> {
        let watch_files_matcher = if !config.watch_files.is_empty() {
            let mut builder = GlobSetBuilder::new();
            for pat in &config.watch_files {
                let g = if pat.starts_with('*') || pat.starts_with('/') {
                    Glob::new(pat)?
                } else {
                    Glob::new(&format!("**/{}", pat))?
                };
                builder.add(g);
            }
            Some(builder.build()?)
        } else {
            None
        };

        let watch_ignore_matcher = if !config.watch_ignore.is_empty() {
            let mut builder = GlobSetBuilder::new();
            for pat in &config.watch_ignore {
                let g = if pat.starts_with('*') || pat.starts_with('/') {
                    Glob::new(pat)?
                } else {
                    Glob::new(&format!("**/{}", pat))?
                };
                builder.add(g);
            }
            Some(builder.build()?)
        } else {
            None
        };

        let (std_tx, std_rx) = std_mpsc::channel();

        let mut raw_watcher = notify::recommended_watcher(move |res: notify::Result<Event>| {
            if let Ok(event) = res {
                for path in event.paths {
                    let _ = std_tx.send(path);
                }
            }
        })?;

        raw_watcher.watch(&config.root_dir, RecursiveMode::Recursive)?;

        let (tokio_tx, tokio_rx) = tokio_mpsc::channel(100);
        let debounce = config.debounce;

        // Bridge std_mpsc into tokio async channel with debounce
        tokio::spawn(async move {
            let mut pending: HashSet<PathBuf> = HashSet::new();

            loop {
                // Poll std_mpsc non-blocking or with timeout
                let mut received_any = false;
                while let Ok(path) = std_rx.try_recv() {
                    if should_watch_path(
                        &path,
                        watch_files_matcher.as_ref(),
                        watch_ignore_matcher.as_ref(),
                    ) {
                        pending.insert(path);
                        received_any = true;
                    }
                }

                if pending.is_empty() {
                    // Sleep small amount to yield thread
                    tokio::time::sleep(Duration::from_millis(10)).await;
                } else if received_any {
                    // Reset debounce window on new arrivals
                    tokio::time::sleep(debounce).await;
                } else {
                    // Debounce period elapsed without new arrivals; emit burst
                    let batch: Vec<PathBuf> = pending.drain().collect();
                    if tokio_tx.send(batch).await.is_err() {
                        break;
                    }
                }
            }
        });

        Ok(Self {
            _raw_watcher: raw_watcher,
            rx: tokio_rx,
        })
    }

    /// Wait for the next debounced burst of changed file paths.
    pub async fn next_burst(&mut self) -> Option<Vec<PathBuf>> {
        self.rx.recv().await
    }
}

/// Check if a path should be ignored.
pub fn should_ignore_path(path: &Path, ignore_matcher: Option<&GlobSet>) -> bool {
    // 1. Builtin hard ignores
    for comp in path.components() {
        if let Component::Normal(os_str) = comp {
            if let Some(s) = os_str.to_str() {
                if s == ".git" || s == "node_modules" || s == ".rocha" || s == "target" {
                    return true;
                }
            }
        }
    }

    // 2. Custom ignore patterns
    if let Some(matcher) = ignore_matcher {
        if matcher.is_match(path) {
            return true;
        }
    }

    false
}

/// Check if a changed path should trigger a run.
pub fn should_watch_path(
    path: &Path,
    files_matcher: Option<&GlobSet>,
    ignore_matcher: Option<&GlobSet>,
) -> bool {
    if should_ignore_path(path, ignore_matcher) {
        return false;
    }

    if path.is_dir() {
        return false;
    }

    if let Some(matcher) = files_matcher {
        matcher.is_match(path)
    } else {
        true
    }
}
