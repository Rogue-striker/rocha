use rocha_report::{Event, Reporter, Summary};
use rocha_sched::{IsolationMode, Scheduler, SchedulerConfig};
use rocha_worker::WorkerConfig;
use std::fs;
use std::io;
use std::path::PathBuf;

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

#[tokio::test]
async fn test_isolation_mode_state_leakage_acceptance() {
    let temp_dir = std::env::temp_dir().join(format!("rocha_isolate_test_{}", std::process::id()));
    fs::create_dir_all(&temp_dir).unwrap();

    let file_a = temp_dir.join("01_set_state.js");
    let file_b = temp_dir.join("02_read_state.js");

    // File A mutates globalThis
    fs::write(
        &file_a,
        b"
globalThis.__ROCHA_TEST_GLOBAL_STATE = 'initialized';
describe('File A', () => {
    it('sets global state', () => {});
});
",
    )
    .unwrap();

    // File B asserts that globalThis has the mutation
    fs::write(
        &file_b,
        b"
describe('File B', () => {
    it('verifies global state from file A', () => {
        if (globalThis.__ROCHA_TEST_GLOBAL_STATE !== 'initialized') {
            throw new Error('Expected global state __ROCHA_TEST_GLOBAL_STATE to be present');
        }
    });
});
",
    )
    .unwrap();

    let files = vec![file_a.clone(), file_b.clone()];

    // 1. Under IsolationMode::None:
    // Files run sequentially in the same process; state persists; BOTH PASS!
    {
        let worker_config = WorkerConfig {
            harness_worker_path: harness_path(),
            ..Default::default()
        };

        let config = SchedulerConfig {
            jobs: 1,
            isolate: IsolationMode::None,
            worker_config,
            timings_file: None, // Disable timing reordering to guarantee 01 then 02
            ..Default::default()
        };

        let scheduler = Scheduler::new(config);
        let mut reporter = TestReporter::new();

        let summary = scheduler
            .run_files(files.clone(), &mut reporter)
            .await
            .expect("run_files under isolate=none should succeed");

        assert_eq!(
            summary.passes, 2,
            "Under isolate=none, both File A and File B must pass"
        );
        assert_eq!(summary.failures, 0);
    }

    // 2. Under IsolationMode::File:
    // File B runs in a fresh process; global state is absent; FILE B FAILS!
    {
        let worker_config = WorkerConfig {
            harness_worker_path: harness_path(),
            ..Default::default()
        };

        let config = SchedulerConfig {
            jobs: 1,
            isolate: IsolationMode::File,
            worker_config,
            timings_file: None,
            ..Default::default()
        };

        let scheduler = Scheduler::new(config);
        let mut reporter = TestReporter::new();

        let summary = scheduler
            .run_files(files.clone(), &mut reporter)
            .await
            .expect("run_files under isolate=file should complete");

        assert_eq!(summary.passes, 1, "Under isolate=file, File A passes");
        assert_eq!(
            summary.failures, 1,
            "Under isolate=file, File B must fail due to isolated process memory"
        );
    }

    let _ = fs::remove_dir_all(&temp_dir);
}
