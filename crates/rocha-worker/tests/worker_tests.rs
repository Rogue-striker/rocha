use rocha_protocol::{RunFileOptions, WorkerMessage, PROTOCOL_VERSION};
use rocha_worker::{WorkerConfig, WorkerError, WorkerProcess};
use std::path::PathBuf;
use std::time::Duration;

#[tokio::test]
async fn test_normal_run() {
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
        ..Default::default()
    };

    let mut worker = WorkerProcess::spawn(&config).await.expect("Spawn failed");
    assert_eq!(worker.protocol_version(), PROTOCOL_VERSION);

    let fixture_path = workspace_root
        .join("conformance/fixtures/simple-pass.fixture.js")
        .to_string_lossy()
        .to_string();

    let events = worker
        .run_file(
            &fixture_path,
            RunFileOptions::default(),
            Duration::from_secs(5),
        )
        .await
        .expect("run_file failed");

    assert!(events
        .iter()
        .any(|e| matches!(e, WorkerMessage::SuiteStart { .. })));
    assert!(events
        .iter()
        .any(|e| matches!(e, WorkerMessage::TestPass { .. })));
    assert!(events
        .iter()
        .any(|e| matches!(e, WorkerMessage::FileDone { .. })));

    let done = events
        .iter()
        .find(|e| matches!(e, WorkerMessage::FileDone { .. }))
        .unwrap();
    if let WorkerMessage::FileDone { counts, .. } = done {
        assert_eq!(counts.passes, 2);
        assert_eq!(counts.failures, 0);
    } else {
        panic!("Expected FileDone");
    }

    worker.shutdown().await.expect("Shutdown failed");
}

#[tokio::test]
async fn test_version_mismatch() {
    // A mock node worker that sends an incompatible protocol version
    let script = r#"
        const { encode } = require('@msgpack/msgpack');
        const payload = encode({ type: 'Ready', protocol_version: 99999 });
        const buf = Buffer.alloc(4 + payload.length);
        buf.writeUInt32LE(payload.length, 0);
        Buffer.from(payload).copy(buf, 4);
        process.stdout.write(buf);
        setInterval(() => {}, 1000);
    "#;

    let config = WorkerConfig {
        node_path: PathBuf::from("node"),
        harness_worker_path: PathBuf::new(),
        loader_path: None,
        node_options: Vec::new(),
        handshake_timeout: Duration::from_secs(2),
        inline_script: Some(script.into()),
        ..Default::default()
    };

    let err = WorkerProcess::spawn(&config).await.unwrap_err();
    match err {
        WorkerError::VersionMismatch { expected, actual } => {
            assert_eq!(expected, PROTOCOL_VERSION);
            assert_eq!(actual, 99999);
        }
        other => panic!("Expected VersionMismatch, got {:?}", other),
    }
}

#[tokio::test]
async fn test_worker_prints_garbage_on_protocol_channel() {
    // A mock node worker that writes non-MessagePack garbage
    let script = r#"
        const buf = Buffer.alloc(10);
        buf.writeUInt32LE(6, 0);
        buf.write('GARBAGE', 4);
        process.stdout.write(buf);
        setInterval(() => {}, 1000);
    "#;

    let config = WorkerConfig {
        node_path: PathBuf::from("node"),
        harness_worker_path: PathBuf::new(),
        loader_path: None,
        node_options: Vec::new(),
        handshake_timeout: Duration::from_secs(2),
        inline_script: Some(script.into()),
        ..Default::default()
    };

    let err = WorkerProcess::spawn(&config).await.unwrap_err();
    assert!(matches!(err, WorkerError::Codec(_)));
}

#[tokio::test]
async fn test_worker_hangs_timeout_fires() {
    // A mock node worker that completes handshake but hangs on RunFile
    let script = r#"
        const { encode } = require('@msgpack/msgpack');
        const payload = encode({ type: 'Ready', protocol_version: 1 });
        const buf = Buffer.alloc(4 + payload.length);
        buf.writeUInt32LE(payload.length, 0);
        Buffer.from(payload).copy(buf, 4);
        process.stdout.write(buf);

        process.stdin.on('data', () => {
            // Infinite hang, does not respond
            setInterval(() => {}, 1000);
        });
    "#;

    let config = WorkerConfig {
        node_path: PathBuf::from("node"),
        harness_worker_path: PathBuf::new(),
        loader_path: None,
        node_options: Vec::new(),
        handshake_timeout: Duration::from_secs(2),
        inline_script: Some(script.into()),
        ..Default::default()
    };

    let mut worker = WorkerProcess::spawn(&config).await.expect("Spawn failed");
    let err = worker
        .run_file(
            "test/hang.js",
            RunFileOptions::default(),
            Duration::from_millis(150),
        )
        .await
        .unwrap_err();

    assert!(matches!(err, WorkerError::Timeout(_)));
}

#[tokio::test]
async fn test_worker_killed_mid_test() {
    // A mock worker that sends handshake, and on RunFile exits abruptly with code 1
    let script = r#"
        const { encode } = require('@msgpack/msgpack');
        const payload = encode({ type: 'Ready', protocol_version: 1 });
        const buf = Buffer.alloc(4 + payload.length);
        buf.writeUInt32LE(payload.length, 0);
        Buffer.from(payload).copy(buf, 4);
        process.stdout.write(buf);

        process.stdin.on('data', () => {
            process.exit(137); // Killed / crash
        });
    "#;

    let config = WorkerConfig {
        node_path: PathBuf::from("node"),
        harness_worker_path: PathBuf::new(),
        loader_path: None,
        node_options: Vec::new(),
        handshake_timeout: Duration::from_secs(2),
        inline_script: Some(script.into()),
        ..Default::default()
    };

    let mut worker = WorkerProcess::spawn(&config).await.expect("Spawn failed");
    let err = worker
        .run_file(
            "test/crash.js",
            RunFileOptions::default(),
            Duration::from_secs(2),
        )
        .await
        .unwrap_err();

    match err {
        WorkerError::WorkerCrashed { file, message } => {
            assert_eq!(file, "test/crash.js");
            assert!(message.contains("137") || message.contains("Exit status"));
        }
        other => panic!("Expected WorkerCrashed, got {:?}", other),
    }
}
