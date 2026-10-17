use std::path::Path;
use std::process::Command;

fn get_workspace_root() -> &'static Path {
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    manifest_dir.parent().unwrap().parent().unwrap()
}

#[test]
fn test_require_flag() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--reporter=json")
        .arg("-r")
        .arg("./crates/rocha-cli/tests/fixtures/require_helper.cjs")
        .arg("crates/rocha-cli/tests/fixtures/test_require.js")
        .output()
        .expect("failed to run rocha with --require");

    assert!(
        output.status.success(),
        "stdout: {}\nstderr: {}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
}

#[test]
fn test_import_flag() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--reporter=json")
        .arg("--import")
        .arg("./crates/rocha-cli/tests/fixtures/import_helper.mjs")
        .arg("crates/rocha-cli/tests/fixtures/test_import.js")
        .output()
        .expect("failed to run rocha with --import");

    assert!(
        output.status.success(),
        "stdout: {}\nstderr: {}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
}

#[test]
fn test_file_flag() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--reporter=json")
        .arg("--file")
        .arg("crates/rocha-cli/tests/fixtures/setup_file.js")
        .arg("crates/rocha-cli/tests/fixtures/test_file.js")
        .output()
        .expect("failed to run rocha with --file");

    assert!(
        output.status.success(),
        "stdout: {}\nstderr: {}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
}

#[test]
fn test_node_option_flag() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--reporter=json")
        .arg("-n")
        .arg("--trace-warnings")
        .arg("crates/rocha-cli/tests/fixtures/test_node_option.js")
        .output()
        .expect("failed to run rocha with --node-option");

    assert!(
        output.status.success(),
        "stdout: {}\nstderr: {}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
}

#[test]
fn test_loader_flag() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--reporter=json")
        .arg("--loader")
        .arg("./crates/rocha-cli/tests/fixtures/dummy_loader.mjs")
        .arg("crates/rocha-cli/tests/fixtures/test_loader.js")
        .output()
        .expect("failed to run rocha with --loader");

    assert!(
        output.status.success(),
        "stdout: {}\nstderr: {}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
}
