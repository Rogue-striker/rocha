use std::path::Path;
use std::process::Command;

fn get_workspace_root() -> &'static Path {
    let manifest_dir = Path::new(env!("CARGO_MANIFEST_DIR"));
    manifest_dir.parent().unwrap().parent().unwrap()
}

#[test]
fn test_doctor_diagnostic_snapshot() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--doctor")
        .output()
        .expect("failed to run rocha --doctor");

    assert!(output.status.success(), "rocha --doctor should exit 0");
    let stdout = String::from_utf8_lossy(&output.stdout);

    // Verify key sections from snapshot
    assert!(stdout.contains("Rocha Doctor - Diagnostic Report"));
    assert!(stdout.contains("Node.js:"));
    assert!(stdout.contains("Cache Directory:"));
    assert!(stdout.contains("Config Resolution:"));
    assert!(stdout.contains("Loader Health:"));
    assert!(stdout.contains("All diagnostic checks passed. System is ready to run Mocha suites."));
}

#[test]
fn test_profile_phases_sum_within_5_percent_of_wall_time() {
    let rocha_bin = env!("CARGO_BIN_EXE_rocha");
    let workspace_root = get_workspace_root();

    let output = Command::new(rocha_bin)
        .current_dir(workspace_root)
        .arg("--profile")
        .arg("crates/rocha-cli/tests/fixtures/simple_pass.js")
        .output()
        .expect("failed to run rocha --profile");

    assert!(output.status.success(), "rocha --profile should exit 0");
    let stdout = String::from_utf8_lossy(&output.stdout);

    // Verify profile structure matches snapshot
    assert!(stdout.contains("=== Rocha Execution Profile ==="));
    assert!(stdout.contains("Wall Clock Time:"));
    assert!(stdout.contains("Phase Breakdown:"));
    assert!(stdout.contains("discovery:"));
    assert!(stdout.contains("transform:"));
    assert!(stdout.contains("spawn:"));
    assert!(stdout.contains("load:"));
    assert!(stdout.contains("run:"));
    assert!(stdout.contains("report:"));
    assert!(stdout.contains("Sum of Phases:"));
    assert!(stdout.contains("Top 1 Slowest Files:"));
    assert!(stdout.contains("simple_pass.js"));
    assert!(stdout.contains("==============================="));

    // Parse Wall Clock Time and Sum of Phases to assert within 5%
    let mut wall_ms: Option<f64> = None;
    let mut sum_ms: Option<f64> = None;

    for line in stdout.lines() {
        if line.contains("Wall Clock Time:") {
            if let Some(ms) = parse_duration_ms(line) {
                wall_ms = Some(ms);
            }
        }
        if line.contains("Sum of Phases:") {
            if let Some(ms) = parse_duration_ms(line) {
                sum_ms = Some(ms);
            }
        }
    }

    let wall = wall_ms.expect("failed to parse Wall Clock Time");
    let sum = sum_ms.expect("failed to parse Sum of Phases");

    let diff = (wall - sum).abs();
    let relative_diff = diff / wall;

    assert!(
        relative_diff <= 0.05,
        "phase sum ({:.2}ms) must be within 5% of wall clock time ({:.2}ms), but difference was {:.2}%",
        sum,
        wall,
        relative_diff * 100.0
    );
}

fn parse_duration_ms(line: &str) -> Option<f64> {
    let parts: Vec<&str> = line.split_whitespace().collect();
    for part in parts {
        if part.ends_with("ms") {
            let num = part.trim_end_matches("ms");
            if let Ok(val) = num.parse::<f64>() {
                return Some(val);
            }
        } else if part.ends_with('s') && !part.ends_with("µs") {
            let num = part.trim_end_matches('s');
            if let Ok(val) = num.parse::<f64>() {
                return Some(val * 1000.0);
            }
        }
    }
    None
}
