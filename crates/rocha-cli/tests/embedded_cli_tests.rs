use std::path::PathBuf;
use std::process::Command;

fn workspace_root() -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .parent()
        .unwrap()
        .to_path_buf()
}

#[test]
fn test_embedded_engine_cli_pure_js_suite() {
    let ws = workspace_root();
    let fixture = ws.join("conformance/fixtures/simple-pass.fixture.js");

    let output = Command::new(env!("CARGO_BIN_EXE_rocha"))
        .current_dir(&ws)
        .args([
            "--engine=embedded",
            "--reporter=min",
            fixture.to_str().unwrap(),
        ])
        .output()
        .expect("Failed to execute rocha CLI");

    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);
    println!("stdout: {}", stdout);
    println!("stderr: {}", stderr);

    assert!(output.status.success(), "Process failed: {}", stderr);
    assert!(stdout.contains("2 passing"));
}

#[test]
fn test_embedded_engine_cli_fallback_to_node() {
    let ws = workspace_root();
    let fixture = ws.join("conformance/fixtures/hooks.fixture.js");

    let output = Command::new(env!("CARGO_BIN_EXE_rocha"))
        .current_dir(&ws)
        .args([
            "--engine=embedded",
            "--reporter=min",
            fixture.to_str().unwrap(),
        ])
        .output()
        .expect("Failed to execute rocha CLI");

    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);
    println!("stdout: {}", stdout);
    println!("stderr: {}", stderr);

    assert!(output.status.success(), "Process failed: {}", stderr);
    assert!(
        stderr.contains("falling back to Node runtime"),
        "Expected fallback message in stderr"
    );
    assert!(stdout.contains("2 passing"));
}
