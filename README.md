# Rocha

[![CI](https://github.com/Rogue-striker/rocha/actions/workflows/ci.yml/badge.svg)](https://github.com/Rogue-striker/rocha/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Rocha** is a blazing-fast native (Rust) orchestrator for Mocha-style test suites, designed as a drop-in replacement for the `mocha` CLI.

Rocha keeps test execution in standard Node.js workers while shifting file discovery, TypeScript/ESM transforms, process pooling, scheduling, timeouts, and report generation into native compiled code.

---

## Key Highlights

- **Drop-in Mocha Parity**: Supports `.mocharc.*` configuration, standard CLI flags, BDD/TDD/QUnit interfaces, and all Mocha reporters (`spec`, `dot`, `min`, `list`, `tap`, `json`, `xunit`).
- **Instant TypeScript Transforms**: Built-in native [Oxc](https://oxc.rs) transformer. Run `.ts`, `.tsx`, `.mts` test files directly without `ts-node`, `tsx`, or compilation build steps.
- **Warm Worker Pools**: Sub-150ms execution on medium test suites (400 files, 5,000 tests) via `--isolate=none`.
- **Timing-Aware Scheduling**: Historic run times are tracked and scheduled using an Exponential Moving Average (EMA) to minimize pipeline makespan.
- **Orchestrator-Side Hard Timeouts**: Process-level timeouts prevent runaway infinite loops from freezing your test runner.
- **Smart Watch Mode**: AST-based import graph analysis reruns only tests affected by changed files.
- **Zero Heavy Dependencies**: Lightweight npm wrapper with prebuilt native binaries for Linux, macOS, and Windows.

---

## Quickstart

Run Rocha in any existing Mocha repository using `npx`:

```bash
npx rocha "test/**/*.spec.ts"
```

Or install locally in your project:

```bash
npm install --save-dev rocha
npx rocha --parallel -j 4 "test/**/*.test.js"
```

---

## Documentation

- [Quickstart Guide](docs/quickstart.md) - Installation and basic usage.
- [Migration Guide](docs/migration-from-mocha.md) - Drop-in checklist for migrating from `mocha`.
- [CLI Flag Reference](docs/flags.md) - Complete documentation of all command-line options.
- [Isolation Model](docs/isolation.md) - Detailed guide to `--isolate=none` vs `--isolate=file`.
- [Architecture Overview](docs/architecture.md) - High-level system topology and crate breakdown.
- [Benchmarking Methodology](docs/benchmarking.md) - Performance metrics and replication instructions.
- [Cross-Platform Support](docs/cross-platform.md) - Linux, macOS, and Windows compatibility.
- [Error UX Guidelines](docs/errors.md) - Exact error messages and diagnostics.
- [Real-World Corpus](docs/realworld-report.md) - Evaluation across 10 open-source Mocha repositories.
- [Compatibility Ledger](COMPAT.md) - 100% pass rate across conformance fixtures.

---

## Performance Snapshot

| Test Suite | Mocha + ts-node | Rocha (Warm Cache) | Speedup |
|---|---|---|---|
| **`medium`** (400 files, 5,000 tests) | 6.2s | **148 ms** | **42x** |
| **`large-ts`** (1,000 files, 10,000 tests) | 38.4s | **2.85s** | **13.5x** |

---

## License

MIT © Rocha Contributors
