use rocha_sched::timings::{
    compute_file_key, order_files_longest_first, simulate_schedule, TimingStore, TIMINGS_VERSION,
};
use std::fs;
use std::path::{Path, PathBuf};

#[test]
fn test_simulated_scheduler_makespan_improvement_on_skewed_distribution() {
    // 6 fast files (10ms each) named lexically early (a..f)
    // 1 heavy file (150ms) named lexically late (z_heavy)
    let fast_files: Vec<PathBuf> = (b'a'..=b'f')
        .map(|c| PathBuf::from(format!("/tests/{}.js", c as char)))
        .collect();
    let heavy_file = PathBuf::from("/tests/z_heavy.js");

    let mut all_files_lexical = fast_files.clone();
    all_files_lexical.push(heavy_file.clone());
    all_files_lexical.sort();

    // Map each file to its actual duration
    let get_duration = |p: &Path| -> f64 {
        if p.to_string_lossy().contains("z_heavy") {
            150.0
        } else {
            10.0
        }
    };

    let lexical_durations: Vec<f64> = all_files_lexical.iter().map(|f| get_duration(f)).collect();
    let num_workers = 2;
    let lexical_makespan = simulate_schedule(&lexical_durations, num_workers);

    // Lexical schedule on 2 workers:
    // W0: a(10), c(10), e(10), z_heavy(150) = 180ms
    // W1: b(10), d(10), f(10) = 30ms
    assert_eq!(lexical_makespan, 180.0);

    // Populate timing store with historical durations
    let root = Path::new("/tests");
    let mut store = TimingStore::new();
    for f in &all_files_lexical {
        let key = compute_file_key(root, f);
        store.record_duration(&key, get_duration(f));
    }

    // Reorder files using longest-first scheduler
    let ordered_files = order_files_longest_first(&all_files_lexical, &store, root);
    assert_eq!(
        ordered_files[0], heavy_file,
        "Heavy file must be scheduled first"
    );

    let ordered_durations: Vec<f64> = ordered_files.iter().map(|f| get_duration(f)).collect();
    let longest_first_makespan = simulate_schedule(&ordered_durations, num_workers);

    // Longest-first schedule on 2 workers:
    // W0: z_heavy(150) = 150ms
    // W1: a(10), b(10), c(10), d(10), e(10), f(10) = 60ms
    assert_eq!(longest_first_makespan, 150.0);

    // Assert strictly better makespan
    assert!(
        longest_first_makespan < lexical_makespan,
        "Longest-first makespan ({}) must improve on lexical makespan ({})",
        longest_first_makespan,
        lexical_makespan
    );
}

#[test]
fn test_unknown_files_use_median() {
    let root = Path::new("/test_root");
    let mut store = TimingStore::new();

    let f1 = PathBuf::from("/test_root/f1.js");
    let f2 = PathBuf::from("/test_root/f2.js");
    let f3 = PathBuf::from("/test_root/f3.js");
    let unknown = PathBuf::from("/test_root/unknown.js");

    store.record_duration(&compute_file_key(root, &f1), 10.0);
    store.record_duration(&compute_file_key(root, &f2), 50.0);
    store.record_duration(&compute_file_key(root, &f3), 100.0);

    // Median of [10, 50, 100] is 50.0
    assert_eq!(store.median_duration(), 50.0);

    let unknown_key = compute_file_key(root, &unknown);
    assert_eq!(store.estimate_duration(&unknown_key), 50.0);
}

#[test]
fn test_ema_merging_across_runs() {
    let mut store = TimingStore::new();
    let key = "test/suite.js:abc123456789";

    // Run 1: 100.0ms
    store.record_duration(key, 100.0);
    assert_eq!(store.entries.get(key).unwrap().duration_ms, 100.0);
    assert_eq!(store.entries.get(key).unwrap().samples, 1);

    // Run 2: 200.0ms with alpha 0.3 -> 0.3 * 200 + 0.7 * 100 = 130.0ms
    store.record_duration(key, 200.0);
    let entry = store.entries.get(key).unwrap();
    assert!((entry.duration_ms - 130.0).abs() < 1e-6);
    assert_eq!(entry.samples, 2);
}

#[test]
fn test_versioned_format_and_corruption_tolerance() {
    let temp_dir = std::env::temp_dir().join(format!("rocha_timings_test_{}", std::process::id()));
    fs::create_dir_all(&temp_dir).unwrap();
    let timings_path = temp_dir.join("timings.json");

    // 1. Missing file loads as empty default
    let store = TimingStore::load(&timings_path);
    assert_eq!(store.version, TIMINGS_VERSION);
    assert!(store.entries.is_empty());

    // 2. Save valid store atomically
    let mut store = TimingStore::new();
    store.record_duration("a.js:123", 42.0);
    store.save(&timings_path).expect("save succeeds");
    assert!(timings_path.exists());

    // Load back and verify
    let loaded = TimingStore::load(&timings_path);
    assert_eq!(loaded.entries.get("a.js:123").unwrap().duration_ms, 42.0);

    // 3. Corrupt file content
    fs::write(&timings_path, b"{\"invalid_json: true").unwrap();
    let recovered = TimingStore::load(&timings_path);
    assert!(
        recovered.entries.is_empty(),
        "Corrupt file should recover to empty store"
    );

    // 4. Truncated empty file
    fs::write(&timings_path, b"").unwrap();
    let empty_recovered = TimingStore::load(&timings_path);
    assert!(empty_recovered.entries.is_empty());

    // 5. Incompatible schema version
    fs::write(
        &timings_path,
        br#"{"version": 99, "alpha": 0.3, "entries": {}}"#,
    )
    .unwrap();
    let version_reset = TimingStore::load(&timings_path);
    assert_eq!(version_reset.version, TIMINGS_VERSION);

    let _ = fs::remove_dir_all(&temp_dir);
}
