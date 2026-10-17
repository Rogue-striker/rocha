use std::path::Path;
use std::process::Command;

fn get_workspace_root() -> &'static Path {
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    manifest_dir.parent().unwrap().parent().unwrap()
}

fn read_snapshot(name: &str) -> String {
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    let snap_path = manifest_dir.join("tests").join("snapshots").join(name);
    std::fs::read_to_string(snap_path)
        .expect("failed to read snapshot file")
        .trim()
        .to_string()
}

#[test]
fn test_error_no_specs_matched() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("nonexistent_spec_xyz.js")
        .output()
        .expect("failed to execute rocha");

    assert_eq!(output.status.code(), Some(1), "exit code should be 1");
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    let expected = read_snapshot("no_specs_matched.snap");
    assert_eq!(stderr, expected);
}

#[test]
fn test_error_bad_config() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--config")
        .arg("crates/rocha-cli/tests/fixtures/bad_config.json")
        .output()
        .expect("failed to execute rocha");

    assert_eq!(output.status.code(), Some(1), "exit code should be 1");
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    let expected_prefix = read_snapshot("bad_config.snap");
    assert!(
        stderr.contains(&expected_prefix),
        "stderr '{}' should contain '{}'",
        stderr,
        expected_prefix
    );
}

#[test]
fn test_error_node_not_found() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .env("ROCHA_NODE_PATH", "/nonexistent/path/to/node")
        .arg("crates/rocha-cli/tests/fixtures/simple_pass.js")
        .output()
        .expect("failed to execute rocha");

    assert_eq!(output.status.code(), Some(1), "exit code should be 1");
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    let expected = read_snapshot("node_not_found.snap");
    assert_eq!(stderr, expected);
}

#[test]
fn test_error_node_version_too_old() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let mock_node = workspace_root.join("crates/rocha-cli/tests/fixtures/mock_old_node.sh");

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .env("ROCHA_NODE_PATH", &mock_node)
        .arg("crates/rocha-cli/tests/fixtures/simple_pass.js")
        .output()
        .expect("failed to execute rocha");

    assert_eq!(output.status.code(), Some(1), "exit code should be 1");
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    let expected = read_snapshot("node_version_too_old.snap");
    assert_eq!(stderr, expected);
}

#[test]
fn test_error_loader_failure() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--loader")
        .arg("./nonexistent_loader.mjs")
        .arg("crates/rocha-cli/tests/fixtures/simple_pass.js")
        .output()
        .expect("failed to execute rocha");

    assert_eq!(output.status.code(), Some(1), "exit code should be 1");
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    let expected = read_snapshot("loader_failure.snap");
    assert_eq!(stderr, expected);
}

#[test]
fn test_error_protocol_mismatch() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let mock_worker = workspace_root.join("crates/rocha-cli/tests/fixtures/mock_bad_worker.js");

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .env("ROCHA_HARNESS_WORKER_PATH", &mock_worker)
        .arg("crates/rocha-cli/tests/fixtures/simple_pass.js")
        .output()
        .expect("failed to execute rocha");

    assert_eq!(output.status.code(), Some(1), "exit code should be 1");
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    let expected_prefix = read_snapshot("protocol_mismatch.snap");
    assert!(
        stderr.contains(&expected_prefix),
        "stderr '{}' should contain '{}'",
        stderr,
        expected_prefix
    );
}
