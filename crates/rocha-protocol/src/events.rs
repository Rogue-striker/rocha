//! Event protocol definitions for Rocha.

use serde::{Deserialize, Serialize};

/// Current Rocha wire protocol version.
pub const PROTOCOL_VERSION: u32 = 1;

/// Maximum frame size allowed over the wire (8 MiB).
pub const MAX_FRAME_SIZE: usize = 8 * 1024 * 1024;

/// Maximum allowed string length for error fields (1 MiB).
pub const MAX_ERROR_STRING_LEN: usize = 1024 * 1024;

/// Structured error payload serialized across the wire protocol.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ProtocolError {
    /// Error class / constructor name (e.g. "AssertionError", "TypeError").
    pub name: String,
    /// Main human-readable error message.
    pub message: String,
    /// Stack trace string if available.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub stack: Option<String>,
    /// Machine error code if present (e.g. "ERR_ASSERTION").
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub code: Option<String>,
    /// Stringified actual value for assertion failures.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub actual: Option<String>,
    /// Stringified expected value for assertion failures.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub expected: Option<String>,
    /// Whether a diff view should be displayed.
    #[serde(default)]
    pub show_diff: bool,
    /// Assertion operator if available (e.g. "strictEqual", "deepStrictEqual").
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub operator: Option<String>,
}

/// Aggregated test outcome counts for a completed file.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct TestCounts {
    /// Number of passing tests.
    pub passes: u32,
    /// Number of failing tests.
    pub failures: u32,
    /// Number of pending/skipped tests.
    pub pending: u32,
    /// Total duration for file execution in milliseconds.
    pub duration_ms: u64,
}

/// Target output stream for captured process/console logs.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum LogStream {
    /// Standard output.
    Stdout,
    /// Standard error.
    Stderr,
}

/// Options sent to a worker for running a test file.
#[derive(Debug, Default, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct RunFileOptions {
    /// Timeout in milliseconds (0 = disabled).
    #[serde(default)]
    pub timeout_ms: u64,
    /// Slow threshold in milliseconds.
    #[serde(default)]
    pub slow_ms: u64,
    /// Optional regex or substring filter for test titles.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub grep: Option<String>,
    /// Whether to invert the grep match.
    #[serde(default)]
    pub invert_grep: bool,
    /// Whether to bail immediately on first test failure.
    #[serde(default)]
    pub bail: bool,
    /// Number of retries allowed per test.
    #[serde(default)]
    pub retries: u32,
}

/// Events emitted by worker processes and sent to the orchestrator.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum WorkerMessage {
    /// Handshake message confirming worker readiness and protocol version.
    Ready {
        /// Wire protocol version implemented by worker.
        protocol_version: u32,
    },
    /// A test suite has started executing.
    SuiteStart {
        /// Unique suite identifier within the worker run.
        id: String,
        /// Parent suite ID if this is a nested suite.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        parent: Option<String>,
        /// Suite title or description.
        title: String,
        /// File containing the suite.
        file: String,
    },
    /// A single test runnable has started.
    TestStart {
        /// Unique test identifier.
        id: String,
        /// Enclosing suite ID.
        suite: String,
        /// Test title.
        title: String,
        /// File containing the test.
        file: String,
    },
    /// A test passed successfully.
    TestPass {
        /// Test identifier.
        id: String,
        /// Execution duration in milliseconds.
        duration_ms: u64,
        /// Whether duration exceeded the slow threshold.
        slow: bool,
    },
    /// A test failed.
    TestFail {
        /// Test identifier.
        id: String,
        /// Execution duration in milliseconds.
        duration_ms: u64,
        /// Serialized error information.
        error: ProtocolError,
    },
    /// A test is pending or was skipped.
    TestPending {
        /// Test identifier.
        id: String,
    },
    /// A lifecycle hook (before/after/beforeEach/afterEach) failed.
    HookFail {
        /// Enclosing suite ID.
        suite: String,
        /// Hook type ("before", "after", "beforeEach", "afterEach").
        hook: String,
        /// Hook title or description.
        title: String,
        /// Serialized error information.
        error: ProtocolError,
    },
    /// A failed test is being retried.
    Retry {
        /// Test identifier.
        id: String,
        /// Current retry attempt number (1-indexed).
        attempt: u32,
    },
    /// A test suite finished executing.
    SuiteEnd {
        /// Suite identifier.
        id: String,
    },
    /// File execution has completed.
    FileDone {
        /// Path to the completed test file.
        file: String,
        /// Test outcome summary counts.
        counts: TestCounts,
    },
    /// Captured console or stdio log chunk.
    Log {
        /// Target stream.
        stream: LogStream,
        /// Raw log chunk string.
        chunk: String,
    },
    /// Unrecoverable worker fatal error.
    Fatal {
        /// Serialized error information.
        error: ProtocolError,
    },
    /// Worker process crashed or exited unexpectedly while running a file.
    WorkerCrashed {
        /// Test file being executed when worker crashed.
        file: String,
    },
}

/// Commands emitted by the orchestrator and sent to a worker process.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum OrchestratorMessage {
    /// Command to execute a specific test file with options.
    RunFile {
        /// Path to test file.
        file: String,
        /// Execution options.
        options: RunFileOptions,
    },
    /// Command to abort current file execution immediately.
    Abort {
        /// Human-readable reason for abort.
        reason: String,
    },
    /// Command for graceful worker shutdown.
    Shutdown,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_roundtrip_ready_message() {
        let msg = WorkerMessage::Ready {
            protocol_version: PROTOCOL_VERSION,
        };
        let bytes = rmp_serde::to_vec_named(&msg).expect("serialization failed");
        let decoded: WorkerMessage = rmp_serde::from_slice(&bytes).expect("deserialization failed");
        assert_eq!(msg, decoded);
    }

    #[test]
    fn test_roundtrip_test_fail_message() {
        let msg = WorkerMessage::TestFail {
            id: "test-42".into(),
            duration_ms: 125,
            error: ProtocolError {
                name: "AssertionError".into(),
                message: "expected 1 to equal 2".into(),
                stack: Some("at Context.<anonymous> (test.js:10:5)".into()),
                code: Some("ERR_ASSERTION".into()),
                actual: Some("1".into()),
                expected: Some("2".into()),
                show_diff: true,
                operator: Some("strictEqual".into()),
            },
        };
        let bytes = rmp_serde::to_vec_named(&msg).expect("serialization failed");
        let decoded: WorkerMessage = rmp_serde::from_slice(&bytes).expect("deserialization failed");
        assert_eq!(msg, decoded);
    }

    #[test]
    fn test_roundtrip_orchestrator_run_file() {
        let msg = OrchestratorMessage::RunFile {
            file: "test/unit.js".into(),
            options: RunFileOptions {
                timeout_ms: 2000,
                slow_ms: 75,
                grep: Some("auth".into()),
                invert_grep: false,
                bail: true,
                retries: 2,
            },
        };
        let bytes = rmp_serde::to_vec_named(&msg).expect("serialization failed");
        let decoded: OrchestratorMessage =
            rmp_serde::from_slice(&bytes).expect("deserialization failed");
        assert_eq!(msg, decoded);
    }
}
