use rocha_discover::{discover_files, DiscoveryOptions};
use rocha_sched::sharding::{
    calculate_imbalance, calculate_shard_weights, partition_files_into_shards, select_shard_files,
    ShardError, ShardSpec,
};
use rocha_sched::timings::{compute_file_key, TimingStore};
use std::collections::HashSet;
use std::path::PathBuf;
use std::str::FromStr;

#[test]
fn test_shard_spec_parsing() {
    assert_eq!(
        ShardSpec::from_str("1/3"),
        Ok(ShardSpec { index: 1, total: 3 })
    );
    assert_eq!(
        ShardSpec::from_str("3/3"),
        Ok(ShardSpec { index: 3, total: 3 })
    );
    assert_eq!(
        ShardSpec::from_str(" 2 / 5 "),
        Ok(ShardSpec { index: 2, total: 5 })
    );

    assert_eq!(
        ShardSpec::from_str("0/3"),
        Err(ShardError::OutOfRange { index: 0, total: 3 })
    );
    assert_eq!(
        ShardSpec::from_str("4/3"),
        Err(ShardError::OutOfRange { index: 4, total: 3 })
    );
    assert_eq!(ShardSpec::from_str("1/0"), Err(ShardError::ZeroShards));
    assert!(matches!(
        ShardSpec::from_str("invalid"),
        Err(ShardError::InvalidFormat(_))
    ));
    assert!(matches!(
        ShardSpec::from_str("1/2/3"),
        Err(ShardError::InvalidFormat(_))
    ));
}

fn discover_medium_files() -> (PathBuf, Vec<PathBuf>) {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir
        .parent()
        .and_then(|p| p.parent())
        .expect("workspace root")
        .to_path_buf();

    let medium_dir = workspace_root.join("bench/suites/medium");
    let options = DiscoveryOptions {
        specs: vec![medium_dir.to_string_lossy().to_string()],
        extensions: vec!["js".into()],
        recursive: false,
        sort: true,
        root_dir: workspace_root.clone(),
        ..Default::default()
    };

    let files = discover_files(&options).expect("discover medium files");
    (workspace_root, files)
}

#[test]
fn test_medium_suite_sharding_acceptance() {
    let (root_dir, files) = discover_medium_files();
    assert_eq!(files.len(), 400, "Medium suite must contain 400 files");

    // Seed timing store with varied / skewed execution durations
    let mut store = TimingStore::new();
    for (i, f) in files.iter().enumerate() {
        let key = compute_file_key(&root_dir, f);
        // Realistic distribution with some files taking 10ms, 50ms, 120ms, etc.
        let dur = match i % 5 {
            0 => 10.0,
            1 => 25.0,
            2 => 50.0,
            3 => 85.0,
            _ => 150.0,
        };
        store.record_duration(&key, dur);
    }

    let total_shards = 4;
    let partitions = partition_files_into_shards(&files, total_shards, &store, &root_dir);
    assert_eq!(partitions.len(), total_shards);

    // 1. Union of shards equals the full set
    let mut union_set = HashSet::new();
    let mut total_files_in_shards = 0;

    for (idx, shard_files) in partitions.iter().enumerate() {
        let shard_spec = ShardSpec {
            index: idx + 1,
            total: total_shards,
        };
        let selected = select_shard_files(&files, shard_spec, &store, &root_dir);
        assert_eq!(
            *shard_files, selected,
            "select_shard_files must match partition"
        );

        for f in shard_files {
            total_files_in_shards += 1;
            union_set.insert(f.clone());
        }
    }

    let original_set: HashSet<PathBuf> = files.iter().cloned().collect();
    assert_eq!(
        union_set, original_set,
        "Union of shards must equal the full original file set"
    );

    // 2. No overlap between shards
    assert_eq!(
        total_files_in_shards,
        files.len(),
        "All shards must be strictly disjoint (no duplicate files)"
    );

    // 3. Imbalance under 10% on medium with seeded timings
    let shard_weights = calculate_shard_weights(&partitions, &store, &root_dir);
    let imbalance = calculate_imbalance(&shard_weights);

    // Assert imbalance < 0.10 (10%)
    assert!(
        imbalance < 0.10,
        "Shard imbalance ({:.4}) must be under 10% (weights: {:?})",
        imbalance,
        shard_weights
    );

    // 4. Deterministic stability: running twice produces identical partitions
    let partitions_second_run =
        partition_files_into_shards(&files, total_shards, &store, &root_dir);
    assert_eq!(
        partitions, partitions_second_run,
        "Sharding must be 100% deterministic given same inputs"
    );
}
