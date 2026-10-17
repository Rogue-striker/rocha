use rocha_discover::{discover_files, DiscoveryOptions};
use rocha_report::{Event, Reporter, Summary};
use rocha_sched::{IsolationMode, Scheduler, SchedulerConfig};
use rocha_worker::WorkerConfig;
use std::io;
use std::path::PathBuf;

struct CollectingReporter {
    pub events: Vec<Event>,
}

impl CollectingReporter {
    fn new() -> Self {
        Self { events: Vec::new() }
    }
}

impl Reporter for CollectingReporter {
    fn on_event(&mut self, event: &Event) {
        self.events.push(event.clone());
    }

    fn finish(&mut self, _summary: &Summary) -> io::Result<()> {
        Ok(())
    }
}

fn small_suite_files() -> Vec<PathBuf> {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir
        .parent()
        .and_then(|p| p.parent())
        .expect("workspace root");

    let small_dir = workspace_root.join("bench/suites/small");
    let options = DiscoveryOptions {
        specs: vec![small_dir.to_string_lossy().to_string()],
        extensions: vec!["js".into()],
        recursive: false,
        sort: true,
        root_dir: workspace_root.to_path_buf(),
        ..Default::default()
    };

    discover_files(&options).expect("discover small suite files")
}

#[tokio::test]
async fn test_empty_files_returns_empty_summary() {
    let config = SchedulerConfig::default();
    let scheduler = Scheduler::new(config);
    let mut reporter = CollectingReporter::new();

    let summary = scheduler
        .run_files(vec![], &mut reporter)
        .await
        .expect("run_files on empty should succeed");

    assert_eq!(summary.passes, 0);
    assert_eq!(summary.failures, 0);
    assert_eq!(summary.pending, 0);
}

#[tokio::test]
async fn test_small_suite_with_isolate_file() {
    let files = small_suite_files();
    assert_eq!(files.len(), 50, "Expected 50 files in small suite");

    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir
        .parent()
        .and_then(|p| p.parent())
        .expect("workspace root");

    let worker_config = WorkerConfig {
        harness_worker_path: workspace_root.join("harness/bin/worker.js"),
        ..Default::default()
    };

    let config = SchedulerConfig {
        jobs: 4,
        isolate: IsolationMode::File,
        worker_config,
        ..Default::default()
    };

    let scheduler = Scheduler::new(config);
    let mut reporter = CollectingReporter::new();

    let summary = scheduler
        .run_files(files, &mut reporter)
        .await
        .expect("run_files small suite should succeed");

    assert_eq!(summary.passes, 500, "Pass count must equal 500");
    assert_eq!(summary.failures, 0, "Failure count must equal 0");
    assert_eq!(summary.pending, 0, "Pending count must equal 0");
}

#[tokio::test]
async fn test_small_suite_with_isolate_none() {
    let files = small_suite_files();
    assert_eq!(files.len(), 50, "Expected 50 files in small suite");

    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let workspace_root = manifest_dir
        .parent()
        .and_then(|p| p.parent())
        .expect("workspace root");

    let worker_config = WorkerConfig {
        harness_worker_path: workspace_root.join("harness/bin/worker.js"),
        ..Default::default()
    };

    let config = SchedulerConfig {
        jobs: 4,
        isolate: IsolationMode::None,
        worker_config,
        ..Default::default()
    };

    let scheduler = Scheduler::new(config);
    let mut reporter = CollectingReporter::new();

    let summary = scheduler
        .run_files(files, &mut reporter)
        .await
        .expect("run_files small suite with isolate none should succeed");

    assert_eq!(summary.passes, 500, "Pass count must equal 500");
    assert_eq!(summary.failures, 0, "Failure count must equal 0");
    assert_eq!(summary.pending, 0, "Pending count must equal 0");
}
