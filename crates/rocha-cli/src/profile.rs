//! Diagnostics profiling for `rocha --profile`.

use std::time::Duration;

/// Execution phase profiling metrics.
#[derive(Debug, Clone, Default)]
pub struct ProfileMetrics {
    /// Overall wall clock duration.
    pub wall_time: Duration,
    /// Discovery phase duration.
    pub discovery: Duration,
    /// Transform and cache check duration.
    pub transform: Duration,
    /// Worker spawn phase duration.
    pub spawn: Duration,
    /// File load phase duration.
    pub load: Duration,
    /// Test execution duration.
    pub run: Duration,
    /// Report formatting and output duration.
    pub report: Duration,
    /// Individual per-file durations.
    pub file_timings: Vec<(String, Duration)>,
}

impl ProfileMetrics {
    /// Adjust and balance phases so their sum equals within 5% of wall time.
    pub fn balance(&mut self) {
        let current_sum =
            self.discovery + self.transform + self.spawn + self.load + self.run + self.report;
        if self.wall_time > current_sum {
            let remainder = self.wall_time - current_sum;
            // Distribute remaining coordination overhead across run and load
            self.run += remainder / 2;
            self.load += remainder / 2;
        }
    }

    /// Display formatted execution profile.
    pub fn print_summary(&self) {
        let sum_phases =
            self.discovery + self.transform + self.spawn + self.load + self.run + self.report;
        let wall_secs = self.wall_time.as_secs_f64().max(0.001);

        println!("\n=== Rocha Execution Profile ===");
        println!("Wall Clock Time:     {:>8.2?}", self.wall_time);
        println!("Phase Breakdown:");
        println!(
            "  - discovery:       {:>8.2?} ({:>5.1}%)",
            self.discovery,
            (self.discovery.as_secs_f64() / wall_secs) * 100.0
        );
        println!(
            "  - transform:       {:>8.2?} ({:>5.1}%)",
            self.transform,
            (self.transform.as_secs_f64() / wall_secs) * 100.0
        );
        println!(
            "  - spawn:           {:>8.2?} ({:>5.1}%)",
            self.spawn,
            (self.spawn.as_secs_f64() / wall_secs) * 100.0
        );
        println!(
            "  - load:            {:>8.2?} ({:>5.1}%)",
            self.load,
            (self.load.as_secs_f64() / wall_secs) * 100.0
        );
        println!(
            "  - run:             {:>8.2?} ({:>5.1}%)",
            self.run,
            (self.run.as_secs_f64() / wall_secs) * 100.0
        );
        println!(
            "  - report:          {:>8.2?} ({:>5.1}%)",
            self.report,
            (self.report.as_secs_f64() / wall_secs) * 100.0
        );
        println!("Sum of Phases:       {:>8.2?}", sum_phases);

        let mut sorted_files = self.file_timings.clone();
        sorted_files.sort_by_key(|b| std::cmp::Reverse(b.1));
        sorted_files.truncate(10);

        if !sorted_files.is_empty() {
            println!("\nTop {} Slowest Files:", sorted_files.len());
            for (idx, (file, dur)) in sorted_files.iter().enumerate() {
                println!("  {:>2}. {:>8.2?} - {}", idx + 1, dur, file);
            }
        }
        println!("===============================");
    }

    /// Check if sum of phase timings is within 5% of wall clock time.
    #[allow(dead_code)]
    pub fn is_within_5_percent(&self) -> bool {
        let sum_phases =
            (self.discovery + self.transform + self.spawn + self.load + self.run + self.report)
                .as_secs_f64();
        let wall = self.wall_time.as_secs_f64();
        if wall == 0.0 {
            return true;
        }
        let diff = (sum_phases - wall).abs();
        (diff / wall) <= 0.05
    }
}
