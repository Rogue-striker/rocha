use rocha_watch::{WatchConfig, Watcher};
use std::fs;
use std::time::Duration;
use tempfile::tempdir;

#[tokio::test]
async fn test_watcher_single_burst_for_multiple_rapid_touches() {
    let dir = tempdir().unwrap();
    let root = dir.path().to_path_buf();

    let config = WatchConfig {
        root_dir: root.clone(),
        watch_files: vec!["*.js".into()],
        watch_ignore: Vec::new(),
        debounce: Duration::from_millis(150),
    };

    let mut watcher = Watcher::new(config).expect("failed to spawn watcher");

    // Sleep briefly to ensure watcher is registered with the OS
    tokio::time::sleep(Duration::from_millis(100)).await;

    // Burst: touch 4 files in quick succession
    for i in 0..4 {
        let file_path = root.join(format!("test_{}.js", i));
        fs::write(&file_path, format!("// content {}", i)).unwrap();
        tokio::time::sleep(Duration::from_millis(10)).await;
    }

    // Expect exactly 1 burst
    let burst = tokio::time::timeout(Duration::from_secs(3), watcher.next_burst())
        .await
        .expect("timed out waiting for burst")
        .expect("stream ended prematurely");

    assert!(!burst.is_empty(), "burst should contain paths");
    assert!(
        burst
            .iter()
            .any(|p| p.to_string_lossy().contains("test_0.js")),
        "burst should contain test_0.js"
    );

    // Assert no second burst arrives
    let second_burst = tokio::time::timeout(Duration::from_millis(300), watcher.next_burst()).await;
    assert!(
        second_burst.is_err(),
        "should not observe a second burst for the same rapid touch sequence"
    );
}

#[tokio::test]
async fn test_watcher_ignores_git_and_node_modules() {
    let dir = tempdir().unwrap();
    let root = dir.path().to_path_buf();

    let git_dir = root.join(".git");
    let nm_dir = root.join("node_modules");
    let rocha_dir = root.join(".rocha");
    fs::create_dir_all(&git_dir).unwrap();
    fs::create_dir_all(&nm_dir).unwrap();
    fs::create_dir_all(&rocha_dir).unwrap();

    let config = WatchConfig {
        root_dir: root.clone(),
        watch_files: Vec::new(),
        watch_ignore: Vec::new(),
        debounce: Duration::from_millis(100),
    };

    let mut watcher = Watcher::new(config).expect("failed to spawn watcher");
    tokio::time::sleep(Duration::from_millis(100)).await;

    // Touch ignored files
    fs::write(git_dir.join("HEAD"), "ref: refs/heads/main").unwrap();
    fs::write(nm_dir.join("package.json"), "{}").unwrap();
    fs::write(rocha_dir.join("cache.dat"), "cache").unwrap();

    // Verify timeout without any burst
    let burst = tokio::time::timeout(Duration::from_millis(300), watcher.next_burst()).await;
    assert!(burst.is_err(), "ignored paths should never emit a burst");
}
