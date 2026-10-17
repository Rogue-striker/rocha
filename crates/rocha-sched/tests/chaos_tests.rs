use rocha_report::create_reporter;
use rocha_sched::{IsolationMode, Scheduler, SchedulerConfig};
use rocha_transform::{transform_source, DiskCache, Options};
use std::fs;
use std::path::PathBuf;
use std::time::Duration;
use tempfile::tempdir;

#[tokio::test]
async fn test_chaos_disk_full_cache_fallback() {
    let dir = tempdir().unwrap();
    let cache_dir = dir.path().join("full_cache");
    fs::create_dir_all(&cache_dir).unwrap();

    // Make cache size limit 0 to simulate full disk / cache rejection
    let cache = DiskCache::new(&cache_dir, 0).expect("failed to init cache");
    let test_file = dir.path().join("spec.ts");
    let source = "export const x: number = 42;\n";
    fs::write(&test_file, source).unwrap();

    let options = Options::default();
    let output = transform_source(&test_file, source, &options).expect("transform should succeed");
    assert!(output.code.contains("const x = 42"));

    // Cache lookup should safely miss without panic
    let cached = cache.get("key123");
    assert!(cached.is_none());
}

#[tokio::test]
async fn test_chaos_worker_crashes_and_cleanup() {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir.parent().unwrap().parent().unwrap();

    let files = vec![
        workspace_root.join("conformance/fixtures/while-true.fixture.js"),
        workspace_root.join("conformance/fixtures/simple-pass.fixture.js"),
    ];

    let sched_config = SchedulerConfig {
        jobs: 2,
        isolate: IsolationMode::File,
        file_timeout: Duration::from_millis(500),
        test_grace: Duration::from_millis(200),
        root_dir: workspace_root.to_path_buf(),
        ..Default::default()
    };

    let scheduler = Scheduler::new(sched_config);
    let mut rep = create_reporter("min", std::io::sink(), Default::default()).unwrap();

    // Runs while-true (which gets killed by hard timeout) followed by simple-pass
    let summary = scheduler
        .run_files(files, &mut rep)
        .await
        .expect("scheduler should handle worker crash/kill");

    assert_eq!(summary.passes, 2);
    assert_eq!(summary.failures, 1);
}
