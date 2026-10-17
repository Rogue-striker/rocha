//! Embedded JS engine runner using Boa.
//!
//! Evaluates pure-JS fixtures and harness in-process without spawning Node.js.
//! Detects unsupported Node.js standard modules (fs, path, child_process, etc.)
//! and reports them so the orchestrator can cleanly fall back to Node.

use boa_engine::{Context, Source};
use rocha_protocol::{ProtocolError, RunFileOptions, TestCounts, WorkerMessage};
use std::time::Instant;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum EmbeddedEngineError {
    #[error("Unsupported Node module '{0}' required in embedded engine")]
    UnsupportedNodeModule(String),
    #[error("Evaluation error: {0}")]
    EvalError(String),
    #[error("IO error reading test file: {0}")]
    IoError(#[from] std::io::Error),
}

pub struct EmbeddedRunner;

impl EmbeddedRunner {
    /// Check if code or file requires Node built-in modules that are not supported in embedded engine.
    pub fn detect_unsupported_node_modules(code: &str) -> Option<String> {
        let unsupported_modules = [
            "fs",
            "path",
            "child_process",
            "net",
            "http",
            "https",
            "crypto",
            "os",
            "stream",
            "cluster",
            "worker_threads",
            "dgram",
            "dns",
            "readline",
            "tls",
            "zlib",
        ];

        for m in unsupported_modules {
            if code.contains(&format!("require('{m}')"))
                || code.contains(&format!("require(\"{m}\")"))
                || code.contains(&format!("from '{m}'"))
                || code.contains(&format!("from \"{m}\""))
                || code.contains(&format!("from 'node:{m}'"))
                || code.contains(&format!("from \"node:{m}\""))
            {
                return Some(m.to_string());
            }
        }
        None
    }

    /// Execute a pure JavaScript test file in-process using the embedded engine.
    pub fn run_file<F>(
        file_path: &str,
        _options: &RunFileOptions,
        mut on_event: F,
    ) -> Result<WorkerMessage, EmbeddedEngineError>
    where
        F: FnMut(&WorkerMessage),
    {
        let content = std::fs::read_to_string(file_path)?;
        if let Some(module) = Self::detect_unsupported_node_modules(&content) {
            return Err(EmbeddedEngineError::UnsupportedNodeModule(module));
        }

        let start_time = Instant::now();

        // Initialize embedded Boa Context
        let mut context = Context::default();

        // Inject minimal embedded Mocha harness with event reporting
        let harness_code = r#"
        globalThis.__rocha_events = [];
        globalThis.__rocha_passes = 0;
        globalThis.__rocha_failures = 0;
        globalThis.__rocha_pending = 0;

        globalThis.assert = function(cond, msg) {
            if (!cond) throw new Error(msg || "Assertion failed");
        };
        globalThis.assert.strictEqual = function(act, exp, msg) {
            if (act !== exp) throw new Error(msg || `Expected ${exp} but got ${act}`);
        };
        globalThis.assert.equal = globalThis.assert.strictEqual;
        globalThis.assert.ok = globalThis.assert;

        globalThis.describe = function(title, fn) {
            globalThis.__rocha_events.push({ type: "suite_start", title: title });
            try {
                fn();
            } finally {
                globalThis.__rocha_events.push({ type: "suite_end", title: title });
            }
        };

        globalThis.it = function(title, fn) {
            if (!fn) {
                globalThis.__rocha_pending++;
                globalThis.__rocha_events.push({ type: "test_pending", title: title });
                return;
            }
            try {
                fn();
                globalThis.__rocha_passes++;
                globalThis.__rocha_events.push({ type: "test_pass", title: title });
            } catch (err) {
                globalThis.__rocha_failures++;
                globalThis.__rocha_events.push({
                    type: "test_fail",
                    title: title,
                    error: (err && err.message) ? err.message : String(err)
                });
            }
        };

        globalThis.it.skip = function(title) {
            globalThis.__rocha_pending++;
            globalThis.__rocha_events.push({ type: "test_pending", title: title });
        };
        globalThis.xit = globalThis.it.skip;
        globalThis.xdescribe = function(title, fn) {};
        "#;

        if let Err(err) = context.eval(Source::from_bytes(harness_code.as_bytes())) {
            return Err(EmbeddedEngineError::EvalError(format!("{:?}", err)));
        }

        // Run user test code
        let eval_result = context.eval(Source::from_bytes(content.as_bytes()));
        if let Err(err) = eval_result {
            let error_msg = format!("{:?}", err);
            if error_msg.contains("require") || error_msg.contains("Cannot find module") {
                return Err(EmbeddedEngineError::UnsupportedNodeModule("unknown".into()));
            }
            return Err(EmbeddedEngineError::EvalError(error_msg));
        }

        // Retrieve recorded events from JS context
        let events_js = context
            .eval(Source::from_bytes(
                b"JSON.stringify(globalThis.__rocha_events)",
            ))
            .map_err(|e| EmbeddedEngineError::EvalError(format!("{:?}", e)))?;

        let events_json: String = events_js
            .as_string()
            .map(|s| s.to_std_string_escaped())
            .unwrap_or_else(|| "[]".into());

        let raw_events: Vec<serde_json::Value> =
            serde_json::from_str(&events_json).unwrap_or_default();

        let mut passes = 0u32;
        let mut failures = 0u32;
        let mut pending = 0u32;

        for ev in raw_events {
            let ev_type = ev.get("type").and_then(|v| v.as_str()).unwrap_or("");
            let title = ev.get("title").and_then(|v| v.as_str()).unwrap_or("");

            match ev_type {
                "test_pass" => {
                    passes += 1;
                    on_event(&WorkerMessage::TestPass {
                        id: title.to_string(),
                        duration_ms: 0,
                        slow: false,
                    });
                }
                "test_fail" => {
                    failures += 1;
                    let err_msg = ev
                        .get("error")
                        .and_then(|v| v.as_str())
                        .unwrap_or("Assertion failed");
                    on_event(&WorkerMessage::TestFail {
                        id: title.to_string(),
                        duration_ms: 0,
                        error: ProtocolError {
                            name: "AssertionError".into(),
                            message: err_msg.to_string(),
                            stack: None,
                            code: None,
                            actual: None,
                            expected: None,
                            show_diff: false,
                            operator: None,
                        },
                    });
                }
                "test_pending" => {
                    pending += 1;
                    on_event(&WorkerMessage::TestPending {
                        id: title.to_string(),
                    });
                }
                _ => {}
            }
        }

        let duration_ms = start_time.elapsed().as_millis() as u64;
        let file_done = WorkerMessage::FileDone {
            file: file_path.to_string(),
            counts: TestCounts {
                passes,
                failures,
                pending,
                duration_ms,
            },
        };
        on_event(&file_done);

        Ok(file_done)
    }
}
