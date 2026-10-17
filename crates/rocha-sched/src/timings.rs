//! Timing history persistence and longest-first scheduling queue.

use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};

/// Current file format version for timings store.
pub const TIMINGS_VERSION: u32 = 1;

/// Default exponential moving average weight (0.3 puts ~70% weight on prior history).
pub const DEFAULT_EMA_ALPHA: f64 = 0.3;

/// Timing record for an individual test file.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct TimingEntry {
    /// Exponential moving average of duration in milliseconds.
    pub duration_ms: f64,
    /// Number of sample runs recorded.
    pub samples: u64,
    /// Unix timestamp in seconds when this entry was last updated.
    pub last_updated: u64,
}

/// Versioned persistent store for test execution timings.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct TimingStore {
    /// Schema format version.
    pub version: u32,
    /// EMA smoothing factor alpha.
    pub alpha: f64,
    /// Timing entries keyed by relative file path and content hash prefix.
    pub entries: HashMap<String, TimingEntry>,
}

impl Default for TimingStore {
    fn default() -> Self {
        Self {
            version: TIMINGS_VERSION,
            alpha: DEFAULT_EMA_ALPHA,
            entries: HashMap::new(),
        }
    }
}

impl TimingStore {
    /// Create a new empty timing store.
    pub fn new() -> Self {
        Self::default()
    }

    /// Load timing store from path.
    ///
    /// If the file does not exist, or contains corrupted / invalid data,
    /// a fresh empty store is returned without failing.
    pub fn load<P: AsRef<Path>>(path: P) -> Self {
        let path = path.as_ref();
        if !path.exists() {
            return Self::new();
        }

        let content = match fs::read_to_string(path) {
            Ok(c) => c,
            Err(_) => return Self::new(),
        };

        match serde_json::from_str::<TimingStore>(&content) {
            Ok(store) => {
                if store.version != TIMINGS_VERSION {
                    tracing::warn!(
                        "Timings store version mismatch: found {}, expected {}. Resetting.",
                        store.version,
                        TIMINGS_VERSION
                    );
                    Self::new()
                } else {
                    store
                }
            }
            Err(e) => {
                tracing::warn!("Failed to parse timings file {:?}: {}. Resetting.", path, e);
                Self::new()
            }
        }
    }

    /// Save timing store to path atomically using a temporary file.
    pub fn save<P: AsRef<Path>>(&self, path: P) -> std::io::Result<()> {
        let path = path.as_ref();
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent)?;
        }

        let pid = std::process::id();
        let tmp_path = path.with_extension(format!("tmp.{}", pid));

        let json = serde_json::to_string_pretty(self)
            .map_err(|e| std::io::Error::new(std::io::ErrorKind::InvalidData, e))?;

        fs::write(&tmp_path, json)?;
        fs::rename(&tmp_path, path)?;
        Ok(())
    }

    /// Record a run duration for a given key, updating its exponential moving average.
    pub fn record_duration(&mut self, key: &str, duration_ms: f64) {
        let now = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|d| d.as_secs())
            .unwrap_or(0);

        if let Some(entry) = self.entries.get_mut(key) {
            entry.duration_ms = self.alpha * duration_ms + (1.0 - self.alpha) * entry.duration_ms;
            entry.samples += 1;
            entry.last_updated = now;
        } else {
            self.entries.insert(
                key.to_string(),
                TimingEntry {
                    duration_ms,
                    samples: 1,
                    last_updated: now,
                },
            );
        }
    }

    /// Compute the median duration across all recorded timing entries.
    ///
    /// Returns 0.0 if the store is empty.
    pub fn median_duration(&self) -> f64 {
        if self.entries.is_empty() {
            return 0.0;
        }

        let mut durations: Vec<f64> = self.entries.values().map(|e| e.duration_ms).collect();
        durations.sort_by(|a, b| a.partial_cmp(b).unwrap_or(std::cmp::Ordering::Equal));

        let mid = durations.len() / 2;
        if durations.len().is_multiple_of(2) {
            (durations[mid - 1] + durations[mid]) / 2.0
        } else {
            durations[mid]
        }
    }

    /// Estimate duration for a file key. If exact key is missing, tries path prefix;
    /// otherwise falls back to store median.
    pub fn estimate_duration(&self, file_key: &str) -> f64 {
        if let Some(entry) = self.entries.get(file_key) {
            return entry.duration_ms;
        }

        // Try prefix match without hash
        if let Some(path_part) = file_key.split(':').next() {
            for (k, entry) in &self.entries {
                if k.starts_with(path_part) {
                    return entry.duration_ms;
                }
            }
        }

        self.median_duration()
    }
}

/// Compute persistent key for a file path: `<relative_path>:<content_hash_prefix>`.
pub fn compute_file_key(root_dir: &Path, file_path: &Path) -> String {
    let rel_path = file_path
        .strip_prefix(root_dir)
        .unwrap_or(file_path)
        .to_string_lossy()
        .replace("\\", "/");

    let hash_prefix = if let Ok(bytes) = fs::read(file_path) {
        let hash = blake3::hash(&bytes).to_hex().to_string();
        hash[..12].to_string()
    } else {
        "000000000000".to_string()
    };

    format!("{}:{}", rel_path, hash_prefix)
}

/// Order files longest-first according to historical timings in `store`.
///
/// Unrecorded files receive the median duration of known files.
/// Ties are broken by file path alphabetically to maintain deterministic scheduling.
pub fn order_files_longest_first(
    files: &[PathBuf],
    store: &TimingStore,
    root_dir: &Path,
) -> Vec<PathBuf> {
    let mut scored: Vec<(PathBuf, f64)> = files
        .iter()
        .map(|f| {
            let key = compute_file_key(root_dir, f);
            let score = store.estimate_duration(&key);
            (f.clone(), score)
        })
        .collect();

    // Sort descending by estimated duration, ascending by path for determinism
    scored.sort_by(|(path_a, score_a), (path_b, score_b)| {
        score_b
            .partial_cmp(score_a)
            .unwrap_or(std::cmp::Ordering::Equal)
            .then_with(|| path_a.cmp(path_b))
    });

    scored.into_iter().map(|(p, _)| p).collect()
}

/// Simulate makespan (total wall-clock completion time) of processing task durations
/// across `num_workers` using a greedy first-available-worker strategy.
pub fn simulate_schedule(durations: &[f64], num_workers: usize) -> f64 {
    if durations.is_empty() {
        return 0.0;
    }
    let num_workers = std::cmp::max(1, num_workers);
    let mut worker_finish_times = vec![0.0f64; num_workers];

    for &dur in durations {
        // Assign to worker that becomes free earliest
        let mut min_idx = 0;
        let mut min_time = worker_finish_times[0];
        for (i, &t) in worker_finish_times.iter().enumerate().skip(1) {
            if t < min_time {
                min_time = t;
                min_idx = i;
            }
        }
        worker_finish_times[min_idx] += dur;
    }

    worker_finish_times
        .into_iter()
        .fold(0.0f64, |acc, val| acc.max(val))
}
