//! Interactive keyboard controls for Rocha watch mode.

use std::collections::HashSet;
use std::io::{Read, Write};
use std::path::PathBuf;

/// Action triggered by an interactive key command.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum InteractiveAction {
    /// Rerun all tests ('a').
    RunAll,
    /// Rerun only failed tests from previous run ('f').
    RunFailedOnly,
    /// Filter tests by file path/regex ('p').
    FilterByFile(String),
    /// Filter test titles by grep pattern ('g').
    FilterByGrep(String),
    /// Quit watch mode ('q').
    Quit,
    /// No action or unrecognized key.
    None,
}

/// Interactive watch session state controller.
#[derive(Debug, Clone)]
pub struct InteractiveController {
    /// Whether the standard input is an interactive TTY.
    pub is_tty: bool,
    /// Set of failed test files from the most recent run.
    pub failed_files: HashSet<PathBuf>,
    /// Active file filter regex/pattern.
    pub file_filter: Option<String>,
    /// Active test title grep pattern.
    pub grep_filter: Option<String>,
}

impl InteractiveController {
    /// Create a new interactive controller instance.
    pub fn new(is_tty: bool) -> Self {
        Self {
            is_tty,
            failed_files: HashSet::new(),
            file_filter: None,
            grep_filter: None,
        }
    }

    /// Record test files that failed during the last run.
    pub fn record_results(&mut self, failed: &[PathBuf]) {
        self.failed_files = failed.iter().cloned().collect();
    }

    /// Handle an input keystroke and return the corresponding action.
    pub fn handle_key<R: Read, W: Write>(
        &mut self,
        key: char,
        reader: &mut R,
        writer: &mut W,
    ) -> InteractiveAction {
        if !self.is_tty {
            return InteractiveAction::None;
        }

        match key {
            'a' | 'A' => {
                let _ = writeln!(writer, "\n--- Rerunning all tests ---");
                self.file_filter = None;
                InteractiveAction::RunAll
            }
            'f' | 'F' => {
                let _ = writeln!(writer, "\n--- Rerunning failed tests only ---");
                InteractiveAction::RunFailedOnly
            }
            'p' | 'P' => {
                let _ = write!(writer, "\nPattern filter: ");
                let _ = writer.flush();
                let mut buf = String::new();
                let mut byte = [0u8; 1];
                while let Ok(1) = reader.read(&mut byte) {
                    if byte[0] == b'\n' || byte[0] == b'\r' {
                        break;
                    }
                    buf.push(byte[0] as char);
                }
                let filter = buf.trim().to_string();
                self.file_filter = if filter.is_empty() {
                    None
                } else {
                    Some(filter.clone())
                };
                InteractiveAction::FilterByFile(filter)
            }
            'g' | 'G' => {
                let _ = write!(writer, "\nGrep filter: ");
                let _ = writer.flush();
                let mut buf = String::new();
                let mut byte = [0u8; 1];
                while let Ok(1) = reader.read(&mut byte) {
                    if byte[0] == b'\n' || byte[0] == b'\r' {
                        break;
                    }
                    buf.push(byte[0] as char);
                }
                let filter = buf.trim().to_string();
                self.grep_filter = if filter.is_empty() {
                    None
                } else {
                    Some(filter.clone())
                };
                InteractiveAction::FilterByGrep(filter)
            }
            'q' | 'Q' => {
                let _ = writeln!(writer, "\nQuitting watch mode...");
                InteractiveAction::Quit
            }
            _ => InteractiveAction::None,
        }
    }
}
