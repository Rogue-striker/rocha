//! List reporter: flat list of tests with carriage-return updates.

use crate::base::{color, speed_class, write_epilogue, ReporterOptions, Symbols};
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::collections::HashMap;
use std::io::{self, Write};

/// List reporter matching Mocha's flat list output.
pub struct ListReporter<W: Write> {
    writer: W,
    opts: ReporterOptions,
    n: usize,
    first_event: bool,
    suites: HashMap<String, (Option<String>, String)>,
    tests: HashMap<String, (String, String)>, // test_id -> (suite_id, title)
}

impl<W: Write> ListReporter<W> {
    /// Create a new List reporter.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            n: 0,
            first_event: true,
            suites: HashMap::new(),
            tests: HashMap::new(),
        }
    }

    fn full_title(&self, test_id: &str) -> String {
        if let Some((suite_id, title)) = self.tests.get(test_id) {
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

impl<W: Write> Reporter for ListReporter<W> {
    fn on_event(&mut self, ev: &Event) {
        if self.first_event {
            self.first_event = false;
            let _ = writeln!(self.writer);
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
                let full = self.full_title(id);
                let _ = write!(
                    self.writer,
                    "{}",
                    color("pass", &format!("    {}: ", full), self.opts.use_colors)
                );
                let _ = self.writer.flush();
            }
            Event::TestPending { id } => {
                let full = self.full_title(id);
                let check = color("checkmark", "  -", self.opts.use_colors);
                let title_col = color("pending", &format!(" {}", full), self.opts.use_colors);
                let _ = writeln!(self.writer, "{}{}", check, title_col);
            }
            Event::TestPass {
                id,
                duration_ms,
                slow,
            } => {
                let full = self.full_title(id);
                let speed = if *slow {
                    "slow"
                } else {
                    speed_class(*duration_ms, 75)
                };
                let check = color(
                    "checkmark",
                    &format!("  {}", Symbols::OK),
                    self.opts.use_colors,
                );
                let title_col = color("pass", &format!(" {}: ", full), self.opts.use_colors);
                let dur_col = color(speed, &format!("{}ms", duration_ms), self.opts.use_colors);
                let _ = write!(self.writer, "\r");
                let _ = writeln!(self.writer, "{}{}{}", check, title_col, dur_col);
            }
            Event::TestFail { id, .. } => {
                self.n += 1;
                let full = self.full_title(id);
                let fail_str = format!("  {}) {}", self.n, full);
                let _ = write!(self.writer, "\r");
                let _ = writeln!(
                    self.writer,
                    "{}",
                    color("fail", &fail_str, self.opts.use_colors)
                );
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        write_epilogue(&mut self.writer, summary, &self.opts)
    }
}
