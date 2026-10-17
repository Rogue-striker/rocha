//! Spec reporter: hierarchical indented tree output matching Mocha default.

use crate::base::{color, speed_class, write_epilogue, ReporterOptions, Symbols};
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::collections::HashMap;
use std::io::{self, Write};

/// Spec reporter matching Mocha's hierarchical output.
pub struct SpecReporter<W: Write> {
    writer: W,
    opts: ReporterOptions,
    indents: usize,
    fail_count: usize,
    first_event: bool,
    tests: HashMap<String, (String, u64)>, // test_id -> (title, slow_ms)
}

impl<W: Write> SpecReporter<W> {
    /// Create a new Spec reporter writing to the specified writer.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            indents: 0,
            fail_count: 0,
            first_event: true,
            tests: HashMap::new(),
        }
    }
}

impl<W: Write> Reporter for SpecReporter<W> {
    fn on_event(&mut self, ev: &Event) {
        if self.first_event {
            self.first_event = false;
            let _ = writeln!(self.writer);
        }

        match ev {
            Event::SuiteStart { title, .. } => {
                self.indents += 1;
                if !title.is_empty() {
                    let mut indent_str = String::new();
                    for _ in 1..self.indents {
                        indent_str.push_str("  ");
                    }
                    let line = format!("{}{}", indent_str, title);
                    let _ = writeln!(
                        self.writer,
                        "{}",
                        color("suite", &line, self.opts.use_colors)
                    );
                }
            }
            Event::SuiteEnd { .. } => {
                if self.indents > 0 {
                    self.indents -= 1;
                }
                if self.indents == 1 {
                    let _ = writeln!(self.writer);
                }
            }
            Event::TestStart { id, title, .. } => {
                self.tests.insert(id.clone(), (title.clone(), 75));
            }
            Event::TestPass {
                id,
                duration_ms,
                slow,
            } => {
                let (title, slow_ms) = self
                    .tests
                    .get(id)
                    .cloned()
                    .unwrap_or_else(|| (id.clone(), 75));
                let speed = if *slow {
                    "slow"
                } else {
                    speed_class(*duration_ms, slow_ms)
                };

                let mut indent_str = String::new();
                for _ in 0..self.indents {
                    indent_str.push_str("  ");
                }

                let check = color("checkmark", Symbols::OK, self.opts.use_colors);
                let title_col = color("pass", &format!(" {}", title), self.opts.use_colors);

                if speed == "fast" {
                    let _ = writeln!(self.writer, "{}  {}{}", indent_str, check, title_col);
                } else {
                    let dur_col = color(
                        speed,
                        &format!(" ({}ms)", duration_ms),
                        self.opts.use_colors,
                    );
                    let _ = writeln!(
                        self.writer,
                        "{}  {}{}{}",
                        indent_str, check, title_col, dur_col
                    );
                }
            }
            Event::TestFail { id, .. } => {
                self.fail_count += 1;
                let (title, _) = self
                    .tests
                    .get(id)
                    .cloned()
                    .unwrap_or_else(|| (id.clone(), 75));
                let mut indent_str = String::new();
                for _ in 0..self.indents {
                    indent_str.push_str("  ");
                }
                let fail_str = format!("  {}) {}", self.fail_count, title);
                let _ = writeln!(
                    self.writer,
                    "{}{}",
                    indent_str,
                    color("fail", &fail_str, self.opts.use_colors)
                );
            }
            Event::TestPending { id } => {
                let (title, _) = self
                    .tests
                    .get(id)
                    .cloned()
                    .unwrap_or_else(|| (id.clone(), 75));
                let mut indent_str = String::new();
                for _ in 0..self.indents {
                    indent_str.push_str("  ");
                }
                let pend_str = format!("  - {}", title);
                let _ = writeln!(
                    self.writer,
                    "{}{}",
                    indent_str,
                    color("pending", &pend_str, self.opts.use_colors)
                );
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        write_epilogue(&mut self.writer, summary, &self.opts)
    }
}
