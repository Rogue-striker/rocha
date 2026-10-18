//! Ordered and streaming event merger for Rocha test results.

use crate::{FailureDetail, Reporter, Summary};
use rocha_protocol::WorkerMessage as Event;
use std::collections::{HashMap, HashSet};
use std::io;

/// Mode controlling event release order to reporters.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum MergeMode {
    /// Buffer events per file and release strictly in spec-list order (default).
    #[default]
    Ordered,
    /// Forward events to reporters immediately as they arrive from workers.
    Streaming,
}

/// Merges test events from multiple concurrent workers for consumption by a Reporter.
pub struct EventMerger {
    mode: MergeMode,
    spec_order: Vec<String>,
    current_spec_idx: usize,
    buffers: HashMap<String, Vec<Event>>,
    completed_files: HashSet<String>,
    suites: HashMap<String, (Option<String>, String)>,
    tests: HashMap<String, (String, String, String)>,
    summary: Summary,
}

impl EventMerger {
    /// Create a new merger with the given spec-list order and merge mode.
    pub fn new(spec_order: Vec<String>, mode: MergeMode) -> Self {
        Self {
            mode,
            spec_order,
            current_spec_idx: 0,
            buffers: HashMap::new(),
            completed_files: HashSet::new(),
            suites: HashMap::new(),
            tests: HashMap::new(),
            summary: Summary::default(),
        }
    }

    /// Return the current merge mode.
    pub fn mode(&self) -> MergeMode {
        self.mode
    }

    /// Set total wall-clock duration in milliseconds for the summary.
    pub fn set_duration_ms(&mut self, ms: u64) {
        self.summary.duration_ms = ms;
    }

    /// Current accumulated summary.
    pub fn summary(&self) -> &Summary {
        &self.summary
    }

    /// Push an event from a worker executing `file`.
    pub fn push(&mut self, file: &str, event: Event, reporter: &mut impl Reporter) {
        if !self.spec_order.iter().any(|s| s == file) {
            self.spec_order.push(file.to_string());
        }

        if self.mode == MergeMode::Streaming {
            self.dispatch_event(&event, reporter);
            return;
        }

        // Ordered mode:
        let is_done = matches!(event, Event::FileDone { .. });
        if is_done {
            self.completed_files.insert(file.to_string());
        }

        let is_current = self.current_spec_idx < self.spec_order.len()
            && self.spec_order[self.current_spec_idx] == file;
        let has_buffer = self.buffers.get(file).is_some_and(|buf| !buf.is_empty());

        if is_current && !has_buffer {
            self.dispatch_event(&event, reporter);
            if is_done {
                self.current_spec_idx += 1;
                self.flush_ready(reporter);
            }
        } else {
            self.buffers
                .entry(file.to_string())
                .or_default()
                .push(event);
            self.flush_ready(reporter);
        }
    }

    /// Flush any files that have reached their turn in spec order.
    fn flush_ready(&mut self, reporter: &mut impl Reporter) {
        while self.current_spec_idx < self.spec_order.len() {
            let current_file = self.spec_order[self.current_spec_idx].clone();

            if let Some(events) = self.buffers.remove(&current_file) {
                for ev in events {
                    self.dispatch_event(&ev, reporter);
                }
            }

            if self.completed_files.contains(&current_file) {
                self.current_spec_idx += 1;
            } else {
                break;
            }
        }
    }

    /// Dispatch an event to the reporter and update summary and hierarchy state.
    fn dispatch_event(&mut self, event: &Event, reporter: &mut impl Reporter) {
        self.track_event(event);
        reporter.on_event(event);
    }

    /// Track suite, test, and summary information.
    fn track_event(&mut self, event: &Event) {
        match event {
            Event::SuiteStart {
                id, parent, title, ..
            } => {
                self.suites
                    .insert(id.clone(), (parent.clone(), title.clone()));
            }
            Event::TestStart {
                id,
                suite,
                title,
                file,
            } => {
                self.tests
                    .insert(id.clone(), (suite.clone(), title.clone(), file.clone()));
            }
            Event::Retry { .. } => {
                self.summary.retries += 1;
            }
            Event::TestPass {
                id,
                duration_ms,
                ..
            } => {
                self.summary.passes += 1;
                self.summary.duration_ms += duration_ms;
                self.tests.remove(id);
            }
            Event::TestFail {
                id,
                duration_ms,
                error,
            } => {
                self.summary.failures += 1;
                self.summary.duration_ms += duration_ms;
                let (title, full_title, file) =
                    if let Some((suite_id, t_title, t_file)) = self.tests.get(id) {
                        (
                            t_title.clone(),
                            self.compute_test_full_title(suite_id, t_title),
                            t_file.clone(),
                        )
                    } else {
                        (id.clone(), id.clone(), String::new())
                    };

                self.summary.failure_details.push(FailureDetail {
                    title,
                    full_title,
                    file,
                    error: error.clone(),
                });
            }
            Event::TestPending { .. } => {
                self.summary.pending += 1;
            }
            Event::HookFail {
                suite,
                hook,
                title,
                error,
            } => {
                self.summary.failures += 1;
                let suite_full = self.compute_suite_full_title(suite);
                let full_title = if suite_full.is_empty() {
                    if title.is_empty() {
                        format!("\"{}\" hook", hook)
                    } else {
                        title.clone()
                    }
                } else if title.is_empty() {
                    format!("{} \"{}\" hook", suite_full, hook)
                } else {
                    format!("{} {}", suite_full, title)
                };

                self.summary.failure_details.push(FailureDetail {
                    title: title.clone(),
                    full_title,
                    file: String::new(),
                    error: error.clone(),
                });
            }
            _ => {}
        }
    }

    /// Compute full hierarchical title for a suite.
    fn compute_suite_full_title(&self, suite_id: &str) -> String {
        let mut parts = Vec::new();
        let mut cur = Some(suite_id.to_string());
        while let Some(sid) = cur {
            if let Some((parent, title)) = self.suites.get(&sid) {
                if !title.is_empty() {
                    parts.push(title.as_str());
                }
                cur = parent.clone();
            } else {
                break;
            }
        }
        parts.reverse();
        parts.join(" ")
    }

    /// Compute full hierarchical title for a test.
    fn compute_test_full_title(&self, suite_id: &str, test_title: &str) -> String {
        let suite_full = self.compute_suite_full_title(suite_id);
        if suite_full.is_empty() {
            test_title.to_string()
        } else {
            format!("{} {}", suite_full, test_title)
        }
    }

    /// Finalize output by flushing all remaining buffered events and calling finish on the reporter.
    pub fn finish(&mut self, reporter: &mut impl Reporter) -> io::Result<Summary> {
        while self.current_spec_idx < self.spec_order.len() {
            let current_file = self.spec_order[self.current_spec_idx].clone();
            if let Some(events) = self.buffers.remove(&current_file) {
                for ev in events {
                    self.dispatch_event(&ev, reporter);
                }
            }
            self.current_spec_idx += 1;
        }

        let remaining_keys: Vec<String> = self.buffers.keys().cloned().collect();
        for key in remaining_keys {
            if let Some(events) = self.buffers.remove(&key) {
                for ev in events {
                    self.dispatch_event(&ev, reporter);
                }
            }
        }

        reporter.finish(&self.summary)?;
        Ok(self.summary.clone())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[derive(Default, Clone)]
    struct RecordingReporter {
        events: Vec<Event>,
        summary: Option<Summary>,
    }

    impl Reporter for RecordingReporter {
        fn on_event(&mut self, ev: &Event) {
            self.events.push(ev.clone());
        }

        fn finish(&mut self, summary: &Summary) -> io::Result<()> {
            self.summary = Some(summary.clone());
            Ok(())
        }
    }

    fn sample_file_events(file: &str, suite_id: &str, test_id: &str) -> Vec<Event> {
        vec![
            Event::SuiteStart {
                id: suite_id.into(),
                parent: None,
                title: format!("Suite for {}", file),
                file: file.into(),
            },
            Event::TestStart {
                id: test_id.into(),
                suite: suite_id.into(),
                title: format!("Test in {}", file),
                file: file.into(),
            },
            Event::TestPass {
                id: test_id.into(),
                duration_ms: 10,
                slow: false,
            },
            Event::SuiteEnd {
                id: suite_id.into(),
            },
            Event::FileDone {
                file: file.into(),
                counts: rocha_protocol::TestCounts {
                    passes: 1,
                    failures: 0,
                    pending: 0,
                    duration_ms: 10,
                },
            },
        ]
    }

    #[test]
    fn test_ordered_event_merging_1000_shuffles() {
        let spec_order = vec![
            "test/a.test.js".to_string(),
            "test/b.test.js".to_string(),
            "test/c.test.js".to_string(),
            "test/d.test.js".to_string(),
        ];

        let file_events: Vec<(String, Vec<Event>)> = vec![
            (
                "test/a.test.js".into(),
                sample_file_events("test/a.test.js", "s_a", "t_a"),
            ),
            (
                "test/b.test.js".into(),
                sample_file_events("test/b.test.js", "s_b", "t_b"),
            ),
            (
                "test/c.test.js".into(),
                sample_file_events("test/c.test.js", "s_c", "t_c"),
            ),
            (
                "test/d.test.js".into(),
                sample_file_events("test/d.test.js", "s_d", "t_d"),
            ),
        ];

        // 1. Establish the golden ordered sequence
        let mut golden_reporter = RecordingReporter::default();
        let mut golden_merger = EventMerger::new(spec_order.clone(), MergeMode::Ordered);
        for (file, events) in &file_events {
            for ev in events {
                golden_merger.push(file, ev.clone(), &mut golden_reporter);
            }
        }
        let golden_summary = golden_merger.finish(&mut golden_reporter).unwrap();
        assert_eq!(golden_reporter.events.len(), 20);

        // 2. Perform 1000 random interleave runs
        // We simulate workers completing operations at different times using pseudo-random selection
        let mut rng_state: u64 = 0xdeadbeef_cafebabe;
        let mut next_rand = || -> usize {
            rng_state ^= rng_state << 13;
            rng_state ^= rng_state >> 7;
            rng_state ^= rng_state << 17;
            rng_state as usize
        };

        for run_idx in 0..1000 {
            // Flatten all events as (file, event) preserving intra-file order
            let mut queues: Vec<(String, Vec<Event>)> = file_events.clone();
            let mut reporter = RecordingReporter::default();
            let mut merger = EventMerger::new(spec_order.clone(), MergeMode::Ordered);

            while queues.iter().any(|(_, evs)| !evs.is_empty()) {
                let non_empty_indices: Vec<usize> = queues
                    .iter()
                    .enumerate()
                    .filter_map(|(idx, (_, evs))| if !evs.is_empty() { Some(idx) } else { None })
                    .collect();

                let choice = non_empty_indices[next_rand() % non_empty_indices.len()];
                let (ref file, ref mut evs) = queues[choice];
                let ev = evs.remove(0);
                merger.push(file, ev, &mut reporter);
            }

            let summary = merger.finish(&mut reporter).unwrap();

            assert_eq!(
                reporter.events.len(),
                golden_reporter.events.len(),
                "Mismatch on run {}",
                run_idx
            );
            assert_eq!(
                reporter.events, golden_reporter.events,
                "Events diverged on run {}",
                run_idx
            );
            assert_eq!(
                summary, golden_summary,
                "Summary diverged on run {}",
                run_idx
            );
        }
    }

    #[test]
    fn test_streaming_mode_emits_immediately() {
        let spec_order = vec!["test/a.test.js".into(), "test/b.test.js".into()];
        let mut reporter = RecordingReporter::default();
        let mut merger = EventMerger::new(spec_order, MergeMode::Streaming);

        // Send file b first
        let b_events = sample_file_events("test/b.test.js", "s_b", "t_b");
        for ev in b_events {
            merger.push("test/b.test.js", ev, &mut reporter);
        }

        // In streaming mode, file b events are emitted immediately
        assert_eq!(reporter.events.len(), 5);
        assert!(matches!(
            reporter.events[0],
            Event::SuiteStart { ref file, .. } if file == "test/b.test.js"
        ));

        let summary = merger.finish(&mut reporter).unwrap();
        assert_eq!(summary.passes, 1);
    }
}
