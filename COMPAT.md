# Rocha Compatibility & Divergence Log

This document records known intentional differences and execution modes compared to stock Mocha, each with a rationale.

## Isolation Modes (`--isolate`)

| Mode | Process Lifecycle | Shared State & Require Cache | Best For | Tradeoffs |
|---|---|---|---|---|
| `--isolate=file` *(default)* | Fresh Node worker process per file | Fully isolated. No leakage of globals, singletons, or mock state across files. | Suites with side effects, global state mutations, or legacy pollution. | Slower if unmitigated; Rocha hides this overhead by pre-spawning warm spare workers in background. |
| `--isolate=none` | Worker reused across files sequentially | Shared `globalThis` and `require` cache across files in the same worker slot. Matches serial Mocha. | Cooperative suites, read-only suites, or suites relying on shared global initialization from early files. | Tests mutating global variables or mocks can cause order-dependent flakiness if run out of order. |

## Known Divergences

| Divergence | Mocha Behavior | Rocha Behavior | Rationale |
|---|---|---|---|
| Default Worker Isolation | Stock Mocha runs tests in a single Node process (`serial`) or threads/subprocesses (`parallel`). | Defaults to `--isolate=file` for deterministic hermetic test execution across files. | Prevents silent cross-file state leakage while retaining high parallelism via pre-spawned warm workers. |
