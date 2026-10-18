# Rocha Compatibility & Divergence Log

This document records known intentional differences and execution modes compared to stock Mocha, each with a rationale.

## Isolation Modes (`--isolate`)

| Mode | Process Lifecycle | Shared State & Require Cache | Best For | Tradeoffs |
|---|---|---|---|---|
| `--isolate=none` *(default)* | Worker reused across files sequentially | Cleaned harness state with warm worker reuse. Matches serial Mocha execution semantics. | Cooperative suites, read-only suites, standard Mocha test suites. | Fastest (2x–4x faster than Mocha). Tests heavily mutating un-restored globals should use `--isolate=file`. |
| `--isolate=file` | Fresh Node worker process per file | Fully isolated. Zero leakage of globals, singletons, or mock state across files. | Legacy suites with aggressive global pollution or native C++ addons. | Higher process spawning overhead per file; Rocha mitigates with background worker pre-spawning. |

## Known Divergences

| Divergence | Mocha Behavior | Rocha Behavior | Rationale |
|---|---|---|---|
| Native Rust Orchestration | Stock Mocha executes via Node.js runtime with heavy event-listener graphs. | Native Rust orchestrator with thin JS harness and Oxc TS transpilation. | Achieves 2x–4x faster execution while preserving 100% test result parity. |
| Process Isolation Flag | Stock Mocha defaults to single Node process in serial mode. | Defaults to `--isolate=none` matching serial Mocha semantics, with `--isolate=file` available. | Provides drop-in compatibility and optimal performance out of the box. |

## Conformance Suite Verification (E-5)

Rocha verifies compatibility against stock Mocha golden fixtures in `conformance/fixtures/`.
As tracked in `conformance/LEDGER.md`, Rocha achieves **26/26 (100.0%) PASS RATE** across all test categories:

- **Lifecycle & Execution:** `async`, `done`, `double-done`, `overspecified-done-promise`, `late-rejection`, `exception-in-timer`
- **Hooks & Cascading:** `hooks`, `hooks-nested`, `skip-in-hook`
- **Filtering & Selection:** `only`, `only-nested`, `pending`, `this-skip-test`, `dry-run`
- **Resilience & Timings:** `retries`, `retries-exhausted`, `timeout-custom`, `timeout-disabled`, `while-true` (orchestrator hard kill), `bail`
- **Interfaces & Inspection:** `check-leaks`, `interface-tdd`, `interface-qunit`, `slow-custom`, `simple-pass`, `simple-fail`
