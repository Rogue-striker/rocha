use std::path::Path;
use std::process::Command;

fn run_rocha_with_config(config_json: &str, extra_args: &[&str]) -> std::process::Output {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir.parent().unwrap().parent().unwrap();

    let temp_config = std::env::temp_dir().join(format!(
        "mocharc_parity_{}.json",
        std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .unwrap()
            .as_nanos()
    ));
    std::fs::write(&temp_config, config_json).expect("failed to write temp config");

    let mut cmd = Command::new(rocha_bin);
    cmd.current_dir(workspace_root)
        .arg("--config")
        .arg(&temp_config);

    for arg in extra_args {
        cmd.arg(arg);
    }

    let output = cmd.output().expect("failed to execute rocha");
    let _ = std::fs::remove_file(temp_config);
    output
}

#[test]
fn test_config_option_spec() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"]}"#,
        &[],
    );
    assert!(
        output.status.success(),
        "stderr: {}",
        String::from_utf8_lossy(&output.stderr)
    );
}

#[test]
fn test_config_option_ignore() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "ignore": ["**/simple_pass.js"], "fail-zero": true}"#,
        &[],
    );
    assert_eq!(output.status.code(), Some(1));
}

#[test]
fn test_config_option_extension() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "extension": ["js"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_recursive() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/sub"], "recursive": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_sort() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "sort": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_require() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/test_require.js"], "require": ["./crates/rocha-cli/tests/fixtures/require_helper.cjs"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_import() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/test_import.js"], "import": ["./crates/rocha-cli/tests/fixtures/import_helper.mjs"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_file() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/test_file.js"], "file": ["./crates/rocha-cli/tests/fixtures/setup_file.js"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_grep() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "grep": "passes"}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_fgrep() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "fgrep": "passes simple"}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_invert() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "grep": "nonexistent_string", "invert": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_timeout() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "timeout": 3500}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_slow() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "slow": 120}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_retries() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "retries": 2}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_bail() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "bail": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_forbid_only() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "forbid-only": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_forbid_pending() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "forbid-pending": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_reporter() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "reporter": "json"}"#,
        &[],
    );
    assert!(output.status.success());
    let stdout = String::from_utf8_lossy(&output.stdout);
    assert!(stdout.contains("\"stats\":"));
}

#[test]
fn test_config_option_reporter_option() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "reporter": "json", "reporter-option": ["maxDiffSize=400"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_parallel() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "parallel": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_jobs() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "parallel": true, "jobs": 2}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_exit() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "exit": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_ui() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "ui": "bdd"}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_config() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_diff() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "diff": false}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_color() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "color": false}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_node_option() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/test_node_option.js"], "node-option": ["--trace-warnings"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_watch() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "watch": false}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_watch_files() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "watch-files": ["crates/**"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_watch_ignore() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "watch-ignore": ["target/**"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_allow_uncaught() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "allow-uncaught": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_delay() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "delay": false}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_check_leaks() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "check-leaks": false}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_global() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "global": ["myGlobalVar"]}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_inline_diffs() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "inline-diffs": true}"#,
        &[],
    );
    assert!(output.status.success());
}

#[test]
fn test_config_option_fail_zero() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/nonexistent_file_xyz.js"], "fail-zero": true}"#,
        &[],
    );
    assert_eq!(output.status.code(), Some(1));
}

#[test]
fn test_config_option_dry_run() {
    let output = run_rocha_with_config(
        r#"{"spec": ["crates/rocha-cli/tests/fixtures/simple_pass.js"], "dry-run": true}"#,
        &[],
    );
    assert!(output.status.success());
}
