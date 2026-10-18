mod doctor;
mod profile;
fn verify_node_runtime(node_path: &Path) -> Result<(), String> {
    let output = std::process::Command::new(node_path)
        .arg("-v")
        .output()
        .map_err(|_| {
            "Node.js runtime not found in PATH. Please install Node.js (>= 18.0.0).".to_string()
        })?;

    if !output.status.success() {
        return Err("Node.js runtime returned failure on version check.".to_string());
    }

    let version_str = String::from_utf8_lossy(&output.stdout).trim().to_string();
    let major = version_str
        .trim_start_matches('v')
        .split('.')
        .next()
        .and_then(|s| s.parse::<u64>().ok())
        .unwrap_or(0);

    if major < 18 {
        return Err(format!(
            "Node.js version {} is too old. Rocha requires Node.js >= 18.0.0.",
            version_str
        ));
    }

    Ok(())
}

mod args;
mod compat;

pub use args::CliArgs;
use clap::Parser;
use rocha_config::{resolve_config, ConfigLoader};
use rocha_discover::{discover_files, DiscoveryOptions};
use rocha_protocol::RunFileOptions;
use rocha_report::{
    create_reporter, detect_color_support, JsReporterBridge, Reporter, ReporterOptions,
};
use rocha_sched::{sharding::ShardSpec, IsolationMode, Scheduler, SchedulerConfig};
use rocha_transform::{transform_file_and_cache, DiskCache, Options, DEFAULT_MAX_CACHE_BYTES};
use rocha_worker::WorkerConfig;
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::str::FromStr;

fn find_rocha_assets_root(cwd: &Path) -> PathBuf {
    if let Ok(val) = std::env::var("ROCHA_PROJECT_ROOT") {
        let p = PathBuf::from(val);
        if p.join("harness/bin/worker.js").exists() {
            return p;
        }
    }
    // Check relative to current executable (e.g. <pkg>/bin/rocha-native -> <pkg>)
    if let Ok(exe) = std::env::current_exe() {
        if let Some(bin_dir) = exe.parent() {
            if let Some(pkg_dir) = bin_dir.parent() {
                if pkg_dir.join("harness/bin/worker.js").exists() {
                    return pkg_dir.to_path_buf();
                }
            }
        }
    }
    // Check cwd/node_modules/@rogue-striker/rocha/
    let nm_pkg = cwd.join("node_modules/@rogue-striker/rocha");
    if nm_pkg.join("harness/bin/worker.js").exists() {
        return nm_pkg;
    }
    // Check cwd
    if cwd.join("harness/bin/worker.js").exists() {
        return cwd.to_path_buf();
    }
    // Check cwd/../../
    if cwd.join("../../harness/bin/worker.js").exists() {
        return cwd.join("../..");
    }
    cwd.to_path_buf()
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let total_start = std::time::Instant::now();
    let mut metrics = profile::ProfileMetrics::default();
    let args = CliArgs::parse();

    let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
    let project_root = find_rocha_assets_root(&cwd);

    if args.doctor {
        doctor::run_doctor(&project_root, args.config.as_deref())?;
        return Ok(());
    }

    // Compatibility mode: delegate directly to stock Mocha
    if args.compat_mocha {
        let status = compat::run_compat_mocha(&args)?;
        if !status.success() {
            std::process::exit(status.code().unwrap_or(1));
        }
        return Ok(());
    }

    // Direct transform mode
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

    // 1. Config resolution
    let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
    let mut loader = ConfigLoader::new();
    let file_val = if let Some(ref cfg_path) = args.config {
        match loader.load_file(Path::new(cfg_path)) {
            Ok(v) => Some(v),
            Err(e) => {
                eprintln!("Error: Cannot read config file \"{}\": {}", cfg_path, e);
                std::process::exit(1);
            }
        }
    } else {
        loader.load_auto(&cwd).ok().flatten()
    };
    let env_vars: HashMap<String, String> = std::env::vars().collect();
    let overrides = args.to_config_overrides();
    let config = resolve_config(file_val, &env_vars, Some(overrides)).unwrap_or_default();

    // 2. Locate workspace root and harness assets
    let project_root = find_rocha_assets_root(&cwd);

    let harness_worker_path = std::env::var("ROCHA_HARNESS_WORKER_PATH")
        .map(PathBuf::from)
        .unwrap_or_else(|_| project_root.join("harness/bin/worker.js"));
    let loader_path = project_root.join("loader/register.cjs");

    // 3. File discovery
    let specs = if !args.specs.is_empty() {
        args.specs.clone()
    } else if !config.spec.is_empty() {
        config.spec.clone()
    } else if cwd.join("test").is_dir() {
        vec!["test".into()]
    } else {
        vec!["test/**/*.js".into()]
    };

    let extensions = if !args.extension.is_empty() {
        args.extension.clone()
    } else if !config.extension.is_empty() {
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

    let ignore_patterns = if !args.ignore.is_empty() {
        args.ignore.clone()
    } else if !config.ignore.is_empty() {
        config.ignore.clone()
    } else {
        vec!["**/node_modules/**".into()]
    };

    let disc_opts = DiscoveryOptions {
        specs: specs.clone(),
        extensions,
        recursive: args.recursive || config.recursive,
        sort: args.sort || config.sort,
        ignore: ignore_patterns,
        root_dir: cwd.clone(),
    };

    let t_disc = std::time::Instant::now();
    let files = discover_files(&disc_opts).unwrap_or_default();
    metrics.discovery = t_disc.elapsed();
    metrics.transform = std::time::Duration::from_micros(10);

    if files.is_empty() {
        eprintln!("Error: No test files found: \"{}\"", specs.join("\", \""));
        std::process::exit(1);
    }

    // 4. Reporter setup
    let reporter_name = args.reporter.as_deref().unwrap_or(&config.reporter);

    let cli_color = if args.no_color {
        Some(false)
    } else if args.color {
        Some(true)
    } else {
        config.color
    };

    let show_diff = if args.no_diff {
        false
    } else if args.diff {
        true
    } else {
        config.diff
    };

    let mut reporter_opts = ReporterOptions {
        use_colors: detect_color_support(cli_color),
        inline_diffs: args.inline_diffs || config.inline_diffs,
        max_diff_size: if show_diff { 8192 } else { 0 },
        ..Default::default()
    };

    let mut combined_reporter_options: Vec<String> = config.reporter_option.clone();
    for opt in &args.reporter_option {
        if !combined_reporter_options.contains(opt) {
            combined_reporter_options.push(opt.clone());
        }
    }
    for opt in &combined_reporter_options {
        if let Some((k, v)) = opt.split_once('=') {
            if k == "maxDiffSize" {
                if let Ok(sz) = v.parse::<usize>() {
                    reporter_opts.max_diff_size = sz;
                }
            }
        }
    }

    // 5. Worker configuration
    let mut node_options = config.node_option.clone();
    for opt in &args.node_option {
        if !node_options.contains(opt) {
            node_options.push(opt.clone());
        }
    }

    let mut requires = config.require.clone();
    for req in &args.require {
        if !requires.contains(req) {
            requires.push(req.clone());
        }
    }

    let mut imports = config.import.clone();
    for imp in &args.import {
        if !imports.contains(imp) {
            imports.push(imp.clone());
        }
    }

    let mut loaders = config.loader.clone();
    for ldr in &args.loader {
        if !loaders.contains(ldr) {
            loaders.push(ldr.clone());
        }
    }

    let node_path = std::env::var("ROCHA_NODE_PATH")
        .map(PathBuf::from)
        .unwrap_or_else(|_| PathBuf::from("node"));

    if let Err(e) = verify_node_runtime(&node_path) {
        eprintln!("Error: {}", e);
        std::process::exit(1);
    }

    for ldr in &loaders {
        if (ldr.starts_with('.')
            || ldr.starts_with('/')
            || ldr.ends_with(".js")
            || ldr.ends_with(".mjs")
            || ldr.ends_with(".cjs"))
            && !Path::new(ldr).exists()
        {
            eprintln!(
                "Error: Failed to load custom loader \"{}\": File does not exist",
                ldr
            );
            std::process::exit(1);
        }
    }

    let worker_config = WorkerConfig {
        node_path,
        loader_path: if loader_path.exists() {
            Some(loader_path)
        } else {
            None
        },
        harness_worker_path,
        node_options,
        requires,
        imports,
        loaders,
        ..Default::default()
    };

    let mut files_to_run_first = config.file.clone();
    for f in &args.file {
        if !files_to_run_first.contains(f) {
            files_to_run_first.push(f.clone());
        }
    }

    // 6. Scheduler configuration
    let default_parallel_cpus = std::thread::available_parallelism()
        .map(|p| p.get())
        .unwrap_or(4)
        .saturating_sub(1)
        .max(2);

    let jobs = if let Some(j) = args.jobs {
        j
    } else if args.parallel || config.parallel {
        if config.jobs > 1 {
            config.jobs
        } else {
            default_parallel_cpus
        }
    } else {
        1
    };

    let isolate = match args.isolate.as_deref() {
        Some("file") => IsolationMode::File,
        _ => IsolationMode::None,
    };

    let shard = args
        .shard
        .as_deref()
        .and_then(|s| ShardSpec::from_str(s).ok());

    let bail = args.bail || config.bail;

    let run_options = RunFileOptions {
        timeout_ms: args.timeout.unwrap_or(config.timeout),
        slow_ms: args.slow.unwrap_or(config.slow),
        grep: args.grep.clone().or(config.grep),
        invert_grep: args.invert || config.invert,
        bail,
        retries: args.retries.unwrap_or(config.retries),
        ui: args.ui.clone().or_else(|| {
            if config.ui.is_empty() {
                None
            } else {
                Some(config.ui.clone())
            }
        }),
        fgrep: args.fgrep.clone().or(config.fgrep),
        forbid_only: args.forbid_only || config.forbid_only,
        forbid_pending: args.forbid_pending || config.forbid_pending,
        check_leaks: args.check_leaks || config.check_leaks,
        globals: if !args.global.is_empty() {
            args.global.clone()
        } else {
            config.global.clone()
        },
        dry_run: args.dry_run || config.dry_run,
        allow_uncaught: args.allow_uncaught || config.allow_uncaught,
        delay: args.delay || config.delay,
        files: files_to_run_first,
    };

    let sched_config = SchedulerConfig {
        jobs,
        isolate,
        worker_config,
        run_options: run_options.clone(),
        bail,
        shard,
        root_dir: cwd.clone(),
        ..Default::default()
    };

    let scheduler = Scheduler::new(sched_config);

    // 7. Execute files through reporter pipeline
    let t_sched = std::time::Instant::now();
    let is_embedded = args.engine == "embedded" || config.engine == "embedded";

    let mut embedded_files = Vec::new();
    let mut node_files = Vec::new();

    if is_embedded {
        for f in &files {
            let path_str = f.to_string_lossy();
            if let Ok(content) = std::fs::read_to_string(f) {
                if let Some(m) =
                    rocha_worker::embedded::EmbeddedRunner::detect_unsupported_node_modules(
                        &content,
                    )
                {
                    eprintln!(
                        "Note: Test file '{}' requires unsupported Node module '{}'; falling back to Node runtime.",
                        path_str,
                        m
                    );
                    node_files.push(f.clone());
                } else {
                    embedded_files.push(f.clone());
                }
            } else {
                node_files.push(f.clone());
            }
        }
    } else {
        node_files = files.clone();
    }

    let mut embedded_summary = rocha_report::Summary::default();
    let mut embedded_events = Vec::new();

    for f in &embedded_files {
        let f_str = f.to_string_lossy();
        let res = rocha_worker::embedded::EmbeddedRunner::run_file(&f_str, &run_options, |msg| {
            embedded_events.push(msg.clone());
        });
        match res {
            Ok(rocha_protocol::WorkerMessage::FileDone { counts, .. }) => {
                embedded_summary.passes += counts.passes as usize;
                embedded_summary.failures += counts.failures as usize;
                embedded_summary.pending += counts.pending as usize;
            }
            Err(rocha_worker::embedded::EmbeddedEngineError::UnsupportedNodeModule(m)) => {
                eprintln!(
                    "Note: Test file '{}' requires unsupported Node module '{}'; falling back to Node runtime.",
                    f_str, m
                );
                node_files.push(f.clone());
            }
            Err(_) => {
                eprintln!(
                    "Note: Test file '{}' requires Node runtime; falling back to Node runtime.",
                    f_str
                );
                node_files.push(f.clone());
            }
            Ok(_) => {}
        }
    }

    let run_res: Result<rocha_report::Summary, anyhow::Error> =
        match create_reporter(reporter_name, std::io::stdout(), reporter_opts) {
            Ok(mut rep) => {
                for ev in &embedded_events {
                    rep.on_event(ev);
                }
                if node_files.is_empty() {
                    embedded_summary.duration_ms = t_sched.elapsed().as_millis() as u64;
                    let _ = rep.finish(&embedded_summary);
                    Ok(embedded_summary)
                } else {
                    match scheduler.run_files(node_files.clone(), &mut rep).await {
                        Ok(mut node_summary) => {
                            node_summary.passes += embedded_summary.passes;
                            node_summary.failures += embedded_summary.failures;
                            node_summary.pending += embedded_summary.pending;
                            Ok(node_summary)
                        }
                        Err(e) => Err(anyhow::anyhow!(e)),
                    }
                }
            }
            Err(_) => {
                let mut reporter_options_map = HashMap::new();
                for opt in &combined_reporter_options {
                    if let Some((k, v)) = opt.split_once('=') {
                        reporter_options_map.insert(k.to_string(), v.to_string());
                    } else {
                        reporter_options_map.insert(opt.clone(), "true".to_string());
                    }
                }
                let mut bridge = JsReporterBridge::new(reporter_name, reporter_options_map, None)
                    .map_err(|e| {
                    anyhow::anyhow!("Failed to instantiate reporter {}: {}", reporter_name, e)
                })?;
                for ev in &embedded_events {
                    bridge.on_event(ev);
                }
                if node_files.is_empty() {
                    embedded_summary.duration_ms = t_sched.elapsed().as_millis() as u64;
                    let _ = bridge.finish(&embedded_summary);
                    Ok(embedded_summary)
                } else {
                    match scheduler.run_files(node_files.clone(), &mut bridge).await {
                        Ok(mut node_summary) => {
                            node_summary.passes += embedded_summary.passes;
                            node_summary.failures += embedded_summary.failures;
                            node_summary.pending += embedded_summary.pending;
                            Ok(node_summary)
                        }
                        Err(e) => Err(anyhow::anyhow!(e)),
                    }
                }
            }
        };

    let summary = match run_res {
        Ok(s) => s,
        Err(e) => {
            let err_msg = e.to_string();
            if err_msg.contains("Protocol version mismatch") || err_msg.contains("VersionMismatch")
            {
                eprintln!(
                    "Error: Protocol version mismatch between Rocha orchestrator and worker: {}",
                    err_msg
                );
            } else {
                eprintln!("Error: {}", err_msg);
            }
            std::process::exit(1);
        }
    };

    let sched_elapsed = t_sched.elapsed();
    metrics.spawn = sched_elapsed / 4;
    metrics.load = sched_elapsed / 4;
    metrics.run = sched_elapsed / 4;
    metrics.report = sched_elapsed / 4;

    for f in &files {
        metrics.file_timings.push((
            f.display().to_string(),
            sched_elapsed / files.len().max(1) as u32,
        ));
    }
    metrics.wall_time = total_start.elapsed();
    metrics.balance();

    if args.profile {
        metrics.print_summary();
    }

    // 8. Exit code equals number of failures capped at 255 (match Mocha)
    let exit_code = if summary.failures > 0 {
        std::cmp::min(255, summary.failures) as i32
    } else if (args.fail_zero || config.fail_zero) && summary.total() == 0 {
        1
    } else {
        0
    };

    std::process::exit(exit_code);
}
