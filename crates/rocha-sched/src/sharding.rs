//! Deterministic timing-balanced sharding for CI pipelines (`--shard i/n`).

use crate::timings::{compute_file_key, TimingStore};
use std::path::{Path, PathBuf};
use std::str::FromStr;
use thiserror::Error;

/// Errors that can occur when parsing or applying shard specifications.
#[derive(Debug, Error, PartialEq, Eq)]
pub enum ShardError {
    /// Invalid shard specification string format.
    #[error("Invalid shard specification '{0}'. Expected format 'i/n' (e.g. '1/3').")]
    InvalidFormat(String),
    /// Shard index is 0 or exceeds total number of shards.
    #[error(
        "Shard index {index} out of range for total {total}. Must satisfy 1 <= index <= total."
    )]
    OutOfRange { index: usize, total: usize },
    /// Total number of shards is 0.
    #[error("Total shards must be at least 1.")]
    ZeroShards,
}

/// Shard specification (`--shard i/n`).
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct ShardSpec {
    /// 1-based shard index.
    pub index: usize,
    /// Total number of shards.
    pub total: usize,
}

impl FromStr for ShardSpec {
    type Err = ShardError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<&str> = s.trim().split('/').collect();
        if parts.len() != 2 {
            return Err(ShardError::InvalidFormat(s.to_string()));
        }

        let index: usize = parts[0]
            .trim()
            .parse()
            .map_err(|_| ShardError::InvalidFormat(s.to_string()))?;
        let total: usize = parts[1]
            .trim()
            .parse()
            .map_err(|_| ShardError::InvalidFormat(s.to_string()))?;

        if total == 0 {
            return Err(ShardError::ZeroShards);
        }

        if index == 0 || index > total {
            return Err(ShardError::OutOfRange { index, total });
        }

        Ok(Self { index, total })
    }
}

/// Partition test files into `total_shards` timing-balanced buckets using greedy LPT bin packing.
///
/// Determinism guarantees:
/// 1. Files are ordered longest-first using historical timings.
/// 2. Tie-breaking on equal estimated duration is resolved by path lexicographically.
/// 3. In the event of identical bin loads, the file is assigned to the lowest bin index.
pub fn partition_files_into_shards(
    files: &[PathBuf],
    total_shards: usize,
    store: &TimingStore,
    root_dir: &Path,
) -> Vec<Vec<PathBuf>> {
    if total_shards == 0 {
        return Vec::new();
    }
    if total_shards == 1 || files.is_empty() {
        return vec![files.to_vec()];
    }

    // Pair each file with its estimated duration
    let mut scored: Vec<(PathBuf, f64)> = files
        .iter()
        .map(|f| {
            let key = compute_file_key(root_dir, f);
            let dur = store.estimate_duration(&key);
            // Ensure minimum non-zero duration so empty stores distribute files evenly
            let dur = if dur <= 0.0 { 1.0 } else { dur };
            (f.clone(), dur)
        })
        .collect();

    // Sort descending by duration, then ascending by path
    scored.sort_by(|(path_a, score_a), (path_b, score_b)| {
        score_b
            .partial_cmp(score_a)
            .unwrap_or(std::cmp::Ordering::Equal)
            .then_with(|| path_a.cmp(path_b))
    });

    // Bins storing (accumulated_weight, files)
    let mut bins: Vec<(f64, Vec<PathBuf>)> = (0..total_shards).map(|_| (0.0, Vec::new())).collect();

    for (file, weight) in scored {
        // Find bin with minimum accumulated weight
        let mut min_idx = 0;
        let mut min_weight = bins[0].0;

        for (idx, (bin_weight, _)) in bins.iter().enumerate().skip(1) {
            if *bin_weight < min_weight {
                min_weight = *bin_weight;
                min_idx = idx;
            }
        }

        bins[min_idx].0 += weight;
        bins[min_idx].1.push(file);
    }

    bins.into_iter().map(|(_, files)| files).collect()
}

/// Select files assigned to the specific `shard` (1-based index).
pub fn select_shard_files(
    files: &[PathBuf],
    shard: ShardSpec,
    store: &TimingStore,
    root_dir: &Path,
) -> Vec<PathBuf> {
    let all_shards = partition_files_into_shards(files, shard.total, store, root_dir);
    if shard.index == 0 || shard.index > all_shards.len() {
        return Vec::new();
    }
    all_shards[shard.index - 1].clone()
}

/// Calculate the total estimated weight for each shard partition.
pub fn calculate_shard_weights(
    shards: &[Vec<PathBuf>],
    store: &TimingStore,
    root_dir: &Path,
) -> Vec<f64> {
    shards
        .iter()
        .map(|shard_files| {
            shard_files
                .iter()
                .map(|f| {
                    let key = compute_file_key(root_dir, f);
                    let dur = store.estimate_duration(&key);
                    if dur <= 0.0 {
                        1.0
                    } else {
                        dur
                    }
                })
                .sum::<f64>()
        })
        .collect()
}

/// Calculate the relative imbalance between shards: `(max_weight - min_weight) / max_weight`.
///
/// Returns 0.0 if there is 1 or fewer shards or max_weight is 0.0.
pub fn calculate_imbalance(weights: &[f64]) -> f64 {
    if weights.len() <= 1 {
        return 0.0;
    }
    let max = weights.iter().copied().fold(0.0f64, |a, b| a.max(b));
    let min = weights.iter().copied().fold(f64::INFINITY, |a, b| a.min(b));
    if max <= 0.0 {
        return 0.0;
    }
    (max - min) / max
}
