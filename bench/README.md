# Rocha Benchmark Corpus

This directory contains synthetic and realistic benchmark suites and benchmarking scripts for Rocha and stock Mocha.

## Benchmark Suites

1. `small`: ~500 tests across 50 plain JS files. Good for low-overhead startup and execution measurement.
2. `medium`: ~5,000 tests across 400 JS files with a mix of synchronous/asynchronous test cases and suite lifecycle hooks (`before`, `beforeEach`, `afterEach`, `after`).
3. `large-ts`: ~20,000 tests across 1,500 TypeScript files importing shared helper modules. Tests transpilation, module graph resolution, and multi-worker scheduling.

## Generating the Suites

The suites are deterministically generated using a seeded pseudo-random generator:

```bash
node bench/generate.mjs --seed 42 --suite all
```

The generator output is guaranteed byte-identical across runs with the same seed.

## Running Benchmarks

```bash
node bench/run.mjs --cmd "npx mocha" --suite small --runs 3
```

The script outputs JSON with individual run durations in milliseconds, p50, and p95.
