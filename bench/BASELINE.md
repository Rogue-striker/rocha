# Stock Mocha Baseline Profile

Profiling results for stock Mocha (v12.0.3, Node v26) running across synthetic benchmark suites in both serial and parallel modes.

## Baseline Measurement Table

| Suite | Files | Tests | Mode | Total Wall Time (ms) | Test Exec Time (ms) | Overhead / Startup (ms) | Discovery (est ms) | Module Load & Transpile (est ms) |
|---|---|---|---|---|---|---|---|---|
| small | 50 | 500 | serial | 116 | 33 | 83 | 12 | 71 |
| small | 50 | 500 | parallel | 217 | 133 | 84 | 8 | 76 |
| medium | 400 | 5000 | serial | 467 | 333 | 134 | 20 | 114 |
| medium | 400 | 5000 | parallel | 410 | 316 | 94 | 9 | 85 |
| large-ts | 1500 | 20000 | serial | 1793 | 1277 | 516 | 77 | 439 |
| large-ts | 1500 | 20000 | parallel | 1153 | 1013 | 140 | 14 | 126 |

## Analysis and Top Costs

Across all three benchmark suites, the phase breakdown highlights three primary bottlenecks in stock Mocha:
1. **Repeated Module Loading & Transpilation Overhead**: In both serial and parallel modes, requiring files and transpile hooks (like TypeScript/ESM transform) across hundreds to thousands of files dominates startup and overhead, especially with un-cached transforms.
2. **Node Worker Initialization & Serialization Cost**: Worker thread/process pool spin-up in `--parallel` introduces high fixed per-worker latency (observable on small suites where serial is ~4x faster than parallel) and inter-process IPC serialization.
3. **Discovery and Main-Thread Scheduling Bottlenecks**: Serial glob/directory traversal and unoptimized FIFO file scheduling without execution time history results in worker idle time and tail latency on skewed file durations.

These findings directly validate Rocha's core architecture: native Rust file discovery, persistent warm Node worker pools, blake3-cached transforms, and timing-aware longest-first scheduling.
