//! JSON reporter matching Mocha's standard JSON format.

use crate::base::{speed_class, ReporterOptions};
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::io::{self, Write};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct JsonStats {
    pub suites: usize,
    pub tests: usize,
    pub passes: usize,
    pub pending: usize,
    pub failures: usize,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub start: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub end: Option<String>,
    pub duration: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct JsonTest {
    pub title: String,
    pub full_title: String,
    pub file: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub duration: Option<u64>,
    pub current_retry: u32,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub speed: Option<String>,
    pub err: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JsonReport {
    pub stats: JsonStats,
    pub tests: Vec<JsonTest>,
    pub pending: Vec<JsonTest>,
    pub failures: Vec<JsonTest>,
    pub passes: Vec<JsonTest>,
}

/// JSON reporter matching Mocha's single JSON object output.
pub struct JsonReporter<W: Write> {
    writer: W,
    #[allow(dead_code)]
    opts: ReporterOptions,
    suites: HashMap<String, (Option<String>, String)>,
    tests_meta: HashMap<String, (String, String, String)>, // test_id -> (suite_id, title, file)
    tests: Vec<JsonTest>,
    passes: Vec<JsonTest>,
    failures: Vec<JsonTest>,
    pending: Vec<JsonTest>,
}

impl<W: Write> JsonReporter<W> {
    /// Create a new JSON reporter writing to `writer`.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            suites: HashMap::new(),
            tests_meta: HashMap::new(),
            tests: Vec::new(),
            passes: Vec::new(),
            failures: Vec::new(),
            pending: Vec::new(),
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

impl<W: Write> Reporter for JsonReporter<W> {
    fn on_event(&mut self, ev: &Event) {
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
                    "slow".to_string()
                } else {
                    speed_class(*duration_ms, 75).to_string()
                };

                let t = JsonTest {
                    title,
                    full_title: full.clone(),
                    file,
                    duration: Some(*duration_ms),
                    current_retry: 0,
                    speed: Some(speed.clone()),
                    err: serde_json::json!({}),
                };
                if let Some(existing) = self.tests.iter_mut().find(|x| x.full_title == full) {
                    existing.duration = Some(*duration_ms);
                    existing.speed = Some(speed);
                } else {
                    self.tests.push(t.clone());
                }
                self.passes.push(t);
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

                let mut err_map = serde_json::Map::new();
                if error.name != "Error" {
                    err_map.insert("name".into(), serde_json::json!(error.name));
                }
                err_map.insert("message".into(), serde_json::json!(error.message));
                if let Some(ref stack) = error.stack {
                    err_map.insert("stack".into(), serde_json::json!(stack));
                }
                if let Some(ref code) = error.code {
                    err_map.insert("code".into(), serde_json::json!(code));
                }
                if let Some(ref act) = error.actual {
                    err_map.insert("actual".into(), serde_json::json!(act));
                }
                if let Some(ref exp) = error.expected {
                    err_map.insert("expected".into(), serde_json::json!(exp));
                }
                if error.show_diff {
                    err_map.insert("showDiff".into(), serde_json::json!(true));
                }
                if let Some(ref op) = error.operator {
                    err_map.insert("operator".into(), serde_json::json!(op));
                }

                let t = JsonTest {
                    title,
                    full_title: full.clone(),
                    file,
                    duration: Some(*duration_ms),
                    current_retry: 0,
                    speed: Some(speed_class(*duration_ms, 75).to_string()),
                    err: serde_json::Value::Object(err_map),
                };
                if let Some(existing) = self.tests.iter_mut().find(|x| x.full_title == full) {
                    existing.err = t.err.clone();
                } else {
                    self.tests.push(t.clone());
                }
                self.failures.push(t);
            }
            Event::TestPending { id } => {
                let (title, file) = self
                    .tests_meta
                    .get(id)
                    .map(|(_, t, f)| (t.clone(), f.clone()))
                    .unwrap_or_else(|| (id.clone(), String::new()));
                let full = self.full_title(id);

                let t = JsonTest {
                    title,
                    full_title: full,
                    file,
                    duration: None,
                    current_retry: 0,
                    speed: None,
                    err: serde_json::json!({}),
                };
                self.tests.push(t.clone());
                self.pending.push(t);
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        let stats = JsonStats {
            suites: self.suites.len(),
            tests: self.tests.len(),
            passes: summary.passes,
            pending: summary.pending,
            failures: summary.failures,
            start: None,
            end: None,
            duration: summary.duration_ms,
        };

        let report = JsonReport {
            stats,
            tests: self.tests.clone(),
            pending: self.pending.clone(),
            failures: self.failures.clone(),
            passes: self.passes.clone(),
        };

        let json_str = serde_json::to_string_pretty(&report).map_err(io::Error::other)?;
        writeln!(self.writer, "{}", json_str)?;
        self.writer.flush()
    }
}
