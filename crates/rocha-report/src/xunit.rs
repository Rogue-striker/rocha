//! XUnit/JUnit XML reporter compatible with Jenkins and mocha-junit-reporter.

use crate::base::ReporterOptions;
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::collections::HashMap;
use std::io::{self, Write};

/// XML escaping helper.
fn escape_xml(s: &str) -> String {
    let mut out = String::with_capacity(s.len());
    for c in s.chars() {
        match c {
            '&' => out.push_str("&amp;"),
            '<' => out.push_str("&lt;"),
            '>' => out.push_str("&gt;"),
            '"' => out.push_str("&quot;"),
            '\'' => out.push_str("&apos;"),
            other => {
                let code = other as u32;
                if code == 0x09 || code == 0x0a || code == 0x0d || code >= 0x20 {
                    out.push(other);
                }
            }
        }
    }
    out
}

#[derive(Debug, Clone)]
enum TestCaseStatus {
    Pass,
    Fail {
        message: String,
        stack: Option<String>,
        name: String,
    },
    Pending,
}

#[derive(Debug, Clone)]
struct TestCaseRecord {
    classname: String,
    name: String,
    file: String,
    duration_s: f64,
    status: TestCaseStatus,
}

/// XUnit / JUnit XML reporter matching Jenkins schema.
pub struct XUnitReporter<W: Write> {
    writer: W,
    #[allow(dead_code)]
    opts: ReporterOptions,
    suite_name: String,
    suites: HashMap<String, (Option<String>, String)>,
    tests_meta: HashMap<String, (String, String, String)>, // id -> (suite_id, title, file)
    records: Vec<TestCaseRecord>,
}

impl<W: Write> XUnitReporter<W> {
    /// Create a new XUnit reporter.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            suite_name: "Mocha Tests".into(),
            suites: HashMap::new(),
            tests_meta: HashMap::new(),
            records: Vec::new(),
        }
    }

    /// Set custom suite name (compatible with mocha-junit-reporter `suiteName` or `testsuitesTitle`).
    pub fn set_suite_name(&mut self, name: impl Into<String>) {
        self.suite_name = name.into();
    }

    fn suite_full_title(&self, suite_id: &str) -> String {
        let mut parts = Vec::new();
        let mut cur = Some(suite_id.to_string());
        while let Some(sid) = cur {
            if let Some((parent, title)) = self.suites.get(&sid) {
                if !title.is_empty() {
                    parts.push(title.as_str());
                }
                cur = parent.clone();
            } else {
                break;
            }
        }
        parts.reverse();
        parts.join(" ")
    }
}

impl<W: Write> Reporter for XUnitReporter<W> {
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
                id, duration_ms, ..
            } => {
                let (suite_id, title, file) = self
                    .tests_meta
                    .get(id)
                    .cloned()
                    .unwrap_or_else(|| (String::new(), id.clone(), String::new()));
                let classname = self.suite_full_title(&suite_id);
                self.records.push(TestCaseRecord {
                    classname,
                    name: title,
                    file,
                    duration_s: (*duration_ms as f64) / 1000.0,
                    status: TestCaseStatus::Pass,
                });
            }
            Event::TestFail {
                id,
                duration_ms,
                error,
            } => {
                let (suite_id, title, file) = self
                    .tests_meta
                    .get(id)
                    .cloned()
                    .unwrap_or_else(|| (String::new(), id.clone(), String::new()));
                let classname = self.suite_full_title(&suite_id);
                self.records.push(TestCaseRecord {
                    classname,
                    name: title,
                    file,
                    duration_s: (*duration_ms as f64) / 1000.0,
                    status: TestCaseStatus::Fail {
                        message: error.message.clone(),
                        stack: error.stack.clone(),
                        name: error.name.clone(),
                    },
                });
            }
            Event::TestPending { id } => {
                let (suite_id, title, file) = self
                    .tests_meta
                    .get(id)
                    .cloned()
                    .unwrap_or_else(|| (String::new(), id.clone(), String::new()));
                let classname = self.suite_full_title(&suite_id);
                self.records.push(TestCaseRecord {
                    classname,
                    name: title,
                    file,
                    duration_s: 0.0,
                    status: TestCaseStatus::Pending,
                });
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        let total_time_s = (summary.duration_ms as f64) / 1000.0;
        let total_tests = summary.total();

        writeln!(
            self.writer,
            r#"<testsuite name="{}" tests="{}" failures="{}" errors="0" skipped="{}" time="{:.3}">"#,
            escape_xml(&self.suite_name),
            total_tests,
            summary.failures,
            summary.pending,
            total_time_s,
        )?;

        for rec in &self.records {
            let class_attr = escape_xml(&rec.classname);
            let name_attr = escape_xml(&rec.name);
            let file_attr = escape_xml(&rec.file);
            let time_val = rec.duration_s;

            match &rec.status {
                TestCaseStatus::Pass => {
                    writeln!(
                        self.writer,
                        r#"  <testcase classname="{}" name="{}" file="{}" time="{:.3}"/>"#,
                        class_attr, name_attr, file_attr, time_val
                    )?;
                }
                TestCaseStatus::Pending => {
                    writeln!(
                        self.writer,
                        r#"  <testcase classname="{}" name="{}" file="{}" time="{:.3}">"#,
                        class_attr, name_attr, file_attr, time_val
                    )?;
                    writeln!(self.writer, r#"    <skipped/>"#)?;
                    writeln!(self.writer, r#"  </testcase>"#)?;
                }
                TestCaseStatus::Fail {
                    message,
                    stack,
                    name,
                } => {
                    writeln!(
                        self.writer,
                        r#"  <testcase classname="{}" name="{}" file="{}" time="{:.3}">"#,
                        class_attr, name_attr, file_attr, time_val
                    )?;
                    let msg_attr = escape_xml(message);
                    let type_attr = escape_xml(name);
                    let body = if let Some(ref st) = stack {
                        escape_xml(st)
                    } else {
                        escape_xml(message)
                    };
                    writeln!(
                        self.writer,
                        r#"    <failure message="{}" type="{}">{}</failure>"#,
                        msg_attr, type_attr, body
                    )?;
                    writeln!(self.writer, r#"  </testcase>"#)?;
                }
            }
        }

        writeln!(self.writer, "</testsuite>")?;
        self.writer.flush()
    }
}
