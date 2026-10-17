use rocha_protocol::{RunFileOptions, WorkerMessage};
use rocha_worker::embedded::{EmbeddedEngineError, EmbeddedRunner};
use std::fs::File;
use std::io::Write;
use std::time::Instant;

#[test]
fn test_embedded_pure_js_execution_and_timings() {
    let temp_dir = tempfile::tempdir().unwrap();
    let test_file = temp_dir.path().join("pure_test.js");

    {
        let mut f = File::create(&test_file).unwrap();
        f.write_all(br#"
        describe("Pure JS Math Suite", () => {
            it("adds numbers correctly", () => {
                assert.strictEqual(1 + 1, 2);
            });

            it("fails when expected", () => {
                assert.strictEqual(2 * 2, 5, "math failed");
            });

            it.skip("is a skipped test", () => {
            });
        });
        "#).unwrap();
    }

    let start = Instant::now();
    let mut events = Vec::new();

    let res = EmbeddedRunner::run_file(
        test_file.to_str().unwrap(),
        &RunFileOptions::default(),
        |msg| events.push(msg.clone()),
    )
    .expect("Embedded execution should succeed");

    let elapsed = start.elapsed();
    println!("Embedded execution wall time: {:?}", elapsed);

    assert!(
        elapsed.as_millis() < 50,
        "Embedded execution took too long: {:?}",
        elapsed
    );

    match res {
        WorkerMessage::FileDone { counts, .. } => {
            assert_eq!(counts.passes, 1);
            assert_eq!(counts.failures, 1);
            assert_eq!(counts.pending, 1);
        }
        other => panic!("Expected FileDone, got {:?}", other),
    }

    assert!(events.iter().any(|e| matches!(e, WorkerMessage::TestPass { id, .. } if id == "adds numbers correctly")));
    assert!(events.iter().any(|e| matches!(e, WorkerMessage::TestFail { id, .. } if id == "fails when expected")));
    assert!(events.iter().any(|e| matches!(e, WorkerMessage::TestPending { id } if id == "is a skipped test")));
}

#[test]
fn test_embedded_detects_unsupported_node_modules() {
    let temp_dir = tempfile::tempdir().unwrap();
    let test_file = temp_dir.path().join("fs_test.js");

    {
        let mut f = File::create(&test_file).unwrap();
        f.write_all(br#"
        const fs = require('fs');
        describe("FS Suite", () => {
            it("reads file", () => {
                fs.readFileSync("foo.txt");
            });
        });
        "#).unwrap();
    }

    let res = EmbeddedRunner::run_file(
        test_file.to_str().unwrap(),
        &RunFileOptions::default(),
        |_| {},
    );

    match res {
        Err(EmbeddedEngineError::UnsupportedNodeModule(module)) => {
            assert_eq!(module, "fs");
        }
        other => panic!("Expected UnsupportedNodeModule('fs'), got {:?}", other),
    }
}
