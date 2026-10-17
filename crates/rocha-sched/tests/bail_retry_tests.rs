use rocha_protocol::RunFileOptions;
use rocha_report::{Event, Reporter, Summary};
use rocha_sched::{IsolationMode, Scheduler, SchedulerConfig, SchedulerError};
use rocha_worker::WorkerConfig;
use std::fs;
use std::io;
use std::path::PathBuf;
use std::sync::Arc;
use tokio::sync::Mutex;

struct TestReporter {
    pub events: Vec<Event>,
}

impl TestReporter {
    fn new() -> Self {
        Self { events: Vec::new() }
    }
}

impl Reporter for TestReporter {
    fn on_event(&mut self, event: &Event) {
        self.events.push(event.clone());
    }

    fn finish(&mut self, _summary: &Summary) -> io::Result<()> {
        Ok(())
    }
}

fn harness_path() -> PathBuf {
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    manifest_dir
        .parent()
        .and_then(|p| p.parent())
        .expect("workspace root")
        .join("harness/bin/worker.js")
}

fn is_process_alive(pid: u32) -> bool {
    #[cfg(unix)]
    {
        let status = std::process::Command::new("kill")
            .arg("-0")
            .arg(pid.to_string())
            .status();
        match status {
            Ok(s) => s.success(),
            Err(_) => false,
        }
    }
    #[cfg(not(unix))]
    {
        false
    }
}

#[tokio::test]
async fn test_bail_halts_remaining_files_and_assert_no_zombies() {
    let temp_dir = std::env::temp_dir().join(format!("rocha_bail_test_{}", std::process::id()));
    fs::create_dir_all(&temp_dir).unwrap();

    let file_fail = temp_dir.join("01_fail.js");
    let file_skipped = temp_dir.join("02_should_skip.js");

    fs::write(
        &file_fail,
        b"describe('Failing Suite', () => { it('fails intentionally', () => { throw new Error('boom'); }); });",
    )
    .unwrap();

    fs::write(
        &file_skipped,
        b"describe('Skipped Suite', () => { it('never reached', () => {}); });",
    )
    .unwrap();

    let tracked_pids = Arc::new(Mutex::new(Vec::new()));

    let worker_config = WorkerConfig {
        harness_worker_path: harness_path(),
        ..Default::default()
    };

    let config = SchedulerConfig {
        jobs: 1,
        isolate: IsolationMode::File,
        worker_config,
        bail: true,
        tracked_pids: Some(Arc::clone(&tracked_pids)),
        ..Default::default()
    };

    let scheduler = Scheduler::new(config);
    let mut reporter = TestReporter::new();

    let files = vec![file_fail.clone(), file_skipped.clone()];
    let summary = scheduler
        .run_files(files, &mut reporter)
        .await
        .expect("run_files should succeed with partial summary");

    // Failure was recorded
    assert_eq!(summary.failures, 1);
    assert_eq!(summary.passes, 0);

    // Second file was never executed due to bail
    let executed_files: Vec<String> = reporter
        .events
        .iter()
        .filter_map(|ev| match ev {
            Event::FileDone { file, .. } => Some(file.clone()),
            _ => None,
        })
        .collect();

    assert_eq!(executed_files.len(), 1);
    assert!(executed_files[0].contains("01_fail.js"));

    // Assert NO ZOMBIE PROCESSES remain
    let pids = tracked_pids.lock().await.clone();
    assert!(
        !pids.is_empty(),
        "At least one worker PID must have been tracked"
    );

    // Give OS a moment to clean process table
    tokio::time::sleep(std::time::Duration::from_millis(50)).await;

    for pid in pids {
        assert!(
            !is_process_alive(pid),
            "Worker process with PID {} must not be alive (no zombies)",
            pid
        );
    }

    let _ = fs::remove_dir_all(&temp_dir);
}

#[tokio::test]
async fn test_retries_counted_in_summary() {
    let temp_dir = std::env::temp_dir().join(format!("rocha_retry_test_{}", std::process::id()));
    fs::create_dir_all(&temp_dir).unwrap();

    let retry_file = temp_dir.join("retry_test.js");
    fs::write(
        &retry_file,
        b"
let attempt = 0;
describe('Flaky Suite', () => {
  it('passes on second attempt', function() {
    attempt++;
    if (attempt < 2) {
      throw new Error('first attempt fails');
    }
  });
});
",
    )
    .unwrap();

    let worker_config = WorkerConfig {
        harness_worker_path: harness_path(),
        ..Default::default()
    };

    let run_options = RunFileOptions {
        retries: 2,
        ..Default::default()
    };

    let config = SchedulerConfig {
        jobs: 1,
        isolate: IsolationMode::File,
        worker_config,
        run_options,
        ..Default::default()
    };

    let scheduler = Scheduler::new(config);
    let mut reporter = TestReporter::new();

    let summary = scheduler
        .run_files(vec![retry_file], &mut reporter)
        .await
        .expect("run_files with retry should pass");

    // Test eventually passed
    assert_eq!(summary.passes, 1);
    assert_eq!(summary.failures, 0);

    // Retries are counted in summary
    assert_eq!(summary.retries, 1, "Summary must record the retry attempt");

    let _ = fs::remove_dir_all(&temp_dir);
}

#[tokio::test]
async fn test_signal_interrupted_error_exit_code() {
    let summary = Summary {
        passes: 5,
        failures: 0,
        pending: 0,
        duration_ms: 100,
        retries: 0,
        failure_details: vec![],
    };

    let sigint_err = SchedulerError::Interrupted {
        code: 130,
        summary: summary.clone(),
    };
    assert_eq!(sigint_err.to_string(), "Run interrupted by signal 130");

    let sigterm_err = SchedulerError::Interrupted { code: 143, summary };
    assert_eq!(sigterm_err.to_string(), "Run interrupted by signal 143");
}
