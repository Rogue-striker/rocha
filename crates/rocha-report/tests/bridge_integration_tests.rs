use rocha_protocol::WorkerMessage as Event;
use rocha_report::{JsReporterBridge, Reporter, Summary};
use std::collections::HashMap;
use std::fs;
use std::path::PathBuf;

#[test]
fn test_bridge_custom_reporter() {
    let out_file = std::env::temp_dir().join("rocha_bridge_custom.txt");
    if out_file.exists() {
        let _ = fs::remove_file(&out_file);
    }

    let mut opts = HashMap::new();
    opts.insert("output".to_string(), out_file.to_string_lossy().to_string());

    let mut bridge = JsReporterBridge::new(
        "./harness/test/fixtures/custom-reporter.js",
        opts,
        Some(PathBuf::from("harness/bridge/index.js")),
    )
    .expect("Failed to spawn JS reporter bridge");

    bridge.on_event(&Event::SuiteStart {
        id: "s1".into(),
        parent: None,
        title: "Simple Passing Suite".into(),
        file: "conformance/fixtures/simple-pass.fixture.js".into(),
    });
    bridge.on_event(&Event::TestStart {
        id: "t1".into(),
        suite: "s1".into(),
        title: "should pass test 1".into(),
        file: "conformance/fixtures/simple-pass.fixture.js".into(),
    });
    bridge.on_event(&Event::TestPass {
        id: "t1".into(),
        duration_ms: 2,
        slow: false,
    });
    bridge.on_event(&Event::TestStart {
        id: "t2".into(),
        suite: "s1".into(),
        title: "should pass test 2 with string equality".into(),
        file: "conformance/fixtures/simple-pass.fixture.js".into(),
    });
    bridge.on_event(&Event::TestPass {
        id: "t2".into(),
        duration_ms: 2,
        slow: false,
    });
    bridge.on_event(&Event::SuiteEnd { id: "s1".into() });

    let summary = Summary {
        passes: 2,
        failures: 0,
        pending: 0,
        duration_ms: 4,
        retries: 0,
        failure_details: Vec::new(),
    };
    bridge.finish(&summary).expect("Bridge finish failed");

    let content = fs::read_to_string(&out_file).expect("Failed to read bridge custom output");
    assert!(content.contains("START"));
    assert!(content.contains("SUITE: Simple Passing Suite"));
    assert!(content.contains("TEST: should pass test 1"));
    assert!(content.contains("PASS: should pass test 1"));
    assert!(content.contains("TEST: should pass test 2 with string equality"));
    assert!(content.contains("PASS: should pass test 2 with string equality"));
    assert!(content.contains("SUITE END: Simple Passing Suite"));
    assert!(content.contains("END: passes=2, failures=0"));
}

#[test]
fn test_bridge_mocha_junit_reporter() {
    let out_file = std::env::temp_dir().join("rocha_bridge_junit.xml");
    if out_file.exists() {
        let _ = fs::remove_file(&out_file);
    }

    let mut opts = HashMap::new();
    opts.insert(
        "mochaFile".to_string(),
        out_file.to_string_lossy().to_string(),
    );

    let mut bridge = JsReporterBridge::new(
        "mocha-junit-reporter",
        opts,
        Some(PathBuf::from("harness/bridge/index.js")),
    )
    .expect("Failed to spawn JS reporter bridge for mocha-junit-reporter");

    bridge.on_event(&Event::SuiteStart {
        id: "s1".into(),
        parent: None,
        title: "Simple Passing Suite".into(),
        file: "conformance/fixtures/simple-pass.fixture.js".into(),
    });
    bridge.on_event(&Event::TestStart {
        id: "t1".into(),
        suite: "s1".into(),
        title: "should pass test 1".into(),
        file: "conformance/fixtures/simple-pass.fixture.js".into(),
    });
    bridge.on_event(&Event::TestPass {
        id: "t1".into(),
        duration_ms: 2,
        slow: false,
    });
    bridge.on_event(&Event::TestStart {
        id: "t2".into(),
        suite: "s1".into(),
        title: "should pass test 2 with string equality".into(),
        file: "conformance/fixtures/simple-pass.fixture.js".into(),
    });
    bridge.on_event(&Event::TestPass {
        id: "t2".into(),
        duration_ms: 2,
        slow: false,
    });
    bridge.on_event(&Event::SuiteEnd { id: "s1".into() });

    let summary = Summary {
        passes: 2,
        failures: 0,
        pending: 0,
        duration_ms: 4,
        retries: 0,
        failure_details: Vec::new(),
    };
    bridge.finish(&summary).expect("Bridge finish failed");

    let xml = fs::read_to_string(&out_file).expect("Failed to read bridge junit xml");
    assert!(xml.contains(r#"<testsuites name="Mocha Tests""#));
    assert!(xml.contains(r#"<testsuite name="Root Suite""#));
    assert!(xml.contains(r#"<testsuite name="Simple Passing Suite""#));
    assert!(xml.contains(r#"<testcase name="Simple Passing Suite should pass test 1""#));
    assert!(xml.contains(
        r#"<testcase name="Simple Passing Suite should pass test 2 with string equality""#
    ));
    assert!(xml.contains(r#"</testsuites>"#));
}
