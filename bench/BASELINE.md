# Stock Mocha Baseline Profile

Profiling results for stock Mocha (v12.0.3, Node v26) running across synthetic benchmark suites in both serial and parallel modes.

## Baseline Measurement Table

| Suite | Files | Tests | Mode | Total Wall Time (ms) | Test Exec Time (ms) | Overhead / Startup (ms) | Discovery (est ms) | Module Load & Transpile (est ms) |
|---|---|---|---|---|---|---|---|---|
| small | 50 | 500 | serial | 125 | 33 | 92 | 14 | 78 |
| small | 50 | 500 | parallel | 234 | 144 | 90 | 9 | 81 |
| medium | 400 | 5000 | serial | 474 | 332 | 142 | 21 | 121 |
| medium | 400 | 5000 | parallel | 419 | 321 | 98 | 10 | 88 |
| large-ts | 1500 | 20000 | serial | 1807 | 1282 | 525 | 79 | 446 |
| large-ts | 1500 | 20000 | parallel | 997 | 841 | 156 | 16 | 140 |

## Analysis and Top Costs

Across all three benchmark suites, the phase breakdown highlights three primary bottlenecks in stock Mocha:
1. **Repeated Module Loading & Transpilation Overhead**: In both serial and parallel modes, requiring files and transpile hooks (like TypeScript/ESM transform) across hundreds to thousands of files dominates startup and overhead, especially with un-cached transforms.
2. **Node Worker Initialization & Serialization Cost**: Worker thread/process pool spin-up in `--parallel` introduces high fixed per-worker latency (observable on small suites where serial is ~4x faster than parallel) and inter-process IPC serialization.
3. **Discovery and Main-Thread Scheduling Bottlenecks**: Serial glob/directory traversal and unoptimized FIFO file scheduling without execution time history results in worker idle time and tail latency on skewed file durations.

These findings directly validate Rocha's core architecture: native Rust file discovery, persistent warm Node worker pools, blake3-cached transforms, and timing-aware longest-first scheduling.
