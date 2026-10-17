use rocha_protocol::{RunFileOptions, WorkerMessage};
use rocha_worker::{derive_file_timeout, WorkerConfig, WorkerProcess};
use std::path::PathBuf;
use std::time::{Duration, Instant};

#[tokio::test]
async fn test_derive_file_timeout() {
    // 1. Explicit CLI timeout wins
    let t = derive_file_timeout(Some(Duration::from_secs(10)), Some(Duration::from_secs(45)));
    assert_eq!(t, Duration::from_secs(45));

    // 2. Default: max(60s, 10 * recorded)
    let t_short = derive_file_timeout(Some(Duration::from_secs(2)), None);
    assert_eq!(t_short, Duration::from_secs(60));

    let t_long = derive_file_timeout(Some(Duration::from_secs(15)), None);
    assert_eq!(t_long, Duration::from_secs(150));

    // 3. None: defaults to 60s
    let t_none = derive_file_timeout(None, None);
    assert_eq!(t_none, Duration::from_secs(60));
}

#[tokio::test]
async fn test_while_true_hard_timeout_and_continuation() {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir
        .parent()
        .and_then(|p| p.parent())
        .unwrap_or(&manifest_dir);

    let config = WorkerConfig {
        node_path: PathBuf::from("node"),
        harness_worker_path: workspace_root.join("harness/bin/worker.js"),
        loader_path: Some(workspace_root.join("loader/register.cjs")),
        node_options: Vec::new(),
        handshake_timeout: Duration::from_secs(5),
        inline_script: None,
    };

    let mut worker = WorkerProcess::spawn(&config).await.expect("Spawn failed");

    let while_true_fixture = workspace_root
        .join("conformance/fixtures/while-true.fixture.js")
        .to_string_lossy()
        .to_string();

    let options = RunFileOptions {
        timeout_ms: 100,
        ..Default::default()
    };
    let test_grace = Duration::from_millis(150);
    let cap_plus_grace = Duration::from_millis(100) + test_grace;

    let start = Instant::now();
    let mut events = Vec::new();

    let done = worker
        .run_file_with_hard_timeout(
            &while_true_fixture,
            options,
            Duration::from_secs(5),
            test_grace,
            |ev| {
                events.push(ev.clone());
            },
        )
        .await
        .expect("Hard timeout should complete with synthetic FileDone");

    let elapsed = start.elapsed();
    assert!(
        elapsed < cap_plus_grace + Duration::from_millis(500),
        "Elapsed {:?} exceeded cap + grace {:?}",
        elapsed,
        cap_plus_grace
    );

    // Verify synthetic failure
    let fail_ev = events
        .iter()
        .find(|e| matches!(e, WorkerMessage::TestFail { .. }))
        .expect("Expected synthetic TestFail event");

    if let WorkerMessage::TestFail { error, .. } = fail_ev {
        assert_eq!(error.name, "TimeoutError");
        assert!(error.message.contains("Hard timeout"));
        assert!(error.message.contains("infinite loop or hang"));
    } else {
        panic!("Expected TestFail");
    }

    if let WorkerMessage::FileDone { counts, .. } = done {
        assert_eq!(counts.failures, 1);
        assert_eq!(counts.passes, 0);
    } else {
        panic!("Expected FileDone");
    }

    // Verify slot recycling: respawn warm worker and run simple-pass to ensure the rest of run continues
    let mut fresh_worker = WorkerProcess::spawn(&config)
        .await
        .expect("Fresh worker spawn failed");
    let pass_fixture = workspace_root
        .join("conformance/fixtures/simple-pass.fixture.js")
        .to_string_lossy()
        .to_string();

    let pass_events = fresh_worker
        .run_file(
            &pass_fixture,
            RunFileOptions::default(),
            Duration::from_secs(5),
        )
        .await
        .expect("Run simple-pass on recycled worker slot failed");

    assert!(pass_events
        .iter()
        .any(|e| matches!(e, WorkerMessage::TestPass { .. })));
    fresh_worker.shutdown().await.expect("Shutdown failed");
}
