//! Dot reporter: compact dot-matrix representation.

use crate::base::{color, write_epilogue, ReporterOptions, Symbols};
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::io::{self, Write};

/// Dot reporter matching Mocha's dot matrix representation.
pub struct DotReporter<W: Write> {
    writer: W,
    opts: ReporterOptions,
    n: usize,
    width: usize,
}

impl<W: Write> DotReporter<W> {
    /// Create a new Dot reporter.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        let width = ((opts.window_width as f64) * 0.75) as usize;
        let width = if width == 0 { 50 } else { width };
        Self {
            writer,
            opts,
            n: 0,
            width,
        }
    }
}

impl<W: Write> Reporter for DotReporter<W> {
    fn on_event(&mut self, ev: &Event) {
        match ev {
            Event::TestPass { slow, .. } => {
                if self.n == 0 {
                    let _ = writeln!(self.writer);
                    let _ = write!(self.writer, "  ");
                } else if self.n.is_multiple_of(self.width) {
                    let _ = write!(self.writer, "\n  ");
                    let _ = self.writer.flush();
                }
                let sym = if *slow {
                    color("bright yellow", Symbols::DOT, self.opts.use_colors)
                } else {
                    color("fast", Symbols::DOT, self.opts.use_colors)
                };
                let _ = write!(self.writer, "{}", sym);
                self.n += 1;
            }
            Event::TestFail { .. } => {
                if self.n == 0 {
                    let _ = writeln!(self.writer);
                    let _ = write!(self.writer, "  ");
                } else if self.n.is_multiple_of(self.width) {
                    let _ = write!(self.writer, "\n  ");
                }
                let sym = color("fail", Symbols::BANG, self.opts.use_colors);
                let _ = write!(self.writer, "{}", sym);
                let _ = self.writer.flush();
                self.n += 1;
            }
            Event::TestPending { .. } => {
                if self.n == 0 {
                    let _ = writeln!(self.writer);
                    let _ = write!(self.writer, "  ");
                } else if self.n.is_multiple_of(self.width) {
                    let _ = write!(self.writer, "\n  ");
                    let _ = self.writer.flush();
                }
                let sym = color("pending", Symbols::COMMA, self.opts.use_colors);
                let _ = write!(self.writer, "{}", sym);
                self.n += 1;
            }
            _ => {}
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        writeln!(self.writer)?;
        write_epilogue(&mut self.writer, summary, &self.opts)?;
        self.writer.flush()
    }
}
