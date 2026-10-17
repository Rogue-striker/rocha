//! TTY, environment variable, and terminal capability detection matching Mocha.

use std::io::{self, IsTerminal};

/// Platform and terminal symbols for reporters.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ReportSymbols {
    pub ok: &'static str,
    pub err: &'static str,
    pub dot: &'static str,
    pub comma: &'static str,
    pub bang: &'static str,
}

impl Default for ReportSymbols {
    fn default() -> Self {
        Self::detect()
    }
}

impl ReportSymbols {
    /// Modern Unix / UTF-8 symbols.
    pub const UNICODE: Self = Self {
        ok: "✔",
        err: "✖",
        dot: ".",
        comma: ",",
        bang: "!",
    };

    /// Windows legacy console symbols.
    pub const WINDOWS_COMPAT: Self = Self {
        ok: "√",
        err: "×",
        dot: ".",
        comma: ",",
        bang: "!",
    };

    /// Detect symbols based on platform and environment.
    pub fn detect() -> Self {
        Self::resolve(cfg!(target_os = "windows"), true)
    }

    /// Resolve symbols with explicit platform and encoding flags.
    pub fn resolve(is_windows: bool, unicode_supported: bool) -> Self {
        if is_windows && !unicode_supported {
            Self::WINDOWS_COMPAT
        } else {
            Self::UNICODE
        }
    }
}

/// Detect whether ANSI colors should be enabled based on CLI flags, environment, and TTY.
pub fn detect_color_support(cli_color: Option<bool>) -> bool {
    let is_tty = io::stdout().is_terminal();
    resolve_color_support(cli_color, |key| std::env::var(key).ok(), is_tty)
}

/// Determine color support given explicit environment query and TTY status.
///
/// Priority:
/// 1. Explicit CLI argument (`--color` or `--no-color`)
/// 2. `NO_COLOR` environment variable (if non-empty, disables color)
/// 3. `FORCE_COLOR` environment variable:
///    - "0" or "false" disables color
///    - "1", "2", "3", or "true" enables color
/// 4. `MOCHA_COLORS` environment variable (if set, enables color)
/// 5. Standard output `isatty` check
pub fn resolve_color_support<F>(cli_color: Option<bool>, env_get: F, is_tty: bool) -> bool
where
    F: Fn(&str) -> Option<String>,
{
    // 1. Explicit CLI overrides everything
    if let Some(c) = cli_color {
        return c;
    }

    // 2. NO_COLOR specification: any non-empty value disables color
    if let Some(no_col) = env_get("NO_COLOR") {
        if !no_col.is_empty() {
            return false;
        }
    }

    // 3. FORCE_COLOR
    if let Some(force_col) = env_get("FORCE_COLOR") {
        if force_col == "0" || force_col.eq_ignore_ascii_case("false") {
            return false;
        }
        return true;
    }

    // 4. MOCHA_COLORS
    if env_get("MOCHA_COLORS").is_some() {
        return true;
    }

    // 5. Default to TTY status
    is_tty
}

/// Query current terminal column width, falling back to 75 columns if undetectable.
pub fn detect_terminal_width(fallback: usize) -> usize {
    if let Ok(val) = std::env::var("COLUMNS") {
        if let Ok(cols) = val.parse::<usize>() {
            if cols > 0 {
                return cols;
            }
        }
    }
    fallback
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashMap;

    fn make_env(vars: &[(&str, &str)]) -> HashMap<String, String> {
        let mut map = HashMap::new();
        for (k, v) in vars {
            map.insert(k.to_string(), v.to_string());
        }
        map
    }

    #[test]
    fn test_cli_color_flag_takes_highest_precedence() {
        let env = make_env(&[("NO_COLOR", "1"), ("FORCE_COLOR", "0")]);
        let getter = |k: &str| env.get(k).cloned();

        // --color overrides NO_COLOR=1
        assert!(resolve_color_support(Some(true), getter, false));
        assert!(resolve_color_support(Some(true), getter, true));

        // --no-color overrides FORCE_COLOR=1
        let env2 = make_env(&[("FORCE_COLOR", "1")]);
        let getter2 = |k: &str| env2.get(k).cloned();
        assert!(!resolve_color_support(Some(false), getter2, true));
        assert!(!resolve_color_support(Some(false), getter2, false));
    }

    #[test]
    fn test_no_color_env_disables_color() {
        let env = make_env(&[("NO_COLOR", "1")]);
        let getter = |k: &str| env.get(k).cloned();
        assert!(!resolve_color_support(None, getter, true));
        assert!(!resolve_color_support(None, getter, false));

        // Empty NO_COLOR is ignored
        let env_empty = make_env(&[("NO_COLOR", "")]);
        let getter_empty = |k: &str| env_empty.get(k).cloned();
        assert!(resolve_color_support(None, getter_empty, true));
        assert!(!resolve_color_support(None, getter_empty, false));
    }

    #[test]
    fn test_force_color_env() {
        // FORCE_COLOR=1 enables
        let env1 = make_env(&[("FORCE_COLOR", "1")]);
        let getter1 = |k: &str| env1.get(k).cloned();
        assert!(resolve_color_support(None, getter1, false));

        // FORCE_COLOR=true enables
        let env_true = make_env(&[("FORCE_COLOR", "true")]);
        let getter_true = |k: &str| env_true.get(k).cloned();
        assert!(resolve_color_support(None, getter_true, false));

        // FORCE_COLOR=0 disables
        let env0 = make_env(&[("FORCE_COLOR", "0")]);
        let getter0 = |k: &str| env0.get(k).cloned();
        assert!(!resolve_color_support(None, getter0, true));

        // FORCE_COLOR=false disables
        let env_false = make_env(&[("FORCE_COLOR", "false")]);
        let getter_false = |k: &str| env_false.get(k).cloned();
        assert!(!resolve_color_support(None, getter_false, true));
    }

    #[test]
    fn test_mocha_colors_env() {
        let env = make_env(&[("MOCHA_COLORS", "1")]);
        let getter = |k: &str| env.get(k).cloned();
        assert!(resolve_color_support(None, getter, false));
    }

    #[test]
    fn test_tty_fallback_when_no_env() {
        let env = make_env(&[]);
        let getter = |k: &str| env.get(k).cloned();
        assert!(resolve_color_support(None, getter, true));
        assert!(!resolve_color_support(None, getter, false));
    }

    #[test]
    fn test_windows_vs_unix_symbols() {
        let unix_syms = ReportSymbols::resolve(false, true);
        assert_eq!(unix_syms.ok, "✔");
        assert_eq!(unix_syms.err, "✖");

        let win_ascii_syms = ReportSymbols::resolve(true, false);
        assert_eq!(win_ascii_syms.ok, "√");
        assert_eq!(win_ascii_syms.err, "×");

        let win_utf8_syms = ReportSymbols::resolve(true, true);
        assert_eq!(win_utf8_syms.ok, "✔");
        assert_eq!(win_utf8_syms.err, "✖");
    }

    #[test]
    fn test_terminal_width_detection() {
        assert_eq!(detect_terminal_width(80), 80);
    }
}
