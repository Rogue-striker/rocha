use std::path::Path;
use std::process::Command;

#[test]
fn test_compat_mocha_runs_small_suite() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir.parent().unwrap().parent().unwrap();

    let status = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--compat-mocha")
        .arg("--reporter=min")
        .arg("bench/suites/small/test_000.js")
        .status()
        .expect("failed to execute rocha --compat-mocha");

    assert!(status.success(), "rocha --compat-mocha should exit 0");
}

#[test]
fn test_compat_mocha_runs_ts_file() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir.parent().unwrap().parent().unwrap();

    let status = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--compat-mocha")
        .arg("--reporter=min")
        .arg("bench/suites/large-ts/test_0000.ts")
        .status()
        .expect("failed to execute rocha --compat-mocha on TS file");

    assert!(
        status.success(),
        "rocha --compat-mocha on TS file should exit 0"
    );
}
