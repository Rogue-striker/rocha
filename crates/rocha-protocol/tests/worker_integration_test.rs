use rocha_protocol::{
    encode_frame, OrchestratorMessage, RunFileOptions, StreamingDecoder, WorkerMessage,
};
use std::io::{Read, Write};
use std::path::PathBuf;
use std::process::{Command, Stdio};

#[test]
fn test_worker_lifecycle_and_event_sequence() {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir.parent().unwrap().parent().unwrap();
    let worker_script = workspace_root.join("harness").join("bin").join("worker.js");
    let fixture_file = workspace_root
        .join("conformance")
        .join("fixtures")
        .join("simple-pass.fixture.js");

    assert!(worker_script.exists(), "worker.js must exist");
    assert!(fixture_file.exists(), "fixture file must exist");

    let mut child = Command::new("node")
        .arg(&worker_script)
        .current_dir(workspace_root)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::inherit())
        .spawn()
        .expect("failed to spawn worker.js");

    let mut stdin = child.stdin.take().expect("failed to open stdin");
    let mut stdout = child.stdout.take().expect("failed to open stdout");

    let mut decoder = StreamingDecoder::<WorkerMessage>::new();
    let mut messages: Vec<WorkerMessage> = Vec::new();
    let mut buf = [0u8; 4096];

    // Read Ready message
    let ready_msg = loop {
        let n = stdout.read(&mut buf).expect("failed to read from stdout");
        if n == 0 {
            panic!("Worker closed stdout before Ready message");
        }
        decoder.feed(&buf[..n]);
        if let Some(msg) = decoder.poll_next().expect("decode error") {
            break msg;
        }
    };

    match ready_msg {
        WorkerMessage::Ready { protocol_version } => {
            assert_eq!(protocol_version, 1, "protocol version should be 1");
        }
        other => panic!("Expected Ready message, got {:?}", other),
    }

    // Send RunFile command
    let run_cmd = OrchestratorMessage::RunFile {
        file: fixture_file.to_string_lossy().to_string(),
        options: RunFileOptions {
            timeout_ms: 2000,
            slow_ms: 75,
            grep: None,
            invert_grep: false,
            bail: false,
            retries: 0,
        },
    };

    let encoded_run_cmd = encode_frame(&run_cmd).expect("failed to encode RunFile frame");
    stdin
        .write_all(&encoded_run_cmd)
        .expect("failed to write RunFile to stdin");
    stdin.flush().expect("failed to flush stdin");

    // Collect events until FileDone
    let mut file_done = false;
    while !file_done {
        let n = stdout.read(&mut buf).expect("failed to read from stdout");
        if n == 0 {
            break;
        }
        decoder.feed(&buf[..n]);
        while let Some(msg) = decoder.poll_next().expect("decode error") {
            if matches!(msg, WorkerMessage::FileDone { .. }) {
                file_done = true;
            }
            messages.push(msg);
        }
    }

    // Send Shutdown command
    let shutdown_cmd = OrchestratorMessage::Shutdown;
    let encoded_shutdown = encode_frame(&shutdown_cmd).expect("failed to encode Shutdown frame");
    let _ = stdin.write_all(&encoded_shutdown);
    let _ = stdin.flush();
    drop(stdin);

    let status = child.wait().expect("failed to wait on worker");
    assert!(status.success(), "worker should exit cleanly with code 0");

    assert!(file_done, "Worker must emit FileDone message");

    // Verify exact event types in sequence
    let msg_types: Vec<&str> = messages
        .iter()
        .map(|m| match m {
            WorkerMessage::Ready { .. } => "Ready",
            WorkerMessage::SuiteStart { .. } => "SuiteStart",
            WorkerMessage::TestStart { .. } => "TestStart",
            WorkerMessage::TestPass { .. } => "TestPass",
            WorkerMessage::TestFail { .. } => "TestFail",
            WorkerMessage::TestPending { .. } => "TestPending",
            WorkerMessage::HookFail { .. } => "HookFail",
            WorkerMessage::Retry { .. } => "Retry",
            WorkerMessage::SuiteEnd { .. } => "SuiteEnd",
            WorkerMessage::FileDone { .. } => "FileDone",
            WorkerMessage::Log { .. } => "Log",
            WorkerMessage::Fatal { .. } => "Fatal",
        })
        .collect();

    assert_eq!(
        msg_types,
        vec![
            "SuiteStart",
            "TestStart",
            "TestPass",
            "TestStart",
            "TestPass",
            "SuiteEnd",
            "FileDone"
        ],
        "Worker event sequence mismatch: {:?}",
        msg_types
    );

    // Verify counts in FileDone
    if let WorkerMessage::FileDone { counts, .. } = messages.last().unwrap() {
        assert_eq!(counts.passes, 2);
        assert_eq!(counts.failures, 0);
        assert_eq!(counts.pending, 0);
    } else {
        panic!("Last message must be FileDone");
    }
}

#[test]
fn test_worker_handles_failing_file_with_protocol_error() {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir.parent().unwrap().parent().unwrap();
    let worker_script = workspace_root.join("harness").join("bin").join("worker.js");
    let fixture_file = workspace_root
        .join("conformance")
        .join("fixtures")
        .join("simple-fail.fixture.js");

    let mut child = Command::new("node")
        .arg(&worker_script)
        .current_dir(workspace_root)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::inherit())
        .spawn()
        .expect("failed to spawn worker.js");

    let mut stdin = child.stdin.take().expect("failed to open stdin");
    let mut stdout = child.stdout.take().expect("failed to open stdout");

    let mut decoder = StreamingDecoder::<WorkerMessage>::new();
    let mut messages: Vec<WorkerMessage> = Vec::new();
    let mut buf = [0u8; 4096];

    // Read Ready
    loop {
        let n = stdout.read(&mut buf).unwrap();
        decoder.feed(&buf[..n]);
        if let Some(WorkerMessage::Ready { .. }) = decoder.poll_next().unwrap() {
            break;
        }
    }

    // Run simple-fail.fixture.js
    let run_cmd = OrchestratorMessage::RunFile {
        file: fixture_file.to_string_lossy().to_string(),
        options: RunFileOptions::default(),
    };
    stdin.write_all(&encode_frame(&run_cmd).unwrap()).unwrap();
    stdin.flush().unwrap();

    let mut file_done = false;
    while !file_done {
        let n = stdout.read(&mut buf).unwrap();
        if n == 0 {
            break;
        }
        decoder.feed(&buf[..n]);
        while let Some(msg) = decoder.poll_next().unwrap() {
            if matches!(msg, WorkerMessage::FileDone { .. }) {
                file_done = true;
            }
            messages.push(msg);
        }
    }

    // Shutdown
    let _ = stdin.write_all(&encode_frame(&OrchestratorMessage::Shutdown).unwrap());
    drop(stdin);
    let status = child.wait().unwrap();
    assert!(status.success());
    assert!(file_done);

    // Verify presence of TestFail with AssertionError
    let test_fail = messages.iter().find_map(|m| match m {
        WorkerMessage::TestFail { error, .. } => Some(error),
        _ => None,
    });

    assert!(test_fail.is_some(), "Must have emitted TestFail");
    let err = test_fail.unwrap();
    assert_eq!(err.name, "AssertionError");

    // Verify FileDone counts: 1 pass, 1 failure
    if let WorkerMessage::FileDone { counts, .. } = messages.last().unwrap() {
        assert_eq!(counts.passes, 1);
        assert_eq!(counts.failures, 1);
        assert_eq!(counts.pending, 0);
    } else {
        panic!("Last message must be FileDone");
    }
}
