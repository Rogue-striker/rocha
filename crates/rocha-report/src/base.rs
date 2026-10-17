//! Base reporter utilities, ANSI colors, symbols, diff generation, and epilogue.

use crate::Summary;
use std::io::{self, Write};

/// Configuration options for reporters.
#[derive(Debug, Clone)]
pub struct ReporterOptions {
    /// Enable ANSI colors in output.
    pub use_colors: bool,
    /// Render inline word-level diffs instead of unified line diffs.
    pub inline_diffs: bool,
    /// Maximum character length of diffs before truncating.
    pub max_diff_size: usize,
    /// TAP specification version (12 or 13).
    pub tap_version: String,
    /// Terminal width used for wrapping in dot reporter.
    pub window_width: usize,
}

impl Default for ReporterOptions {
    fn default() -> Self {
        Self {
            use_colors: true,
            inline_diffs: false,
            max_diff_size: 8192,
            tap_version: "12".into(),
            window_width: 75,
        }
    }
}

/// Standard Mocha log symbols.
pub struct Symbols;

impl Symbols {
    pub const OK: &'static str = "✔";
    pub const ERR: &'static str = "✖";
    pub const DOT: &'static str = ".";
    pub const COMMA: &'static str = ",";
    pub const BANG: &'static str = "!";
}

/// ANSI color helper matching Mocha's palette.
pub fn color(name: &str, text: &str, use_colors: bool) -> String {
    if !use_colors {
        return text.to_string();
    }
    let code = match name {
        "pass" | "fast" | "light" | "error stack" | "diff gutter" => "90",
        "fail" | "error message" | "slow" | "diff removed" => "31",
        "bright pass" => "92",
        "bright fail" => "91",
        "bright yellow" => "93",
        "pending" => "36",
        "suite" | "error title" => "0",
        "checkmark" | "green" | "diff added" => "32",
        "medium" => "33",
        "diff added inline" => "30;42",
        "diff removed inline" => "30;41",
        _ => "0",
    };
    format!("\x1b[{}m{}\x1b[0m", code, text)
}

/// Classify test speed relative to slow threshold.
pub fn speed_class(duration_ms: u64, slow_ms: u64) -> &'static str {
    let slow = if slow_ms == 0 { 75 } else { slow_ms };
    if duration_ms >= slow {
        "slow"
    } else if duration_ms >= slow / 2 {
        "medium"
    } else {
        "fast"
    }
}

/// Unified +/- diff generator.
pub fn generate_unified_diff(
    actual: &str,
    expected: &str,
    use_colors: bool,
    max_len: usize,
) -> String {
    let act = if max_len > 0 && actual.len() > max_len {
        &actual[..max_len]
    } else {
        actual
    };
    let exp = if max_len > 0 && expected.len() > max_len {
        &expected[..max_len]
    } else {
        expected
    };

    let mut out = String::new();
    out.push_str("\n      ");
    out.push_str(&color("diff added", "+ expected", use_colors));
    out.push(' ');
    out.push_str(&color("diff removed", "- actual", use_colors));
    out.push_str("\n\n");

    let act_lines: Vec<&str> = act.lines().collect();
    let exp_lines: Vec<&str> = exp.lines().collect();

    // Line diff
    let mut i = 0;
    let mut j = 0;
    while i < act_lines.len() || j < exp_lines.len() {
        if i < act_lines.len() && j < exp_lines.len() && act_lines[i] == exp_lines[j] {
            out.push_str("      ");
            out.push_str(act_lines[i]);
            out.push('\n');
            i += 1;
            j += 1;
        } else {
            if i < act_lines.len() {
                out.push_str("      ");
                let line = format!("-{}", act_lines[i]);
                out.push_str(&color("diff removed", &line, use_colors));
                out.push('\n');
                i += 1;
            }
            if j < exp_lines.len() {
                out.push_str("      ");
                let line = format!("+{}", exp_lines[j]);
                out.push_str(&color("diff added", &line, use_colors));
                out.push('\n');
                j += 1;
            }
        }
    }

    if max_len > 0 && (actual.len() > max_len || expected.len() > max_len) {
        out.push_str(&format!(
            "      [rocha] output truncated to {} characters\n",
            max_len
        ));
    }

    out
}

/// Inline diff generator highlighting changed tokens/words.
pub fn generate_inline_diff(
    actual: &str,
    expected: &str,
    use_colors: bool,
    max_len: usize,
) -> String {
    let act = if max_len > 0 && actual.len() > max_len {
        &actual[..max_len]
    } else {
        actual
    };
    let exp = if max_len > 0 && expected.len() > max_len {
        &expected[..max_len]
    } else {
        expected
    };

    let mut out = String::new();
    out.push_str("\n      ");
    out.push_str(&color("diff removed inline", "actual", use_colors));
    out.push(' ');
    out.push_str(&color("diff added inline", "expected", use_colors));
    out.push_str("\n\n");

    out.push_str("      ");
    out.push_str(&color("diff removed inline", act, use_colors));
    out.push(' ');
    out.push_str(&color("diff added inline", exp, use_colors));
    out.push('\n');

    out
}

/// Format hierarchical title path for failure display.
pub fn format_failure_title(full_title: &str, suite_chain: &[String], title: &str) -> String {
    if suite_chain.is_empty() {
        return full_title.to_string();
    }
    let mut parts = Vec::new();
    for (idx, suite) in suite_chain.iter().enumerate() {
        if idx == 0 {
            parts.push(suite.clone());
        } else {
            let mut indent = String::new();
            for _ in 0..idx {
                indent.push_str("  ");
            }
            parts.push(format!("{}{}", indent, suite));
        }
    }
    let mut test_indent = String::new();
    for _ in 0..suite_chain.len() {
        test_indent.push_str("  ");
    }
    parts.push(format!("{}{}", test_indent, title));
    parts.join("\n     ")
}

/// Print formatted failure details and summary epilogue to the writer.
pub fn write_epilogue<W: Write>(
    w: &mut W,
    summary: &Summary,
    opts: &ReporterOptions,
) -> io::Result<()> {
    writeln!(w)?;

    // Passing count
    if summary.passes > 0 || summary.failures > 0 || summary.pending > 0 {
        let pass_sym = color("bright pass", " ", opts.use_colors);
        let pass_text = color(
            "green",
            &format!(" {} passing", summary.passes),
            opts.use_colors,
        );
        let dur_text = color(
            "light",
            &format!(" ({}ms)", summary.duration_ms),
            opts.use_colors,
        );
        writeln!(w, "{}{}{}", pass_sym, pass_text, dur_text)?;
    }

    // Pending count
    if summary.pending > 0 {
        let pend_sym = color("pending", " ", opts.use_colors);
        let pend_text = color(
            "pending",
            &format!(" {} pending", summary.pending),
            opts.use_colors,
        );
        writeln!(w, "{}{}", pend_sym, pend_text)?;
    }

    // Failures count and list
    if summary.failures > 0 {
        let fail_header = color(
            "fail",
            &format!("  {} failing", summary.failures),
            opts.use_colors,
        );
        writeln!(w, "{}", fail_header)?;
        writeln!(w)?;

        for (i, fail) in summary.failure_details.iter().enumerate() {
            let num = i + 1;
            let title_hdr = format!("  {}) {}:\n", num, fail.full_title);
            write!(w, "{}", color("error title", &title_hdr, opts.use_colors))?;

            // Diff or message
            if fail.error.show_diff
                && (fail.error.actual.is_some() || fail.error.expected.is_some())
            {
                let actual = fail.error.actual.as_deref().unwrap_or("");
                let expected = fail.error.expected.as_deref().unwrap_or("");
                let diff_str = if opts.inline_diffs {
                    generate_inline_diff(actual, expected, opts.use_colors, opts.max_diff_size)
                } else {
                    generate_unified_diff(actual, expected, opts.use_colors, opts.max_diff_size)
                };
                let msg_prefix = format!("     {}\n", fail.error.message);
                write!(
                    w,
                    "{}",
                    color("error message", &msg_prefix, opts.use_colors)
                )?;
                write!(w, "{}", diff_str)?;
            } else if !fail.error.message.is_empty() {
                let msg_line = format!("     {}\n", fail.error.message);
                write!(w, "{}", color("error message", &msg_line, opts.use_colors))?;
            }

            // Stack trace
            if let Some(ref stack) = fail.error.stack {
                let mut indented_stack = String::new();
                for line in stack.lines() {
                    indented_stack.push_str("  ");
                    indented_stack.push_str(line);
                    indented_stack.push('\n');
                }
                writeln!(
                    w,
                    "{}",
                    color("error stack", &indented_stack, opts.use_colors)
                )?;
            } else {
                writeln!(w)?;
            }
        }
    }

    writeln!(w)?;
    w.flush()
}
