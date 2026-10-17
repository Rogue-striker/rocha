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

## 2. Latest Benchmark Numbers: High-Performance Checkpoint

In Task `A-7` and performance optimization pass, `rocha --compat-mocha` native file discovery, parallel `oxc` transpilation, disk cache (`.rocha/cache/v1`), SIMD base64 source map inlining, and parallel execution are evaluated against stock Mocha:

| Suite | Runner / Mode | Total Tests | Pass / Fail | p50 Wall Time (ms) | p95 Wall Time (ms) | Speedup vs Baseline |
|---|---|---|---|---|---|---|
| `small` | `mocha` (serial) | 500 | 500 / 0 | 116 ms | 128 ms | 1.0x (baseline) |
| `small` | `rocha --compat-mocha` | 500 | 500 / 0 | 88 ms | 96 ms | **1.32x** |
| `medium` | `mocha` (serial) | 5,000 | 5,000 / 0 | 467 ms | 512 ms | 1.0x (baseline) |
| `medium` | `rocha --compat-mocha` | 5,000 | 5,000 / 0 | 382 ms | 415 ms | **1.22x** |
| `large-ts` | `mocha` + `ts-node` (serial baseline) | 20,000 | 20,000 / 0 | 1,793 ms | 1,885 ms | 1.0x (baseline) |
| `large-ts` | `mocha` (parallel baseline) | 20,000 | 20,000 / 0 | 1,153 ms | 1,220 ms | 1.0x (parallel baseline) |
| `large-ts` | `rocha --compat-mocha` (serial warm) | 20,000 | 20,000 / 0 | 1,720 ms | 1,760 ms | **1.04x vs serial** |
| `large-ts` | `rocha --compat-mocha` (parallel warm) | 20,000 | 20,000 / 0 | **988 ms** | **1,009 ms** | **1.81x vs serial, 1.17x vs parallel** |

### Test Parity
- **Total Tests**: Exactly 20,000 passing, 0 failing across all 1,500 TypeScript files.
- **Result Parity**: 100% byte-for-byte pass/fail count match with stock Mocha.

---

## 3. Summary & Optimizations Delivered

Key optimizations unlocking sub-second execution on the 20,000-test `large-ts` suite:
1. **Targeted Prefix Walking & Pruning (`rocha-discover`)**: Extracts static path prefixes before glob magic characters and filters out ignored directories (`.git`, `node_modules`, `target`, `.rocha`) early in `WalkDir`, reducing traversal from 50,000+ files to direct test directories in ~1–2 ms.
2. **Fast Manifest Mtime Validation (`rocha-cli/compat.rs`)**: Verifies manifest freshness against source file timestamps before touching disk cache, skipping redundant parallel re-hashing and 14 MB serialization on warm runs.
3. **Rust SIMD Source Map Inlining**: Inlines Base64 data URLs via `base64-simd` during transform/manifest preparation, completely eliminating runtime `Buffer.from().toString('base64')` overhead across 1,500 modules in Node.js.
4. **Mocha Worker Scheduling Optimization**: Omits redundant single-job overrides to let Mocha automatically schedule across all CPU cores (`os.cpus().length - 1`), while preserving single-argument spec forwarding to minimize worker process spawn serialization.
