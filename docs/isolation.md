# Rocha Isolation Model

One of Rocha's primary performance advantages stems from its dual isolation architecture. This document explains the differences between `--isolate=none` and `--isolate=file`, how warm workers operate, and best practices for configuring test suites.

## Overview

In traditional test runners like stock Mocha with `--parallel`, each test file typically incurs the overhead of spawning a brand-new Node.js process. On modern OSes, spawning and initializing Node (V8 VM setup, core module bootstrapping, standard library initialization, and npm module resolution) takes 50–120ms per file. For a 400-file suite, this translates into 20–40 seconds of pure runtime bootstrapping overhead.

Rocha offers two execution models:

```
+--------------------------------------------------------------------+
|                         ROCHA ORCHESTRATOR                         |
+--------------------------------------------------------------------+
          |                                        |
          v                                        v
   [--isolate=none]                         [--isolate=file]
+----------------------+                 +----------------------+
| Warm Worker Pool     |                 | Fresh Worker Subproc |
| Worker 1: [File A]   |                 | Worker 1 -> [File A] |
| Worker 1: [File B]   |                 | Worker 1 terminates  |
| Worker 1: [File C]   |                 | Worker 2 -> [File B] |
| (Kept alive, warm)   |                 | (Clean VM per file)  |
+----------------------+                 +----------------------+
```

---

## 1. Warm Worker Pool (`--isolate=none`)

- **Default Behavior**: Worker processes are spawned once up to the concurrency limit (`-j`) and kept alive throughout the test run.
- **Speed**: Sub-150ms total execution time on medium test suites (400 files / 5,000 tests).
- **Harness Cleanup**:
  - The JS harness clears the `require.cache` for tested modules between files.
  - Test suites, hooks, and context state are reset prior to loading subsequent files.
  - Global event listeners registered through the harness are deregistered.
- **Best Suited For**:
  - Pure unit tests and integration tests that do not mutate global singletons or monkey-patch core prototypes without restoring them.
  - Suites using dependency injection or proper `beforeEach` / `afterEach` setup and teardown.

---

## 2. Process-Level Isolation (`--isolate=file`)

- **Behavior**: A dedicated Node.js worker process is spawned for each test file and terminates immediately upon file completion.
- **Guarantees**:
  - 100% complete OS-level isolation.
  - Native C++ addons and un-resettable V8 internal states cannot leak into other files.
  - Unclosed file descriptors, sockets, or lingering intervals are terminated with the process.
- **Best Suited For**:
  - Legacy test suites where tests heavily modify global variables, environment variables, or global prototypes.
  - Complex end-to-end integration tests that spin up in-process servers or background timers.

---

## Process Lifecycle and Hard Timeouts

Regardless of the isolation mode chosen, Rocha protects the developer experience with orchestrator-side hard timeouts:

- If a test file hangs (e.g. infinite `while (true)` loop or deadlocked lock), the Rust orchestrator issues a `SIGTERM` followed by a `SIGKILL` after the configured timeout expires.
- Remaining worker processes continue executing without stalling the overall pipeline.
- No zombie Node processes remain after Rocha exits.
