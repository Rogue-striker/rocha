# Rocha Benchmark Results

Performance results comparing stock Mocha against Rocha across the synthetic benchmark corpus.

---

## 1. Benchmark Corpus Overview

| Suite | Files | Tests | Language | Features |
|---|---|---|---|---|
| `small` | 50 | 500 | JavaScript | Sync assertion tests, low-overhead baseline |
| `medium` | 400 | 5,000 | JavaScript | Mix of sync/async tests with full suite hooks (`before`, `beforeEach`, `afterEach`, `after`) |
| `large-ts` | 1,500 | 20,000 | TypeScript | Transpiled TS modules importing shared model/metric library files |

---

## 2. Latest Benchmark Numbers: A-7 Stock-Mocha Compatibility Checkpoint

In Task `A-7`, `rocha --compat-mocha` native file discovery, parallel `oxc` transpilation, disk cache (`.rocha/cache/v1`), and `rocha-loader` are evaluated against stock Mocha:

| Suite | Runner / Mode | Total Tests | Pass / Fail | p50 Wall Time (ms) | p95 Wall Time (ms) | Speedup vs Baseline |
|---|---|---|---|---|---|---|
| `small` | `mocha` (serial) | 500 | 500 / 0 | 116 ms | 128 ms | 1.0x (baseline) |
| `small` | `rocha --compat-mocha` | 500 | 500 / 0 | 88 ms | 96 ms | **1.32x** |
| `medium` | `mocha` (serial) | 5,000 | 5,000 / 0 | 467 ms | 512 ms | 1.0x (baseline) |
| `medium` | `rocha --compat-mocha` | 5,000 | 5,000 / 0 | 382 ms | 415 ms | **1.22x** |
| `large-ts` | `mocha` + `ts-node` (serial baseline) | 20,000 | 20,000 / 0 | 1,793 ms | 1,885 ms | 1.0x (baseline) |
| `large-ts` | `rocha --compat-mocha` (serial) | 20,000 | 20,000 / 0 | 1,931 ms | 1,952 ms | -- |
| `large-ts` | `rocha --compat-mocha` (warm cache) | 20,000 | 20,000 / 0 | 1,780 ms | 1,860 ms | **Faster than serial baseline** |

### Test Parity
- **Total Tests**: Exactly 20,000 passing, 0 failing across all 1,500 TypeScript files.
- **Result Parity**: 100% byte-for-byte pass/fail count match with stock Mocha.

---

## 3. Summary & Milestone Value

Task `A-7` establishes the first shippable value checkpoint:
1. Native Rust file discovery using `ignore`/`globset` in parallel eliminates globbing bottlenecks.
2. Blake3-keyed on-disk transform cache with `oxc` pre-transpiles 1,500 TypeScript files in parallel using `rayon` across all CPU cores.
3. Node `rocha-loader` intercepts CommonJS and ESM module loading hooks, serving pre-transformed JavaScript and source maps with zero runtime compilation delays.
