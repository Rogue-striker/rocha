# Migrating from Mocha to Rocha

Rocha is designed as a drop-in replacement for the `mocha` CLI. This guide provides a step-by-step migration checklist and documents compatibility details.

## Quick Migration Checklist

1. **Replace the CLI command**:
   In your `package.json` scripts:
   ```diff
   - "test": "mocha \"test/**/*.spec.js\""
   + "test": "rocha \"test/**/*.spec.js\""
   ```

2. **Remove TypeScript Transpile Dependencies**:
   If you were using `ts-node` or `tsx` solely for running Mocha tests:
   ```diff
   - "test": "mocha -r ts-node/register \"test/**/*.spec.ts\""
   + "test": "rocha \"test/**/*.spec.ts\""
   ```
   Rocha natively strips types using the Oxc compiler and maintains an on-disk transform cache.

3. **Check Configuration Files**:
   Rocha automatically reads the following standard Mocha config formats:
   - `.mocharc.json`, `.mocharc.jsonc`
   - `.mocharc.yaml`, `.mocharc.yml`
   - `.mocharc.js`, `.mocharc.cjs`
   - `package.json` under `"mocha"` key
   - Custom config via `--config <path>`

4. **Select Isolation Mode**:
   - **`--isolate=none` (Default for max speed)**: Reuses warm worker processes across files. Ideal for modern, modular test suites without mutable global singletons.
   - **`--isolate=file`**: Spawns a clean Node worker for each test file, matching Mocha's isolated behavior.

---

## Supported Mocha Flags

| Category | Supported Flags | Notes |
|---|---|---|
| **Test Filtering** | `--grep`, `--fgrep`, `--invert`, `--forbid-only`, `--forbid-pending` | Exact regex and substring match parity |
| **Execution** | `--parallel`, `-j`, `--jobs`, `--bail`, `--retries`, `--timeout`, `--slow` | Parallel execution with timing-aware scheduling |
| **Isolation** | `--isolate=none`, `--isolate=file` | Rocha extension for persistent warm workers |
| **Reporters** | `spec`, `dot`, `min`, `list`, `tap`, `json`, `json-stream`, `xunit` | Native high-speed formatting and JS bridge support |
| **Preload / Loaders** | `--require`, `--import`, `--file`, `--loader`, `--node-option` | Passes directly to worker Node processes |
| **Diagnostics** | `--dry-run`, `--fail-zero`, `--check-leaks`, `--doctor`, `--profile` | Leak detection and timing breakdown |

---

## Differences and Enhancements

1. **Orchestrator-Side Hard Timeouts**:
   Unlike Mocha, where runaway synchronous loops can freeze the runner process indefinitely, Rocha's native orchestrator enforces process-level hard timeouts (`timeout + 2000ms`), safely terminating hung workers and reporting failures.

2. **Timing-Aware Scheduler**:
   Rocha records historic test durations in `.rocha/timings.json` and uses an Exponential Moving Average (EMA) to schedule longer test files first across worker threads, minimizing pipeline makespan.

3. **Disk Transform Cache**:
   TypeScript and JSX files are parsed and transformed in native Rust code, storing compiled outputs in `.rocha/cache/` keyed by file content hash, compiler options, and dependency hashes.
