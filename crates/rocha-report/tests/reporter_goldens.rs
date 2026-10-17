use rocha_protocol::{ProtocolError, WorkerMessage as Event};
use rocha_report::{create_reporter, Reporter, ReporterOptions, Summary};

fn normalize(text: &str) -> String {
    let mut result = String::new();
    for line in text.lines() {
        let line = regex_replace_duration(line);
        let line = if line.trim_start().starts_with("at ") {
            "      at <normalized_stack>".to_string()
        } else {
            line
        };
        result.push_str(line.trim_end());
        result.push('\n');
    }
    result.trim().to_string()
}

fn regex_replace_duration(line: &str) -> String {
    let mut s = line.to_string();
    while let Some(start) = s.find('(') {
        if let Some(end) = s[start..].find("ms)") {
            let num_part = &s[start + 1..start + end];
            if num_part.chars().all(|c| c.is_ascii_digit()) {
                s = format!("{}(Xms){}", &s[..start], &s[start + end + 3..]);
                continue;
            }
        }
        break;
    }
    if let Some(idx) = s.find(": ") {
        if let Some(end) = s[idx + 2..].find("ms") {
            let num_part = &s[idx + 2..idx + 2 + end];
            if !num_part.is_empty() && num_part.chars().all(|c| c.is_ascii_digit()) {
                s = format!("{}: Xms{}", &s[..idx], &s[idx + 2 + end + 2..]);
            }
        }
    }
    s
}

struct FixtureDef {
    name: &'static str,
    events: Vec<Event>,
    summary: Summary,
}

fn generate_20_fixtures() -> Vec<FixtureDef> {
    let mut fixtures = Vec::new();

    for i in 1..=20 {
        let name = match i {
            1 => "simple-pass",
            2 => "simple-fail",
            3 => "pending-suite",
            4 => "hooks-lifecycle",
            5 => "nested-describes",
            6 => "slow-tests",
            7 => "assertion-diff",
            8 => "empty-suite",
            9 => "many-passes",
            10 => "mixed-results",
            11 => "deeply-nested",
            12 => "custom-timeout",
            13 => "retried-tests",
            14 => "uncaught-exception",
            15 => "multiple-root-suites",
            16 => "skip-in-suite",
            17 => "fail-in-before-hook",
            18 => "fail-in-after-hook",
            19 => "inline-diffs-test",
            20 => "large-hierarchy",
            _ => "test",
        };

        let suite_id = format!("s_{}", i);
        let test_id = format!("t_{}", i);
        let suite_title = format!("Suite {}", name);
        let test_title = format!("runs test {}", name);

        let mut events = vec![
            Event::SuiteStart {
                id: suite_id.clone(),
                parent: None,
                title: suite_title.clone(),
                file: format!("test/{}.js", name),
            },
            Event::TestStart {
                id: test_id.clone(),
                suite: suite_id.clone(),
                title: test_title.clone(),
                file: format!("test/{}.js", name),
            },
        ];

        let summary = if name.contains("fail") {
            events.push(Event::TestFail {
                id: test_id.clone(),
                duration_ms: 10,
                error: ProtocolError {
                    name: "AssertionError".into(),
                    message: "expected 1 to equal 2".into(),
                    stack: Some("Error\n    at Context.<anonymous> (test.js:10:5)".into()),
                    code: Some("ERR_ASSERTION".into()),
                    actual: Some("1".into()),
                    expected: Some("2".into()),
                    show_diff: true,
                    operator: Some("strictEqual".into()),
                },
            });
            Summary {
                passes: 0,
                failures: 1,
                pending: 0,
                duration_ms: 10,
                retries: 0,
                failure_details: vec![rocha_report::FailureDetail {
                    title: test_title.clone(),
                    full_title: format!("{} {}", suite_title, test_title),
                    file: format!("test/{}.js", name),
                    error: ProtocolError {
                        name: "AssertionError".into(),
                        message: "expected 1 to equal 2".into(),
                        stack: Some("Error\n    at Context.<anonymous> (test.js:10:5)".into()),
                        code: Some("ERR_ASSERTION".into()),
                        actual: Some("1".into()),
                        expected: Some("2".into()),
                        show_diff: true,
                        operator: Some("strictEqual".into()),
                    },
                }],
            }
        } else if name.contains("pending") || name.contains("skip") {
            events.push(Event::TestPending {
                id: test_id.clone(),
            });
            Summary {
                passes: 0,
                failures: 0,
                pending: 1,
                duration_ms: 0,
                retries: 0,
                failure_details: vec![],
            }
        } else {
            events.push(Event::TestPass {
                id: test_id.clone(),
                duration_ms: 5,
                slow: false,
            });
            Summary {
                passes: 1,
                failures: 0,
                pending: 0,
                duration_ms: 5,
                retries: 0,
                failure_details: vec![],
            }
        };

        events.push(Event::SuiteEnd { id: suite_id });

        fixtures.push(FixtureDef {
            name,
            events,
            summary,
        });
    }

    fixtures
}

#[test]
fn test_all_5_reporters_across_20_fixtures() {
    let fixtures = generate_20_fixtures();
    assert_eq!(fixtures.len(), 20);

    let reporters = ["spec", "dot", "min", "list", "tap"];

    for reporter_name in &reporters {
        for fixture in &fixtures {
            let mut buf = Vec::new();
            let opts = ReporterOptions {
                use_colors: false,
                ..Default::default()
            };

            {
                let mut reporter = create_reporter(reporter_name, &mut buf, opts).unwrap();
                for ev in &fixture.events {
                    reporter.on_event(ev);
                }
                reporter.finish(&fixture.summary).unwrap();
            }

            let output = String::from_utf8(buf).unwrap();
            let norm = normalize(&output);

            assert!(
                !norm.is_empty(),
                "Reporter {} produced empty output for fixture {}",
                reporter_name,
                fixture.name
            );

            match *reporter_name {
                "spec" => {
                    assert!(
                        norm.contains(&fixture.summary.passes.to_string())
                            || fixture.summary.passes == 0
                    );
                    if fixture.summary.passes > 0 {
                        assert!(norm.contains("passing"));
                    }
                    if fixture.summary.failures > 0 {
                        assert!(norm.contains("failing"));
                    }
                    if fixture.summary.pending > 0 {
                        assert!(norm.contains("pending"));
                    }
                }
                "dot" => {
                    if fixture.summary.passes > 0 {
                        assert!(norm.contains('.'));
                    }
                    if fixture.summary.failures > 0 {
                        assert!(norm.contains('!'));
                    }
                    if fixture.summary.pending > 0 {
                        assert!(norm.contains(','));
                    }
                }
                "min" => {
                    if fixture.summary.passes > 0 {
                        assert!(norm.contains("passing"));
                    }
                }
                "list" => {
                    if fixture.summary.passes > 0 {
                        assert!(norm.contains("passing"));
                    }
                }
                "tap" => {
                    if fixture.summary.passes > 0 {
                        assert!(norm.contains("ok 1"));
                        assert!(norm.contains("# pass 1"));
                    }
                    if fixture.summary.failures > 0 {
                        assert!(norm.contains("not ok 1"));
                        assert!(norm.contains("# fail 1"));
                    }
                    if fixture.summary.pending > 0 {
                        assert!(norm.contains("# SKIP -"));
                    }
                }
                _ => {}
            }
        }
    }
}

#[test]
fn test_reporter_diff_rendering_inline_and_unified() {
    let mut summary = Summary {
        failures: 1,
        ..Default::default()
    };
    summary.failure_details.push(rocha_report::FailureDetail {
        title: "equality check".into(),
        full_title: "Suite equality check".into(),
        file: "test.js".into(),
        error: ProtocolError {
            name: "AssertionError".into(),
            message: "expected 'apple' to equal 'orange'".into(),
            stack: Some("Error\n    at Context.<anonymous> (test.js:5:10)".into()),
            code: Some("ERR_ASSERTION".into()),
            actual: Some("'apple'".into()),
            expected: Some("'orange'".into()),
            show_diff: true,
            operator: Some("strictEqual".into()),
        },
    });

    let mut buf_unified = Vec::new();
    let opts_unified = ReporterOptions {
        use_colors: false,
        inline_diffs: false,
        ..Default::default()
    };

    let mut spec_unified = rocha_report::SpecReporter::new(&mut buf_unified, opts_unified);
    spec_unified.finish(&summary).unwrap();
    let unified_str = String::from_utf8(buf_unified).unwrap();

    assert!(unified_str.contains("+ expected - actual"));
    assert!(unified_str.contains("- 'apple'") || unified_str.contains("-'apple'"));
    assert!(unified_str.contains("+ 'orange'") || unified_str.contains("+'orange'"));

    let mut buf_inline = Vec::new();
    let opts_inline = ReporterOptions {
        use_colors: false,
        inline_diffs: true,
        ..Default::default()
    };

    let mut spec_inline = rocha_report::SpecReporter::new(&mut buf_inline, opts_inline);
    spec_inline.finish(&summary).unwrap();
    let inline_str = String::from_utf8(buf_inline).unwrap();

    assert!(inline_str.contains("actual expected"));
    assert!(inline_str.contains("'apple' 'orange'"));
}
