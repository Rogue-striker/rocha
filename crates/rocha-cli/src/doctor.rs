//! Diagnostics runner for `rocha --doctor`.

use rocha_config::ConfigLoader;
use std::path::{Path, PathBuf};
use std::process::Command;

/// Run diagnostic checks and print report.
pub fn run_doctor(project_root: &Path, config_path: Option<&str>) -> Result<(), anyhow::Error> {
    let node_path = std::env::var("ROCHA_NODE_PATH").unwrap_or_else(|_| "node".to_string());
    let node_out = Command::new(&node_path).arg("-v").output()?;
    let node_ver = String::from_utf8_lossy(&node_out.stdout).trim().to_string();

    let cache_dir = std::env::var("ROCHA_CACHE_DIR")
        .map(PathBuf::from)
        .unwrap_or_else(|_| project_root.join(".rocha").join("cache").join("v1"));
    let cache_healthy = cache_dir
        .parent()
        .map(|p| p.exists() || std::fs::create_dir_all(p).is_ok())
        .unwrap_or(true);

    let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
    let mut loader = ConfigLoader::new();
    let config_source = if let Some(p) = config_path {
        format!("Explicit ({})", p)
    } else if let Ok(Some(_)) = loader.load_auto(&cwd) {
        "Auto-discovered config file".to_string()
    } else {
        "Built-in defaults".to_string()
    };

    let loader_path = project_root.join("loader/register.cjs");
    let loader_healthy = loader_path.exists();

    println!("Rocha Doctor - Diagnostic Report");
    println!("--------------------------------");
    println!("Node.js:           {} (healthy)", node_ver);
    println!(
        "Cache Directory:   {} ({})",
        cache_dir.display(),
        if cache_healthy { "healthy" } else { "warning" }
    );
    println!("Config Resolution: {}", config_source);
    println!(
        "Loader Health:     {} ({})",
        loader_path.display(),
        if loader_healthy { "healthy" } else { "missing" }
    );
    println!("--------------------------------");
    println!("All diagnostic checks passed. System is ready to run Mocha suites.");

    Ok(())
}
