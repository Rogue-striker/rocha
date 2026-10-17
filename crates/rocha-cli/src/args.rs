//! Command-line argument definitions and parsing for Rocha.

use clap::{ArgAction, Parser};
use rocha_config::ConfigOverrides;

/// Rocha - A fast, native test orchestrator for Mocha-style test suites.
#[derive(Parser, Debug, Clone, PartialEq, Eq)]
#[command(
    name = "rocha",
    version = env!("CARGO_PKG_VERSION"),
    about = "A fast native test orchestrator for Mocha-style test suites",
    after_help = "For more documentation, visit https://github.com/rocha-runner/rocha"
)]
pub struct CliArgs {
    /// Positional test file specs, directories, or globs to execute.
    #[arg(value_name = "SPEC")]
    pub specs: Vec<String>,

    /// Explicit test spec pattern(s).
    #[arg(long = "spec", value_name = "SPEC", action = ArgAction::Append)]
    pub explicit_specs: Vec<String>,

    /// Require module prior to running tests (CJS).
    #[arg(short = 'r', long = "require", value_name = "MODULE", action = ArgAction::Append)]
    pub require: Vec<String>,

    /// Import module prior to running tests (ESM).
    #[arg(long = "import", value_name = "MODULE", action = ArgAction::Append)]
    pub import: Vec<String>,

    /// Include a file to run first.
    #[arg(long = "file", value_name = "PATH", action = ArgAction::Append)]
    pub file: Vec<String>,

    /// Register custom ESM loader.
    #[arg(long = "loader", value_name = "MODULE", action = ArgAction::Append)]
    pub loader: Vec<String>,

    /// Trigger only tests matching pattern.
    #[arg(short = 'g', long = "grep", value_name = "PATTERN")]
    pub grep: Option<String>,

    /// Trigger only tests containing string.
    #[arg(short = 'f', long = "fgrep", value_name = "STRING")]
    pub fgrep: Option<String>,

    /// Invert --grep and --fgrep matches.
    #[arg(short = 'i', long = "invert")]
    pub invert: bool,

    /// Set test-case timeout in milliseconds.
    #[arg(short = 't', long = "timeout", value_name = "MS")]
    pub timeout: Option<u64>,

    /// "Slow" test threshold in milliseconds.
    #[arg(short = 's', long = "slow", value_name = "MS")]
    pub slow: Option<u64>,

    /// Number of times to retry failed tests.
    #[arg(long = "retries", value_name = "COUNT")]
    pub retries: Option<u32>,

    /// Abort test run after first test failure.
    #[arg(short = 'b', long = "bail")]
    pub bail: bool,

    /// Fail if any tests are marked .only.
    #[arg(long = "forbid-only")]
    pub forbid_only: bool,

    /// Fail if any tests are skipped or pending.
    #[arg(long = "forbid-pending")]
    pub forbid_pending: bool,

    /// Specify reporter to use.
    #[arg(short = 'R', long = "reporter", value_name = "NAME")]
    pub reporter: Option<String>,

    /// Reporter-specific options.
    #[arg(short = 'O', long = "reporter-option", value_name = "OPTION", action = ArgAction::Append, allow_hyphen_values = true)]
    pub reporter_option: Vec<String>,

    /// Run tests in parallel.
    #[arg(short = 'p', long = "parallel")]
    pub parallel: bool,

    /// Number of concurrent worker processes.
    #[arg(short = 'j', long = "jobs", value_name = "COUNT")]
    pub jobs: Option<usize>,

    /// Force process exit when tests finish.
    #[arg(long = "exit")]
    pub exit: bool,

    /// Specify user interface style (bdd, tdd, qunit).
    #[arg(short = 'u', long = "ui", value_name = "NAME")]
    pub ui: Option<String>,

    /// Path to config file.
    #[arg(short = 'c', long = "config", value_name = "PATH")]
    pub config: Option<String>,

    /// Show diff on assertion failure.
    #[arg(long = "diff", overrides_with = "no_diff")]
    pub diff: bool,

    /// Do not show diff on assertion failure.
    #[arg(long = "no-diff", overrides_with = "diff")]
    pub no_diff: bool,

    /// Force colorized output.
    #[arg(long = "color", overrides_with = "no_color")]
    pub color: bool,

    /// Force disable colorized output.
    #[arg(short = 'C', long = "no-color", overrides_with = "color")]
    pub no_color: bool,

    /// Node runtime arguments passed to workers.
    #[arg(short = 'n', long = "node-option", value_name = "OPT", action = ArgAction::Append, allow_hyphen_values = true)]
    pub node_option: Vec<String>,

    /// Watch files in the test directory for changes.
    #[arg(short = 'w', long = "watch")]
    pub watch: bool,

    /// Additional paths or globs to watch.
    #[arg(long = "watch-files", value_name = "FILES", action = ArgAction::Append)]
    pub watch_files: Vec<String>,

    /// Paths or globs to ignore in watch mode.
    #[arg(long = "watch-ignore", value_name = "IGNORE", action = ArgAction::Append)]
    pub watch_ignore: Vec<String>,

    /// File extensions to evaluate as tests.
    #[arg(long = "extension", value_name = "EXT", action = ArgAction::Append)]
    pub extension: Vec<String>,

    /// Look for tests in subdirectories.
    #[arg(long = "recursive")]
    pub recursive: bool,

    /// Sort test files alphabetically.
    #[arg(short = 'S', long = "sort")]
    pub sort: bool,

    /// Path(s) or glob(s) to ignore.
    #[arg(long = "ignore", value_name = "PATTERN", action = ArgAction::Append)]
    pub ignore: Vec<String>,

    /// Do not catch uncaught exceptions.
    #[arg(long = "allow-uncaught")]
    pub allow_uncaught: bool,

    /// Wait for explicit run() call before running.
    #[arg(long = "delay")]
    pub delay: bool,

    /// Check for unintended global variable leaks.
    #[arg(long = "check-leaks")]
    pub check_leaks: bool,

    /// Allowed global variable names.
    #[arg(long = "global", value_name = "NAME", action = ArgAction::Append)]
    pub global: Vec<String>,

    /// Display actual and expected diffs inline.
    #[arg(long = "inline-diffs")]
    pub inline_diffs: bool,

    /// Exit with error status if zero tests executed.
    #[arg(long = "fail-zero")]
    pub fail_zero: bool,

    /// Scan and display tests without executing bodies.
    #[arg(long = "dry-run")]
    pub dry_run: bool,

    /// Diagnostic check of Node runtime and cache health.
    #[arg(long = "doctor")]
    pub doctor: bool,

    /// Profile test execution breakdown and phases.
    #[arg(long = "profile")]
    pub profile: bool,

    /// Fallback compatibility mode running stock Mocha with native discovery and loader.
    #[arg(long = "compat-mocha")]
    pub compat_mocha: bool,

    /// Worker process isolation strategy ("file" or "none").
    #[arg(long = "isolate", value_name = "MODE")]
    pub isolate: Option<String>,

    /// Execution engine: "node" (default) or "embedded" (experimental in-process JS engine).
    #[arg(long = "engine", default_value = "node")]
    pub engine: String,

    /// Deterministic test file sharding (e.g. "1/4").
    #[arg(long = "shard", value_name = "SHARD")]
    pub shard: Option<String>,

    /// Internal / helper: transform a file and write to disk cache.
    #[arg(long = "transform", value_name = "FILE", hide = true)]
    pub transform: Option<String>,
}

impl CliArgs {
    /// Convert parsed command line arguments into config overrides.
    pub fn to_config_overrides(&self) -> ConfigOverrides {
        let mut specs = self.specs.clone();
        specs.extend(self.explicit_specs.clone());

        let color = if self.no_color {
            Some(false)
        } else if self.color {
            Some(true)
        } else {
            None
        };

        ConfigOverrides {
            spec: if specs.is_empty() { None } else { Some(specs) },
            timeout: self.timeout,
            slow: self.slow,
            bail: if self.bail { Some(true) } else { None },
            parallel: if self.parallel { Some(true) } else { None },
            jobs: self.jobs,
            reporter: self.reporter.clone(),
            ui: self.ui.clone(),
            grep: self.grep.clone(),
            fgrep: self.fgrep.clone(),
            invert: if self.invert { Some(true) } else { None },
            retries: self.retries,
            color,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use clap::CommandFactory;

    fn parse_args<I, T>(args: I) -> Result<CliArgs, clap::Error>
    where
        I: IntoIterator<Item = T>,
        T: Into<std::ffi::OsString> + Clone,
    {
        CliArgs::try_parse_from(
            std::iter::once("rocha".into()).chain(args.into_iter().map(Into::into)),
        )
    }

    #[test]
    fn test_01_empty_args() {
        let args = parse_args(Vec::<&str>::new()).unwrap();
        assert!(args.specs.is_empty());
        assert!(!args.bail);
        assert!(!args.parallel);
    }

    #[test]
    fn test_02_single_positional_spec() {
        let args = parse_args(["test/unit.js"]).unwrap();
        assert_eq!(args.specs, vec!["test/unit.js"]);
    }

    #[test]
    fn test_03_multiple_positional_specs() {
        let args = parse_args(["test/a.js", "test/b.js", "test/c.js"]).unwrap();
        assert_eq!(args.specs, vec!["test/a.js", "test/b.js", "test/c.js"]);
    }

    #[test]
    fn test_04_positional_specs_after_double_dash() {
        let args = parse_args(["--timeout", "1000", "--", "test/after_dash.js"]).unwrap();
        assert_eq!(args.timeout, Some(1000));
        assert_eq!(args.specs, vec!["test/after_dash.js"]);
    }

    #[test]
    fn test_05_explicit_spec_flags() {
        let args = parse_args(["--spec", "test/1.js", "--spec", "test/2.js"]).unwrap();
        assert_eq!(args.explicit_specs, vec!["test/1.js", "test/2.js"]);
        let overrides = args.to_config_overrides();
        assert_eq!(
            overrides.spec,
            Some(vec!["test/1.js".into(), "test/2.js".into()])
        );
    }

    #[test]
    fn test_06_grep_short_and_long() {
        let args1 = parse_args(["-g", "^auth"]).unwrap();
        assert_eq!(args1.grep.as_deref(), Some("^auth"));

        let args2 = parse_args(["--grep", "payment"]).unwrap();
        assert_eq!(args2.grep.as_deref(), Some("payment"));
    }

    #[test]
    fn test_07_fgrep() {
        let args = parse_args(["-f", "exact string match"]).unwrap();
        assert_eq!(args.fgrep.as_deref(), Some("exact string match"));
    }

    #[test]
    fn test_08_invert_short_and_long() {
        let args1 = parse_args(["-i"]).unwrap();
        assert!(args1.invert);

        let args2 = parse_args(["--invert"]).unwrap();
        assert!(args2.invert);
    }

    #[test]
    fn test_09_timeout_short_and_long() {
        let args1 = parse_args(["-t", "5000"]).unwrap();
        assert_eq!(args1.timeout, Some(5000));

        let args2 = parse_args(["--timeout", "2500"]).unwrap();
        assert_eq!(args2.timeout, Some(2500));
    }

    #[test]
    fn test_10_slow_short_and_long() {
        let args1 = parse_args(["-s", "200"]).unwrap();
        assert_eq!(args1.slow, Some(200));

        let args2 = parse_args(["--slow", "150"]).unwrap();
        assert_eq!(args2.slow, Some(150));
    }

    #[test]
    fn test_11_bail_short_and_long() {
        let args1 = parse_args(["-b"]).unwrap();
        assert!(args1.bail);

        let args2 = parse_args(["--bail"]).unwrap();
        assert!(args2.bail);
    }

    #[test]
    fn test_12_retries() {
        let args = parse_args(["--retries", "3"]).unwrap();
        assert_eq!(args.retries, Some(3));
    }

    #[test]
    fn test_13_forbid_only_and_forbid_pending() {
        let args = parse_args(["--forbid-only", "--forbid-pending"]).unwrap();
        assert!(args.forbid_only);
        assert!(args.forbid_pending);
    }

    #[test]
    fn test_14_reporter_short_and_long() {
        let args1 = parse_args(["-R", "json"]).unwrap();
        assert_eq!(args1.reporter.as_deref(), Some("json"));

        let args2 = parse_args(["--reporter", "tap"]).unwrap();
        assert_eq!(args2.reporter.as_deref(), Some("tap"));
    }

    #[test]
    fn test_15_reporter_option_repeated() {
        let args = parse_args(["-O", "maxDiffSize=1000", "-O", "output=res.json"]).unwrap();
        assert_eq!(
            args.reporter_option,
            vec!["maxDiffSize=1000", "output=res.json"]
        );
    }

    #[test]
    fn test_16_parallel_short_and_long() {
        let args1 = parse_args(["-p"]).unwrap();
        assert!(args1.parallel);

        let args2 = parse_args(["--parallel"]).unwrap();
        assert!(args2.parallel);
    }

    #[test]
    fn test_17_jobs_short_and_long() {
        let args1 = parse_args(["-j", "4"]).unwrap();
        assert_eq!(args1.jobs, Some(4));

        let args2 = parse_args(["--jobs", "8"]).unwrap();
        assert_eq!(args2.jobs, Some(8));
    }

    #[test]
    fn test_18_exit_flag() {
        let args = parse_args(["--exit"]).unwrap();
        assert!(args.exit);
    }

    #[test]
    fn test_19_ui_short_and_long() {
        let args1 = parse_args(["-u", "tdd"]).unwrap();
        assert_eq!(args1.ui.as_deref(), Some("tdd"));

        let args2 = parse_args(["--ui", "qunit"]).unwrap();
        assert_eq!(args2.ui.as_deref(), Some("qunit"));
    }

    #[test]
    fn test_20_config_short_and_long() {
        let args1 = parse_args(["-c", ".mocharc.json"]).unwrap();
        assert_eq!(args1.config.as_deref(), Some(".mocharc.json"));

        let args2 = parse_args(["--config", "custom/mocha.yml"]).unwrap();
        assert_eq!(args2.config.as_deref(), Some("custom/mocha.yml"));
    }

    #[test]
    fn test_21_diff_and_no_diff() {
        let args1 = parse_args(["--diff"]).unwrap();
        assert!(args1.diff);
        assert!(!args1.no_diff);

        let args2 = parse_args(["--no-diff"]).unwrap();
        assert!(args2.no_diff);
    }

    #[test]
    fn test_22_color_and_no_color() {
        let args1 = parse_args(["--color"]).unwrap();
        assert!(args1.color);

        let args2 = parse_args(["-C"]).unwrap();
        assert!(args2.no_color);
    }

    #[test]
    fn test_23_require_repeated() {
        let args = parse_args(["-r", "tsx", "-r", "dotenv/config"]).unwrap();
        assert_eq!(args.require, vec!["tsx", "dotenv/config"]);
    }

    #[test]
    fn test_24_import_repeated() {
        let args = parse_args(["--import", "tsx", "--import", "tracing"]).unwrap();
        assert_eq!(args.import, vec!["tsx", "tracing"]);
    }

    #[test]
    fn test_25_file_repeated() {
        let args = parse_args(["--file", "setup.js", "--file", "env.js"]).unwrap();
        assert_eq!(args.file, vec!["setup.js", "env.js"]);
    }

    #[test]
    fn test_25b_loader_repeated() {
        let args = parse_args(["--loader", "ts-node/esm", "--loader", "./custom.mjs"]).unwrap();
        assert_eq!(args.loader, vec!["ts-node/esm", "./custom.mjs"]);
    }

    #[test]
    fn test_26_node_option_repeated() {
        let args =
            parse_args(["-n", "--trace-warnings", "-n", "--max-old-space-size=4096"]).unwrap();
        assert_eq!(
            args.node_option,
            vec!["--trace-warnings", "--max-old-space-size=4096"]
        );
    }

    #[test]
    fn test_27_watch_and_watch_options() {
        let args = parse_args([
            "-w",
            "--watch-files",
            "src/**/*.ts",
            "--watch-ignore",
            "dist/**",
        ])
        .unwrap();
        assert!(args.watch);
        assert_eq!(args.watch_files, vec!["src/**/*.ts"]);
        assert_eq!(args.watch_ignore, vec!["dist/**"]);
    }

    #[test]
    fn test_28_extension_and_recursive() {
        let args = parse_args(["--recursive", "--extension", "ts", "--extension", "tsx"]).unwrap();
        assert!(args.recursive);
        assert_eq!(args.extension, vec!["ts", "tsx"]);
    }

    #[test]
    fn test_29_sort_and_ignore() {
        let args = parse_args(["-S", "--ignore", "test/slow/**"]).unwrap();
        assert!(args.sort);
        assert_eq!(args.ignore, vec!["test/slow/**"]);
    }

    #[test]
    fn test_30_misc_flags() {
        let args = parse_args([
            "--allow-uncaught",
            "--delay",
            "--check-leaks",
            "--global",
            "appVar",
            "--inline-diffs",
            "--fail-zero",
            "--dry-run",
            "--doctor",
            "--profile",
            "--compat-mocha",
            "--isolate",
            "file",
            "--shard",
            "1/4",
        ])
        .unwrap();

        assert!(args.allow_uncaught);
        assert!(args.delay);
        assert!(args.check_leaks);
        assert_eq!(args.global, vec!["appVar"]);
        assert!(args.inline_diffs);
        assert!(args.fail_zero);
        assert!(args.dry_run);
        assert!(args.doctor);
        assert!(args.profile);
        assert!(args.compat_mocha);
        assert_eq!(args.isolate.as_deref(), Some("file"));
        assert_eq!(args.shard.as_deref(), Some("1/4"));
    }

    #[test]
    fn test_31_unknown_flag_error() {
        let err = parse_args(["--unknown-random-flag"]).unwrap_err();
        let err_str = err.to_string();
        assert!(
            err_str.contains("unexpected argument '--unknown-random-flag'")
                || err_str.contains("error:")
        );
    }

    #[test]
    fn test_32_help_snapshot() {
        let mut cmd = CliArgs::command();
        let mut help_bytes = Vec::new();
        cmd.write_help(&mut help_bytes).unwrap();
        let help_text = String::from_utf8(help_bytes).unwrap();

        assert!(help_text.contains("Usage:"));
        assert!(help_text.contains("--timeout"));
        assert!(help_text.contains("--reporter"));
        assert!(help_text.contains("--parallel"));
        assert!(help_text.contains("--bail"));
    }
}
