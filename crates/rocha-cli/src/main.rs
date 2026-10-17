mod args;
mod compat;

pub use args::CliArgs;
use clap::Parser;
use rocha_config::{resolve_config, ConfigLoader};
use rocha_discover::{discover_files, DiscoveryOptions};
use rocha_protocol::RunFileOptions;
use rocha_report::{create_reporter, detect_color_support, JsReporterBridge, ReporterOptions};
use rocha_sched::{sharding::ShardSpec, IsolationMode, Scheduler, SchedulerConfig};
use rocha_transform::{transform_file_and_cache, DiskCache, Options, DEFAULT_MAX_CACHE_BYTES};
use rocha_worker::WorkerConfig;
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::str::FromStr;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

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
        loader.load_file(Path::new(cfg_path)).ok()
    } else {
        loader.load_auto(&cwd).ok().flatten()
    };
    let env_vars: HashMap<String, String> = std::env::vars().collect();
    let overrides = args.to_config_overrides();
    let config = resolve_config(file_val, &env_vars, Some(overrides)).unwrap_or_default();

    // 2. Locate workspace root and harness assets
    let project_root = std::env::var("ROCHA_PROJECT_ROOT")
        .map(PathBuf::from)
        .unwrap_or_else(|_| {
            if cwd.join("harness/bin/worker.js").exists() {
                cwd.clone()
            } else if cwd.join("../../harness/bin/worker.js").exists() {
                cwd.join("../..")
            } else {
                cwd.clone()
            }
        });

    let harness_worker_path = project_root.join("harness/bin/worker.js");
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
        specs,
        extensions,
        recursive: args.recursive || config.recursive,
        sort: args.sort || config.sort,
        ignore: ignore_patterns,
        root_dir: cwd.clone(),
    };

    let files = discover_files(&disc_opts).unwrap_or_default();

    if files.is_empty() {
        if args.fail_zero || config.fail_zero {
            eprintln!("Error: No test files found matching pattern and --fail-zero was specified");
            std::process::exit(1);
        }
        std::process::exit(0);
    }

    // 4. Reporter setup
    let reporter_name = args.reporter.as_deref().unwrap_or(&config.reporter);

    let cli_color = if args.no_color {
        Some(false)
    } else if args.color {
        Some(true)
    } else {
        None
    };
    let reporter_opts = ReporterOptions {
        use_colors: detect_color_support(cli_color),
        inline_diffs: args.inline_diffs || config.inline_diffs,
        ..Default::default()
    };

    // 5. Worker configuration
    let mut node_options = args.node_option.clone();
    for opt in &config.node_option {
        if !node_options.contains(opt) {
            node_options.push(opt.clone());
        }
    }

    let worker_config = WorkerConfig {
        node_path: "node".into(),
        loader_path: if loader_path.exists() {
            Some(loader_path)
        } else {
            None
        },
        harness_worker_path,
        node_options,
        ..Default::default()
    };

    // 6. Scheduler configuration
    let jobs = if args.parallel || config.parallel {
        args.jobs.unwrap_or(config.jobs)
    } else {
        args.jobs.unwrap_or(1)
    };

    let isolate = match args.isolate.as_deref() {
        Some("none") => IsolationMode::None,
        _ => IsolationMode::File,
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
    };

    let sched_config = SchedulerConfig {
        jobs,
        isolate,
        worker_config,
        run_options,
        bail,
        shard,
        root_dir: cwd.clone(),
        ..Default::default()
    };

    let scheduler = Scheduler::new(sched_config);

    // 7. Execute files through reporter pipeline
    let summary = match create_reporter(reporter_name, std::io::stdout(), reporter_opts) {
        Ok(mut rep) => scheduler.run_files(files, &mut rep).await?,
        Err(_) => {
            let mut bridge =
                JsReporterBridge::new(reporter_name, HashMap::new(), None).map_err(|e| {
                    anyhow::anyhow!("Failed to instantiate reporter {}: {}", reporter_name, e)
                })?;
            scheduler.run_files(files, &mut bridge).await?
        }
    };

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
