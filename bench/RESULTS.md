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

### 2.1 Large TypeScript Suite (`large-ts`: 1,500 files, 20,000 tests)

| Runner / Mode | Total Tests | Pass / Fail | Total Wall Time (p50) | Test Exec Time | Speedup vs Baseline |
|---|---|---|---|---|---|
| `mocha` + `ts-node` (serial baseline) | 20,000 | 20,000 / 0 | 1,793 ms | 1,277 ms | 1.0x (baseline) |
| `mocha` (parallel baseline) | 20,000 | 20,000 / 0 | 1,153 ms | 1,013 ms | 1.0x (parallel baseline) |
| `rocha --compat-mocha` (stock Mocha + rocha loader) | 20,000 | 20,000 / 0 | 988 ms | ~900 ms | **1.81x vs serial, 1.17x vs parallel** |
| `rocha` (**native thin harness**) | 20,000 | 20,000 / 0 | **470 ms** | **442 ms** | **3.81x vs serial, 2.45x vs parallel** |

### 2.2 Small and Medium Suites

| Suite | Runner / Mode | Total Tests | Pass / Fail | p50 Wall Time (ms) | Speedup vs Baseline |
|---|---|---|---|---|---|
| `small` | `mocha` (serial) | 500 | 500 / 0 | 116 ms | 1.0x (baseline) |
| `small` | `rocha` (native) | 500 | 500 / 0 | 58 ms | **2.00x** |
| `medium` | `mocha` (serial) | 5,000 | 5,000 / 0 | 467 ms | 1.0x (baseline) |
| `medium` | `rocha` (native) | 5,000 | 5,000 / 0 | 148 ms | **3.15x** |

### Test Parity
- **Total Tests**: Exactly 20,000 passing, 0 failing across all 1,500 TypeScript files.
- **Result Parity**: 100% byte-for-byte pass/fail count match with stock Mocha.

---

## 3. Why the Test Suite Time Was Constant vs Now 2.8x Faster

1. **In `--compat-mocha` Mode**:
   - Rocha optimized external phases: native file discovery, parallel TS pre-transpilation with `oxc`, and cached transforms.
   - However, the **in-suite test execution time remained fixed (~900–1,000 ms)** because the suite was still executed by stock Mocha's `node_modules/.bin/mocha`. Stock Mocha allocates 20,000 full `Suite` and `Test` prototype instances with heavy event listener graphs, domains, and assertion diff formatting even when all tests pass.
2. **In Native Rocha Mode (`rocha`)**:
   - The test bodies run on Rocha's thin JS test harness ([`harness/src/runner.js`](../harness/src/runner.js) + [`harness/src/builder.js`](../harness/src/builder.js)).
   - Tests execute with minimal plain-object overhead, direct function invocations, and outer-to-inner hooks without heavy prototype chains.
   - The test suite execution time itself dropped from **1,277 ms in Mocha down to 442 ms in Rocha**, achieving a total wall time of **470 ms**.
