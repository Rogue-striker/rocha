//! Reporters and event model for Rocha test results.

pub mod base;
pub mod dot;
pub mod list;
pub mod merger;
pub mod min;
pub mod spec;
pub mod tap;

pub use base::ReporterOptions;
pub use dot::DotReporter;
pub use list::ListReporter;
pub use merger::{EventMerger, MergeMode};
pub use min::MinReporter;
pub use spec::SpecReporter;
pub use tap::TapReporter;

/// Create a reporter by name (spec, dot, min, list, tap).
pub fn create_reporter<'a, W: io::Write + 'a>(
    name: &str,
    writer: W,
    opts: ReporterOptions,
) -> Result<Box<dyn Reporter + 'a>, String> {
    match name.to_ascii_lowercase().as_str() {
        "spec" => Ok(Box::new(SpecReporter::new(writer, opts))),
        "dot" => Ok(Box::new(DotReporter::new(writer, opts))),
        "min" => Ok(Box::new(MinReporter::new(writer, opts))),
        "list" => Ok(Box::new(ListReporter::new(writer, opts))),
        "tap" => Ok(Box::new(TapReporter::new(writer, opts))),
        other => Err(format!("Unknown reporter: {}", other)),
    }
}

use rocha_protocol::ProtocolError;
pub use rocha_protocol::{LogStream, TestCounts, WorkerMessage as Event};
use serde::{Deserialize, Serialize};
use std::io;

/// Detailed information about a single test or hook failure.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct FailureDetail {
    /// Runnable title.
    pub title: String,
    /// Full hierarchical title including parent suite titles.
    pub full_title: String,
    /// Test file where the failure occurred.
    pub file: String,
    /// Structured protocol error.
    pub error: ProtocolError,
}

/// Overall test execution outcome summary passed to reporters upon completion.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Summary {
    /// Total count of passing tests.
    pub passes: usize,
    /// Total count of failing tests.
    pub failures: usize,
    /// Total count of pending / skipped tests.
    pub pending: usize,
    /// Total wall-clock execution duration in milliseconds.
    pub duration_ms: u64,
    /// Complete list of failure details with full hierarchical titles.
    pub failure_details: Vec<FailureDetail>,
}

impl Summary {
    /// Create a new empty summary.
    pub fn new() -> Self {
        Self::default()
    }

    /// Whether any failures occurred during test execution.
    pub fn has_failures(&self) -> bool {
        self.failures > 0 || !self.failure_details.is_empty()
    }

    /// Total number of tests encountered.
    pub fn total(&self) -> usize {
        self.passes + self.failures + self.pending
    }
}

/// Common trait implemented by all Rocha reporters (spec, dot, min, json, etc.).
pub trait Reporter {
    /// Handle an incoming test event from the worker stream.
    fn on_event(&mut self, ev: &Event);

    /// Finalize output and render overall summary.
    fn finish(&mut self, summary: &Summary) -> io::Result<()>;
}

#[cfg(test)]
mod tests {
    use super::*;

    /// Mock reporter for testing event dispatch and summary finalization.
    #[derive(Default)]
    struct MockReporter {
        received_events: Vec<Event>,
        finished_summary: Option<Summary>,
    }

    impl Reporter for MockReporter {
        fn on_event(&mut self, ev: &Event) {
            self.received_events.push(ev.clone());
        }

        fn finish(&mut self, summary: &Summary) -> io::Result<()> {
            self.finished_summary = Some(summary.clone());
            Ok(())
        }
    }

    #[test]
    fn test_mock_reporter_event_stream_and_finish() {
        let mut reporter = MockReporter::default();

        let suite_ev = Event::SuiteStart {
            id: "s_1".into(),
            parent: None,
            title: "MathSuite".into(),
            file: "test/math.test.js".into(),
        };

        let test_ev = Event::TestStart {
            id: "t_1".into(),
            suite: "s_1".into(),
            title: "adds 1 + 2".into(),
            file: "test/math.test.js".into(),
        };

        let pass_ev = Event::TestPass {
            id: "t_1".into(),
            duration_ms: 12,
            slow: false,
        };

        reporter.on_event(&suite_ev);
        reporter.on_event(&test_ev);
        reporter.on_event(&pass_ev);

        assert_eq!(reporter.received_events.len(), 3);
        assert_eq!(reporter.received_events[0], suite_ev);
        assert_eq!(reporter.received_events[1], test_ev);
        assert_eq!(reporter.received_events[2], pass_ev);

        let summary = Summary {
            passes: 1,
            failures: 0,
            pending: 0,
            duration_ms: 15,
            failure_details: Vec::new(),
        };

        assert!(!summary.has_failures());
        assert_eq!(summary.total(), 1);

        reporter.finish(&summary).unwrap();
        assert_eq!(reporter.finished_summary, Some(summary));
    }

    #[test]
    fn test_summary_with_failures() {
        let mut reporter = MockReporter::default();

        let fail_ev = Event::TestFail {
            id: "t_2".into(),
            duration_ms: 5,
            error: ProtocolError {
                name: "AssertionError".into(),
                message: "expected 1 to equal 2".into(),
                stack: Some("Error\n    at ...".into()),
                code: Some("ERR_ASSERTION".into()),
                actual: Some("1".into()),
                expected: Some("2".into()),
                show_diff: true,
                operator: Some("strictEqual".into()),
            },
        };

        reporter.on_event(&fail_ev);

        let summary = Summary {
            passes: 0,
            failures: 1,
            pending: 0,
            duration_ms: 20,
            failure_details: vec![FailureDetail {
                title: "should equal".into(),
                full_title: "MathSuite should equal".into(),
                file: "test/math.test.js".into(),
                error: ProtocolError {
                    name: "AssertionError".into(),
                    message: "expected 1 to equal 2".into(),
                    stack: None,
                    code: None,
                    actual: None,
                    expected: None,
                    show_diff: false,
                    operator: None,
                },
            }],
        };

        assert!(summary.has_failures());
        assert_eq!(summary.total(), 1);

        reporter.finish(&summary).unwrap();
        assert_eq!(reporter.finished_summary.as_ref().unwrap().failures, 1);
        assert_eq!(
            reporter.finished_summary.as_ref().unwrap().failure_details[0].full_title,
            "MathSuite should equal"
        );
    }
}
