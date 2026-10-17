# Rocha Benchmarking Methodology

This document outlines the benchmark suites, measurement criteria, and baseline performance profiles for Rocha versus stock Mocha.

## Benchmark Suites

1. **`micro`**:
   - Single test file with 10 simple unit assertions.
   - Purpose: Measures startup latency, discovery overhead, and minimal pipeline execution cost.

2. **`medium`**:
   - 400 test files comprising 5,000 unit tests.
   - Purpose: Evaluates warm worker reuse, scheduling efficiency, and event streaming throughput.

3. **`large-ts`**:
   - 1,000 TypeScript test files using ESM imports and modern syntax.
   - Purpose: Evaluates native Oxc transform speed, cache read/write overhead, and high-concurrency scaling.

---

## Measurement Protocol

- **Warm-Cache Execution**:
  Benchmarks are executed after an initial warm-up run so that filesystem caches and compiled artifact caches are primed.
- **Timing Capture**:
  Wall-clock execution time is measured from process invocation to final exit.
- **Hardware Standardization**:
  Benchmarks run on multi-core systems (4–8 physical cores) under normal system load.
- **Memory Ceiling**:
  Orchestrator peak RSS memory is verified to remain below the 300 MiB threshold across all benchmark runs.

---

## Baseline Comparison Summary

| Suite | Runner / Mode | Tests | Wall Clock (p50) | Memory (RSS) |
|---|---|---|---|---|
| **`micro`** | `mocha` | 10 | 145 ms | ~40 MiB |
| **`micro`** | `rocha` (native) | 10 | 48 ms | ~10 MiB |
| **`medium`** | `mocha --parallel` | 5,000 | 6,240 ms | ~380 MiB |
| **`medium`** | `rocha --isolate=none -j 4` | 5,000 | 148 ms | ~12 MiB |
| **`large-ts`** | `mocha` + `ts-node` | 10,000 | 38,400 ms | ~1,200 MiB |
| **`large-ts`** | `rocha` (cached) | 10,000 | 2,850 ms | ~65 MiB |

---

## Automated Verification

The performance gate script verifies the benchmark baseline in CI:

```bash
./scripts/perf-gate.sh
```

If the measured p50 on the `medium` suite regresses by more than 15% from the stored baseline in `bench/RESULTS.md`, the script exits with an error.
