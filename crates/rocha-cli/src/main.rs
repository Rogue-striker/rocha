mod args;
mod compat;

pub use args::CliArgs;
use clap::Parser;
use rocha_transform::{transform_file_and_cache, DiskCache, Options, DEFAULT_MAX_CACHE_BYTES};
use std::path::PathBuf;

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    if args.compat_mocha {
        let status = compat::run_compat_mocha(&args)?;
        if !status.success() {
            std::process::exit(status.code().unwrap_or(1));
        }
        return Ok(());
    }

    if let Some(file_path_str) = args.transform {
        let file_path = PathBuf::from(file_path_str);
        let project_root = std::env::var("ROCHA_PROJECT_ROOT")
            .map(PathBuf::from)
            .unwrap_or_else(|_| std::env::current_dir().unwrap_or_else(|_| PathBuf::from(".")));
        let cache_dir = std::env::var("ROCHA_CACHE_DIR")
            .map(PathBuf::from)
            .unwrap_or_else(|_| project_root.join(".rocha").join("cache").join("v1"));

        let node_version =
            std::env::var("ROCHA_NODE_CLASS").unwrap_or_else(|_| "node20".to_string());

        let cache = DiskCache::new(&cache_dir, DEFAULT_MAX_CACHE_BYTES)?;
        let options = Options::default();
        let entry = transform_file_and_cache(&file_path, &options, &cache, &node_version)?;

        println!("{}", entry.code);
        return Ok(());
    }

    if !args.specs.is_empty() {
        let status = run_harness(&args)?;
        if !status.success() {
            std::process::exit(status.code().unwrap_or(1));
        }
        return Ok(());
    }

    println!("rocha {}", env!("CARGO_PKG_VERSION"));
    Ok(())
}

fn run_harness(args: &CliArgs) -> anyhow::Result<std::process::ExitStatus> {
    let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
    let project_root = std::env::var("ROCHA_PROJECT_ROOT")
        .map(PathBuf::from)
        .unwrap_or_else(|_| {
            let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
            if cwd.join("harness/bin/run.js").exists() {
                cwd
            } else if cwd.join("../../harness/bin/run.js").exists() {
                cwd.join("../..")
            } else {
                cwd
            }
        });

    let run_js = project_root.join("harness").join("bin").join("run.js");
    let loader_cjs = project_root.join("loader").join("register.cjs");
    let mut cmd = std::process::Command::new("node");
    if loader_cjs.exists() {
        cmd.arg("--require").arg(loader_cjs);
    }
    cmd.arg(run_js);

    if let Some(reporter) = &args.reporter {
        cmd.arg("--reporter").arg(reporter);
    }
    if let Some(ui) = &args.ui {
        cmd.arg("--ui").arg(ui);
    }
    if args.bail {
        cmd.arg("--bail");
    }
    if let Some(grep) = &args.grep {
        cmd.arg("--grep").arg(grep);
    }
    if let Some(fgrep) = &args.fgrep {
        cmd.arg("--fgrep").arg(fgrep);
    }
    if args.invert {
        cmd.arg("--invert");
    }
    if args.forbid_only {
        cmd.arg("--forbid-only");
    }
    if args.forbid_pending {
        cmd.arg("--forbid-pending");
    }
    if let Some(timeout) = args.timeout {
        cmd.arg("--timeout").arg(timeout.to_string());
    }

    let disc_opts = rocha_discover::DiscoveryOptions {
        specs: args.specs.clone(),
        extensions: vec![
            "js".into(),
            "cjs".into(),
            "mjs".into(),
            "ts".into(),
            "tsx".into(),
            "mts".into(),
            "cts".into(),
        ],
        recursive: true,
        root_dir: cwd.clone(),
        ..Default::default()
    };

    let files = rocha_discover::discover_files(&disc_opts)
        .unwrap_or_else(|_| args.specs.iter().map(PathBuf::from).collect());
    for file in files {
        let rel = file.strip_prefix(&cwd).unwrap_or(&file);
        cmd.arg(rel);
    }

    let status = cmd.status()?;
    Ok(status)
}
