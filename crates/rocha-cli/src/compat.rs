//! Stock Mocha compatibility runner (`rocha --compat-mocha`).

use anyhow::Context;
use rayon::prelude::*;
use rocha_config::{resolve_config, ConfigLoader};
use rocha_discover::{discover_files, DiscoveryOptions};
use rocha_transform::{
    transform_file_and_cache, DiskCache, Options as TransformOptions, DEFAULT_MAX_CACHE_BYTES,
};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::{Command, ExitStatus};

/// Execute test suite by launching stock Mocha with native discovery and rocha-loader.
pub fn run_compat_mocha(args: &crate::CliArgs) -> anyhow::Result<ExitStatus> {
    let cwd = std::env::current_dir().context("Failed to get current directory")?;
    let mut loader = ConfigLoader::new();
    let file_val = loader.load_auto(&cwd).ok().flatten();

    let env_vars: HashMap<String, String> = std::env::vars().collect();
    let overrides = args.to_config_overrides();
    let config = resolve_config(file_val, &env_vars, Some(overrides))
        .context("Failed to load and resolve configuration")?;

    // 1. Resolve specs & discovery options
    let specs = if !args.specs.is_empty() {
        args.specs.clone()
    } else if !config.spec.is_empty() {
        config.spec.clone()
    } else {
        vec!["test/**/*.js".to_string(), "test/**/*.ts".to_string()]
    };

    let extensions = if !config.extension.is_empty() {
        config.extension.clone()
    } else {
        vec![
            "js".into(),
            "cjs".into(),
            "mjs".into(),
            "ts".into(),
            "tsx".into(),
            "mts".into(),
            "cts".into(),
        ]
    };

    let disc_opts = DiscoveryOptions {
        specs: specs.clone(),
        extensions,
        recursive: config.recursive,
        ignore: config.ignore.clone(),
        sort: config.sort,
        root_dir: cwd.clone(),
    };

    let discovered_files = discover_files(&disc_opts).context("Native file discovery failed")?;

    if discovered_files.is_empty() {
        eprintln!("No test files found matching specs: {:?}", specs);
        return Command::new("true").status().map_err(Into::into);
    }

    // 2. Parallel pre-caching of TypeScript/JSX files using rayon + oxc
    let project_root = std::env::var("ROCHA_PROJECT_ROOT")
        .map(PathBuf::from)
        .unwrap_or_else(|_| cwd.clone());
    let rocha_dir = project_root.join(".rocha");
    let cache_dir = std::env::var("ROCHA_CACHE_DIR")
        .map(PathBuf::from)
        .unwrap_or_else(|_| rocha_dir.join("cache").join("v1"));

    let node_class = std::env::var("ROCHA_NODE_CLASS").unwrap_or_else(|_| {
        if let Ok(output) = Command::new("node").arg("-v").output() {
            let ver = String::from_utf8_lossy(&output.stdout);
            if let Some(major) = ver
                .trim()
                .strip_prefix('v')
                .and_then(|v| v.split('.').next())
            {
                return format!("node{}", major);
            }
        }
        "node20".to_string()
    });

    let manifest_path = rocha_dir.join("manifest.json");

    if let Ok(cache) = DiskCache::new(&cache_dir, DEFAULT_MAX_CACHE_BYTES) {
        // Collect all test files and helper files under directories of specs
        let mut all_ts_files: Vec<PathBuf> = Vec::new();

        for p in &discovered_files {
            if let Some(ext) = p.extension().and_then(|e| e.to_str()) {
                if matches!(
                    ext.to_ascii_lowercase().as_str(),
                    "ts" | "tsx" | "mts" | "cts"
                ) {
                    all_ts_files.push(p.clone());
                }
            }
            if let Some(parent) = p.parent() {
                let helper_dir = parent.join("src");
                if helper_dir.is_dir() {
                    if let Ok(entries) = fs::read_dir(&helper_dir) {
                        for entry in entries.flatten() {
                            let path = entry.path();
                            if path.extension().and_then(|e| e.to_str()) == Some("ts") {
                                all_ts_files.push(path);
                            }
                        }
                    }
                }
            }
        }
        all_ts_files.sort();
        all_ts_files.dedup();

        let transform_opts = TransformOptions::default();
        let manifest_entries: Vec<(String, serde_json::Value)> = all_ts_files
            .par_iter()
            .filter_map(|file_path| {
                if let Ok(canonical) = file_path.canonicalize() {
                    if let Ok(entry) =
                        transform_file_and_cache(&canonical, &transform_opts, &cache, &node_class)
                    {
                        let val = serde_json::json!({
                            "key": entry.meta.key,
                            "code": entry.code,
                            "sourceMap": entry.source_map,
                        });
                        return Some((canonical.to_string_lossy().to_string(), val));
                    }
                }
                None
            })
            .collect();

        let mut manifest_map = serde_json::Map::new();
        for (k, v) in manifest_entries {
            manifest_map.insert(k, v);
        }

        let _ = fs::create_dir_all(&rocha_dir);
        let _ = fs::write(
            &manifest_path,
            serde_json::to_string(&manifest_map).unwrap_or_default(),
        );
    }

    // 3. Locate Mocha binary
    let mocha_bin = find_mocha_binary(&cwd);

    // 4. Locate rocha-loader
    let loader_path = find_loader_path(&project_root);

    // 5. Build Mocha command line arguments
    let mut cmd_args = Vec::new();

    // Pass rocha-loader
    cmd_args.push("--require".to_string());
    cmd_args.push(loader_path.to_string_lossy().to_string());

    if config.timeout > 0 {
        cmd_args.push(format!("--timeout={}", config.timeout));
    }
    if config.slow > 0 {
        cmd_args.push(format!("--slow={}", config.slow));
    }
    if config.bail {
        cmd_args.push("--bail".to_string());
    }
    if config.parallel {
        cmd_args.push("--parallel".to_string());
    }
    if config.jobs > 0 {
        cmd_args.push(format!("--jobs={}", config.jobs));
    }
    if !config.reporter.is_empty() {
        cmd_args.push(format!("--reporter={}", config.reporter));
    }
    if !config.ui.is_empty() {
        cmd_args.push(format!("--ui={}", config.ui));
    }
    if let Some(g) = &config.grep {
        cmd_args.push(format!("--grep={}", g));
    }
    if let Some(f) = &config.fgrep {
        cmd_args.push(format!("--fgrep={}", f));
    }
    if config.invert {
        cmd_args.push("--invert".to_string());
    }
    if config.retries > 0 {
        cmd_args.push(format!("--retries={}", config.retries));
    }
    if let Some(color) = config.color {
        if color {
            cmd_args.push("--color".to_string());
        } else {
            cmd_args.push("--no-color".to_string());
        }
    }
    if !config.diff {
        cmd_args.push("--no-diff".to_string());
    }
    for opt in &config.node_option {
        cmd_args.push(format!("--node-option={}", opt));
    }

    // Append native-discovered test files
    for file in &discovered_files {
        cmd_args.push(file.to_string_lossy().to_string());
    }

    let mut cmd = Command::new(&mocha_bin);
    cmd.args(&cmd_args)
        .env("ROCHA_NODE_CLASS", &node_class)
        .env("ROCHA_CACHE_DIR", &cache_dir)
        .env("ROCHA_PROJECT_ROOT", &project_root)
        .env("ROCHA_MANIFEST", &manifest_path);

    let status = cmd
        .status()
        .with_context(|| format!("Failed to execute mocha at {:?}", mocha_bin))?;

    Ok(status)
}

fn find_mocha_binary(cwd: &Path) -> PathBuf {
    let local_mocha = cwd.join("node_modules").join(".bin").join("mocha");
    if local_mocha.is_file() {
        return local_mocha;
    }
    PathBuf::from("mocha")
}

fn find_loader_path(project_root: &Path) -> PathBuf {
    let loader_reg = project_root.join("loader").join("register.cjs");
    if loader_reg.is_file() {
        return loader_reg;
    }
    PathBuf::from("rocha-loader")
}
