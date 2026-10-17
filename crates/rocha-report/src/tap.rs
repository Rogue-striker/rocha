//! TAP reporter: Test Anything Protocol (v12 and v13) compatible output.

use crate::base::ReporterOptions;
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::collections::HashMap;
use std::io::{self, Write};

/// TAP reporter supporting both TAP12 and TAP13 specs.
pub struct TapReporter<W: Write> {
    writer: W,
    opts: ReporterOptions,
    n: usize,
    first_event: bool,
    suites: HashMap<String, (Option<String>, String)>,
    tests: HashMap<String, (String, String)>, // test_id -> (suite_id, title)
}

impl<W: Write> TapReporter<W> {
    /// Create a new TAP reporter.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            n: 1,
            first_event: true,
            suites: HashMap::new(),
            tests: HashMap::new(),
        }
    }

    fn safe_title(&self, test_id: &str) -> String {
        let full = if let Some((suite_id, title)) = self.tests.get(test_id) {
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
        };
        full.replace('#', "")
    }
}

impl<W: Write> Reporter for TapReporter<W> {
    fn on_event(&mut self, ev: &Event) {
        if self.first_event {
            self.first_event = false;
            if self.opts.tap_version == "13" {
                let _ = writeln!(self.writer, "TAP version 13");
            }
        }

        match ev {
            Event::SuiteStart {
                id, parent, title, ..
            } => {
                self.suites
                    .insert(id.clone(), (parent.clone(), title.clone()));
            }
            Event::TestStart {
                id, suite, title, ..
            } => {
                self.tests
                    .insert(id.clone(), (suite.clone(), title.clone()));
            }
            Event::TestPass { id, .. } => {
                let title = self.safe_title(id);
                let _ = writeln!(self.writer, "ok {} {}", self.n, title);
                self.n += 1;
            }
            Event::TestPending { id } => {
                let title = self.safe_title(id);
                let _ = writeln!(self.writer, "ok {} {} # SKIP -", self.n, title);
                self.n += 1;
            }
            Event::TestFail { id, error, .. } => {
                let title = self.safe_title(id);
                let _ = writeln!(self.writer, "not ok {} {}", self.n, title);

                if self.opts.tap_version == "13" {
                    let has_yaml = !error.message.is_empty() || error.stack.is_some();
                    if has_yaml {
                        let _ = writeln!(self.writer, "  ---");
                        if !error.message.is_empty() {
                            let _ = writeln!(self.writer, "  message: |-");
                            for line in error.message.lines() {
                                let _ = writeln!(self.writer, "    {}", line);
                            }
                        }
                        if let Some(ref stack) = error.stack {
                            let _ = writeln!(self.writer, "  stack: |-");
                            for line in stack.lines() {
                                let _ = writeln!(self.writer, "    {}", line);
                            }
                        }
                        let _ = writeln!(self.writer, "  ...");
                    }
                } else {
                    if !error.message.is_empty() {
                        for line in error.message.lines() {
                            let _ = writeln!(self.writer, "  {}", line);
                        }
                    }
                    if let Some(ref stack) = error.stack {
                        for line in stack.lines() {
                            let _ = writeln!(self.writer, "  {}", line);
                        }
                    }
                }
                self.n += 1;
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        writeln!(self.writer, "# tests {}", summary.passes + summary.failures)?;
        writeln!(self.writer, "# pass {}", summary.passes)?;
        writeln!(self.writer, "# fail {}", summary.failures)?;
        writeln!(
            self.writer,
            "1..{}",
            summary.passes + summary.failures + summary.pending
        )?;
        self.writer.flush()
    }
}
