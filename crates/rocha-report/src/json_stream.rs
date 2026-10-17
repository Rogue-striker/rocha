//! JSON-stream reporter: newline-delimited JSON stream matching Mocha json-stream.

use crate::base::{speed_class, ReporterOptions};
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use serde_json::json;
use std::collections::HashMap;
use std::io::{self, Write};

/// JSON-stream reporter emitting newline-delimited event tuples: [event_name, data].
pub struct JsonStreamReporter<W: Write> {
    writer: W,
    #[allow(dead_code)]
    opts: ReporterOptions,
    first_event: bool,
    suites: HashMap<String, (Option<String>, String)>,
    tests_meta: HashMap<String, (String, String, String)>, // test_id -> (suite_id, title, file)
}

impl<W: Write> JsonStreamReporter<W> {
    /// Create a new JsonStream reporter.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            first_event: true,
            suites: HashMap::new(),
            tests_meta: HashMap::new(),
        }
    }

    fn full_title(&self, test_id: &str) -> String {
        if let Some((suite_id, title, _)) = self.tests_meta.get(test_id) {
            let mut parts = Vec::new();
            let mut cur = Some(suite_id.clone());
            while let Some(sid) = cur {
                if let Some((parent, s_title)) = self.suites.get(&sid) {
                    if !s_title.is_empty() {
                        parts.push(s_title.as_str());
                    }
                    cur = parent.clone();
                } else {
                    break;
                }
            }
            parts.reverse();
            if parts.is_empty() {
                title.clone()
            } else {
                format!("{} {}", parts.join(" "), title)
            }
        } else {
            test_id.to_string()
        }
    }
}

impl<W: Write> Reporter for JsonStreamReporter<W> {
    fn on_event(&mut self, ev: &Event) {
        if self.first_event {
            self.first_event = false;
            let start_tuple = json!(["start", { "total": 0 }]);
            let _ = writeln!(self.writer, "{}", start_tuple);
        }

        match ev {
            Event::SuiteStart {
                id, parent, title, ..
            } => {
                self.suites
                    .insert(id.clone(), (parent.clone(), title.clone()));
            }
            Event::TestStart {
                id,
                suite,
                title,
                file,
            } => {
                self.tests_meta
                    .insert(id.clone(), (suite.clone(), title.clone(), file.clone()));
            }
            Event::TestPass {
                id,
                duration_ms,
                slow,
            } => {
                let (title, file) = self
                    .tests_meta
                    .get(id)
                    .map(|(_, t, f)| (t.clone(), f.clone()))
                    .unwrap_or_else(|| (id.clone(), String::new()));
                let full = self.full_title(id);
                let speed = if *slow {
                    "slow"
                } else {
                    speed_class(*duration_ms, 75)
                };

                let pass_tuple = json!([
                    "pass",
                    {
                        "title": title,
                        "fullTitle": full,
                        "file": file,
                        "duration": duration_ms,
                        "currentRetry": 0,
                        "speed": speed
                    }
                ]);
                let _ = writeln!(self.writer, "{}", pass_tuple);
                let _ = self.writer.flush();
            }
            Event::TestFail {
                id,
                duration_ms,
                error,
            } => {
                let (title, file) = self
                    .tests_meta
                    .get(id)
                    .map(|(_, t, f)| (t.clone(), f.clone()))
                    .unwrap_or_else(|| (id.clone(), String::new()));
                let full = self.full_title(id);

                let fail_tuple = json!([
                    "fail",
                    {
                        "title": title,
                        "fullTitle": full,
                        "file": file,
                        "duration": duration_ms,
                        "currentRetry": 0,
                        "speed": speed_class(*duration_ms, 75),
                        "err": error.message,
                        "stack": error.stack
                    }
                ]);
                let _ = writeln!(self.writer, "{}", fail_tuple);
                let _ = self.writer.flush();
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        let end_tuple = json!([
            "end",
            {
                "suites": self.suites.len(),
                "tests": summary.total(),
                "passes": summary.passes,
                "pending": summary.pending,
                "failures": summary.failures,
                "duration": summary.duration_ms
            }
        ]);
        writeln!(self.writer, "{}", end_tuple)?;
        self.writer.flush()
    }
}
