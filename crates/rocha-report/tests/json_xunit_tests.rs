use rocha_protocol::{ProtocolError, WorkerMessage as Event};
use rocha_report::{create_reporter, JsonReport, ReporterOptions, Summary};

#[test]
fn test_json_reporter_schema_equality() {
    let mut buf = Vec::new();
    let opts = ReporterOptions::default();
    {
        let mut reporter = create_reporter("json", &mut buf, opts).unwrap();

        let suite_ev = Event::SuiteStart {
            id: "s1".into(),
            parent: None,
            title: "JsonSuite".into(),
            file: "test/json.test.js".into(),
        };
        let t1_start = Event::TestStart {
            id: "t1".into(),
            suite: "s1".into(),
            title: "test 1".into(),
            file: "test/json.test.js".into(),
        };
        let t1_pass = Event::TestPass {
            id: "t1".into(),
            duration_ms: 12,
            slow: false,
        };
        let t2_start = Event::TestStart {
            id: "t2".into(),
            suite: "s1".into(),
            title: "test 2".into(),
            file: "test/json.test.js".into(),
        };
        let t2_fail = Event::TestFail {
            id: "t2".into(),
            duration_ms: 5,
            error: ProtocolError {
                name: "AssertionError".into(),
                message: "expected 1 to equal 2".into(),
                stack: Some("AssertionError: expected 1 to equal 2\n    at ...".into()),
                code: Some("ERR_ASSERTION".into()),
                actual: Some("1".into()),
                expected: Some("2".into()),
                show_diff: true,
                operator: Some("strictEqual".into()),
            },
        };
        let t3_start = Event::TestStart {
            id: "t3".into(),
            suite: "s1".into(),
            title: "test 3 pending".into(),
            file: "test/json.test.js".into(),
        };
        let t3_pend = Event::TestPending { id: "t3".into() };

        reporter.on_event(&suite_ev);
        reporter.on_event(&t1_start);
        reporter.on_event(&t1_pass);
        reporter.on_event(&t2_start);
        reporter.on_event(&t2_fail);
        reporter.on_event(&t3_start);
        reporter.on_event(&t3_pend);

        let summary = Summary {
            passes: 1,
            failures: 1,
            pending: 1,
            duration_ms: 17,
            retries: 0,
            failure_details: Vec::new(),
        };
        reporter.finish(&summary).unwrap();
    }

    let output_str = String::from_utf8(buf).unwrap();
    let parsed: JsonReport = serde_json::from_str(&output_str).expect("Valid JsonReport schema");

    assert_eq!(parsed.stats.tests, 3);
    assert_eq!(parsed.stats.passes, 1);
    assert_eq!(parsed.stats.failures, 1);
    assert_eq!(parsed.stats.pending, 1);
    assert_eq!(parsed.tests.len(), 3);
    assert_eq!(parsed.passes.len(), 1);
    assert_eq!(parsed.failures.len(), 1);
    assert_eq!(parsed.pending.len(), 1);
    assert_eq!(parsed.passes[0].full_title, "JsonSuite test 1");
    assert_eq!(parsed.failures[0].full_title, "JsonSuite test 2");
    assert_eq!(parsed.pending[0].full_title, "JsonSuite test 3 pending");
}

#[test]
fn test_json_stream_reporter() {
    let mut buf = Vec::new();
    let opts = ReporterOptions::default();
    {
        let mut reporter = create_reporter("json-stream", &mut buf, opts).unwrap();

        let suite_ev = Event::SuiteStart {
            id: "s1".into(),
            parent: None,
            title: "StreamSuite".into(),
            file: "test/stream.test.js".into(),
        };
        let t1_start = Event::TestStart {
            id: "t1".into(),
            suite: "s1".into(),
            title: "fast test".into(),
            file: "test/stream.test.js".into(),
        };
        let t1_pass = Event::TestPass {
            id: "t1".into(),
            duration_ms: 4,
            slow: false,
        };

        reporter.on_event(&suite_ev);
        reporter.on_event(&t1_start);
        reporter.on_event(&t1_pass);

        let summary = Summary {
            passes: 1,
            failures: 0,
            pending: 0,
            duration_ms: 4,
            retries: 0,
            failure_details: Vec::new(),
        };
        reporter.finish(&summary).unwrap();
    }

    let output_str = String::from_utf8(buf).unwrap();
    let lines: Vec<&str> = output_str.trim().lines().collect();

    assert!(lines.len() >= 3);
    let line0: serde_json::Value = serde_json::from_str(lines[0]).unwrap();
    assert_eq!(line0[0], "start");
    let line1: serde_json::Value = serde_json::from_str(lines[1]).unwrap();
    assert_eq!(line1[0], "pass");
    assert_eq!(line1[1]["fullTitle"], "StreamSuite fast test");
    let line2: serde_json::Value = serde_json::from_str(lines[2]).unwrap();
    assert_eq!(line2[0], "end");
    assert_eq!(line2[1]["passes"], 1);
}

#[test]
fn test_xunit_reporter_jenkins_xsd_compliance() {
    let mut buf = Vec::new();
    let opts = ReporterOptions::default();
    {
        let mut reporter = create_reporter("xunit", &mut buf, opts).unwrap();

        let suite_ev = Event::SuiteStart {
            id: "s1".into(),
            parent: None,
            title: "XmlSuite".into(),
            file: "test/xml.test.js".into(),
        };
        let t1_start = Event::TestStart {
            id: "t1".into(),
            suite: "s1".into(),
            title: "passing <tag> & symbols".into(),
            file: "test/xml.test.js".into(),
        };
        let t1_pass = Event::TestPass {
            id: "t1".into(),
            duration_ms: 15,
            slow: false,
        };
        let t2_start = Event::TestStart {
            id: "t2".into(),
            suite: "s1".into(),
            title: "failing test".into(),
            file: "test/xml.test.js".into(),
        };
        let t2_fail = Event::TestFail {
            id: "t2".into(),
            duration_ms: 10,
            error: ProtocolError {
                name: "Error".into(),
                message: "boom <critical>".into(),
                stack: Some("Error: boom <critical>\n    at ...".into()),
                code: None,
                actual: None,
                expected: None,
                show_diff: false,
                operator: None,
            },
        };
        let t3_start = Event::TestStart {
            id: "t3".into(),
            suite: "s1".into(),
            title: "pending test".into(),
            file: "test/xml.test.js".into(),
        };
        let t3_pend = Event::TestPending { id: "t3".into() };

        reporter.on_event(&suite_ev);
        reporter.on_event(&t1_start);
        reporter.on_event(&t1_pass);
        reporter.on_event(&t2_start);
        reporter.on_event(&t2_fail);
        reporter.on_event(&t3_start);
        reporter.on_event(&t3_pend);

        let summary = Summary {
            passes: 1,
            failures: 1,
            pending: 1,
            duration_ms: 25,
            retries: 0,
            failure_details: Vec::new(),
        };
        reporter.finish(&summary).unwrap();
    }

    let xml = String::from_utf8(buf).unwrap();

    // Verify well-formed XML and schema elements
    assert!(xml.starts_with(
        r#"<testsuite name="Mocha Tests" tests="3" failures="1" errors="0" skipped="1""#
    ));
    assert!(xml.contains(r#"<testcase classname="XmlSuite" name="passing &lt;tag&gt; &amp; symbols" file="test/xml.test.js" time="0.015"/>"#));
    assert!(xml.contains(r#"<testcase classname="XmlSuite" name="failing test" file="test/xml.test.js" time="0.010">"#));
    assert!(xml.contains(r#"<failure message="boom &lt;critical&gt;" type="Error">"#));
    assert!(xml.contains(r#"<skipped/>"#));
    assert!(xml.ends_with("</testsuite>\n"));
}
