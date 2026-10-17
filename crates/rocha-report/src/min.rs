//! Min reporter: minimal summary output, optionally clearing the screen.

use crate::base::{write_epilogue, ReporterOptions};
use crate::{Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::io::{self, Write};

/// Min reporter displaying only final summary and errors.
pub struct MinReporter<W: Write> {
    writer: W,
    opts: ReporterOptions,
    first_event: bool,
}

impl<W: Write> MinReporter<W> {
    /// Create a new Min reporter.
    pub fn new(writer: W, opts: ReporterOptions) -> Self {
        Self {
            writer,
            opts,
            first_event: true,
        }
    }
}

impl<W: Write> Reporter for MinReporter<W> {
    fn on_event(&mut self, _ev: &Event) {
        if self.first_event {
            self.first_event = false;
            if self.opts.use_colors {
                let _ = write!(self.writer, "\x1b[2J\x1b[1;3H");
                let _ = self.writer.flush();
            }
        }
    }

    fn finish(&mut self, summary: &Summary) -> io::Result<()> {
        write_epilogue(&mut self.writer, summary, &self.opts)
    }
}
