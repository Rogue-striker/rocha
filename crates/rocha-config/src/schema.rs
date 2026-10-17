//! Rocha configuration schema and options parity with Mocha.

use serde::{Deserialize, Serialize};

/// Rocha test runner configuration.
///
/// Mirrors Mocha configuration options with strict precedence:
/// CLI args > environment variables > `.mocharc.*` > `package.json#mocha` > defaults.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case", default)]
pub struct Config {
    /// Files, directories, or globs to execute as test suites.
    pub spec: Vec<String>,

    /// File paths or globs to ignore during discovery.
    pub ignore: Vec<String>,

    /// File extensions to consider during directory traversal.
    pub extension: Vec<String>,

    /// Look for tests in subdirectories recursively.
    pub recursive: bool,

    /// Sort test files alphabetically before execution.
    pub sort: bool,

    /// Modules to require prior to running tests (CommonJS).
    pub require: Vec<String>,

    /// Modules to import prior to running tests (ESM).
    pub import: Vec<String>,

    /// Explicit files to include before any suite files.
    pub file: Vec<String>,

    /// Custom Node.js ESM loader(s) to register.
    pub loader: Vec<String>,

    /// Trigger only tests matching this regular expression.
    pub grep: Option<String>,

    /// Trigger only tests containing this literal string.
    pub fgrep: Option<String>,

    /// Inverts `--grep` and `--fgrep` matches.
    pub invert: bool,

    /// Test-case timeout cap in milliseconds (0 disables timeouts).
    pub timeout: u64,

    /// "Slow" test threshold in milliseconds.
    pub slow: u64,

    /// Number of times to retry failed tests.
    pub retries: u32,

    /// Abort execution promptly upon first test failure.
    pub bail: bool,

    /// Causes tests marked with `.only` to fail the run.
    pub forbid_only: bool,

    /// Causes pending/skipped tests to fail the run.
    pub forbid_pending: bool,

    /// Reporter name to use for formatting output.
    pub reporter: String,

    /// Key-value options passed to the active reporter.
    pub reporter_option: Vec<String>,

    /// Run test suites in parallel worker processes.
    pub parallel: bool,

    /// Maximum number of worker processes to run concurrently.
    pub jobs: usize,

    /// Force worker process termination upon run completion.
    pub exit: bool,

    /// User interface style ("bdd", "tdd", "qunit").
    pub ui: String,

    /// Explicit path to a config file.
    pub config: Option<String>,

    /// Show diffs for assertion failures.
    pub diff: bool,

    /// Force enabling/disabling colorized TTY output.
    pub color: Option<bool>,

    /// Custom Node.js runtime flags passed to workers.
    pub node_option: Vec<String>,

    /// Watch files in the test directory for changes.
    pub watch: bool,

    /// Additional files/globs to monitor in watch mode.
    pub watch_files: Vec<String>,

    /// Globs to ignore in watch mode.
    pub watch_ignore: Vec<String>,

    /// Do not catch uncaught exceptions and let them bubble.
    pub allow_uncaught: bool,

    /// Wait for explicit `run()` invocation before executing.
    pub delay: bool,

    /// Check for unintended global variable leaks.
    pub check_leaks: bool,

    /// Whitelist of expected global variables.
    pub global: Vec<String>,

    /// Display actual and expected diffs inline.
    pub inline_diffs: bool,

    /// Fail test run if zero tests were executed.
    pub fail_zero: bool,

    /// Scan and display tests without executing test bodies.
    pub dry_run: bool,

    /// Execution engine: "node" or "embedded".
    pub engine: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            spec: vec!["test/**/*.js".into()],
            ignore: Vec::new(),
            extension: vec![
                "js".into(),
                "cjs".into(),
                "mjs".into(),
                "ts".into(),
                "tsx".into(),
                "jsx".into(),
            ],
            recursive: false,
            sort: false,
            require: Vec::new(),
            import: Vec::new(),
            file: Vec::new(),
            loader: Vec::new(),
            grep: None,
            fgrep: None,
            invert: false,
            timeout: 2000,
            slow: 75,
            retries: 0,
            bail: false,
            forbid_only: false,
            forbid_pending: false,
            reporter: "spec".into(),
            reporter_option: Vec::new(),
            parallel: false,
            jobs: 1,
            exit: false,
            ui: "bdd".into(),
            config: None,
            diff: true,
            color: None,
            node_option: Vec::new(),
            watch: false,
            watch_files: Vec::new(),
            watch_ignore: vec!["node_modules".into(), ".git".into()],
            allow_uncaught: false,
            delay: false,
            check_leaks: false,
            global: Vec::new(),
            inline_diffs: false,
            fail_zero: false,
            dry_run: false,
            engine: "node".into(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_default_config_matches_mocha_spec() {
        let config = Config::default();
        assert_eq!(config.timeout, 2000);
        assert_eq!(config.slow, 75);
        assert_eq!(config.reporter, "spec");
        assert_eq!(config.ui, "bdd");
        assert!(config.diff);
        assert!(!config.bail);
        assert!(!config.parallel);
        assert_eq!(config.jobs, 1);
        assert_eq!(config.retries, 0);
        assert!(!config.forbid_only);
        assert!(!config.forbid_pending);
        assert!(!config.dry_run);
        assert!(!config.fail_zero);
        assert_eq!(config.watch_ignore, vec!["node_modules", ".git"]);
    }

    #[test]
    fn test_json_deserialization_defaults() {
        let json_str = r#"{
            "timeout": 5000,
            "bail": true,
            "reporter": "json"
        }"#;

        let config: Config = serde_json::from_str(json_str).unwrap();
        assert_eq!(config.timeout, 5000);
        assert!(config.bail);
        assert_eq!(config.reporter, "json");
        // Inherits defaults for unspecified fields
        assert_eq!(config.ui, "bdd");
        assert_eq!(config.slow, 75);
        assert_eq!(config.jobs, 1);
    }
}
