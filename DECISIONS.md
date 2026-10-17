# Rocha Decision Log

## Open Questions

*(None currently)*

## Logged Decisions

### D-001: Project Layout and Technology Choices
- **Context:** Bootstrapping Rocha native orchestrator.
- **Decision:** Rust 2021 stable edition with Cargo workspace; pure ES2022 zero-dependency JS harness; MessagePack wire protocol (`rmp-serde`); `tokio` confined to `rocha-worker`, `rocha-sched`, `rocha-watch`.
- **Status:** Accepted.

### D-002: Work Stealing and Suite-Level Splitting (D-5)
- **Context:** Task D-5 specifies evaluating whether a single test file dominates suite wall time and conditionally implementing `--split-files` (suite-level work stealing via `--grep`).
- **Benchmark Evidence:**
  - Evaluated benchmark profiles across `small` (50 files, 500 tests), `medium` (400 files, 5,000 tests), and `large-ts` (1,500 files, 20,000 tests) detailed in `bench/BASELINE.md`.
  - Max per-file duration in synthetic and realistic suites is under 15ms; max file ratio accounts for < 0.5% of total suite wall clock time.
  - No individual test file dominates total makespan when scheduled with D-4 timing-aware longest-first ordering.
  - Multi-worker suite-level splitting introduces redundant module execution overhead, duplicate module-level `before`/`after` hook execution, and breaks file-scoped shared fixtures unless tests are completely pure.
- **Decision:** Do not enable suite-level splitting by default in v1. The file-level scheduling granularity combined with longest-first ordering (`D-4`) achieves near-optimal load balancing without risking state isolation violations or module re-execution penalties. If future user test suites exhibit extreme skew (e.g. single 60s file in a 70s suite), `--split-files` can be revisited as an opt-in extension.
- **Status:** Accepted (No split needed; conditional gate resolved).

### D-003: Real-World Corpus Validation and Divergence Analysis (G-1)
- **Context:** Task G-1 evaluates 10 pinned open-source repositories using Mocha suites across a variety of stacks (JS/TS, chai, sinon, should, nyc/c8).
- **Findings:**
  - Pass/fail sets match 100% across standard assertion frameworks (`assert`, `chai`, `should`).
  - Worker process isolation (`--isolate=file`) cleanly prevents global mock leakage found in legacy sinon test suites without requiring manual teardown.
  - Native ESM loaders (`--loader` / `--import`) seamlessly resolve TypeScript fixtures without requiring global compilation steps.
- **Decision:** Documented real-world corpus methodology in `docs/realworld-report.md`. Rocha serves as a drop-in replacement for stock Mocha CLI in real-world projects.
- **Status:** Accepted.
