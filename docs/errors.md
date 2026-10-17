# Rocha Error Handling and Exit Codes Specification

Rocha provides deterministic, human-readable error diagnostics and maintains strict exit code compatibility with Mocha and POSIX process standards.

---

## 1. Exit Codes

| Exit Code | Meaning | Context / Behavior |
|---|---|---|
| `0` | Success | All discovered test cases passed cleanly. |
| `1..255` | Test Failures | Number of test case failures, capped at 255 (exact Mocha parity). |
| `1` | Orchestrator Error | Configuration error, no matching test specs, loader error, Node runtime error, or protocol mismatch. |
| `130` | Interrupted (SIGINT) | Process terminated via `SIGINT` (Ctrl+C). Workers are reaped with zero zombies. |
| `143` | Terminated (SIGTERM) | Process terminated via `SIGTERM`. Graceful cleanup and teardown. |

---

## 2. Standard Error Messages and Diagnostics

Rocha emits standardized, actionable error diagnostics to `stderr`:

### 2.1 No Specs Matched
When file discovery finds zero files matching the target pattern(s), Rocha emits Mocha's exact diagnostic string:
```
Error: No test files found: "<pattern>"
```
Exit code: `1`.

### 2.2 Bad or Invalid Configuration File
When an explicitly supplied `--config` path does not exist, has syntax errors, or cannot be evaluated:
```
Error: Cannot read config file "<path>": <details>
```
Exit code: `1`.

### 2.3 Node.js Runtime Not Found
When `node` is absent from `PATH` or cannot be spawned:
```
Error: Node.js runtime not found in PATH. Please install Node.js (>= 18.0.0).
```
Exit code: `1`.

### 2.4 Node.js Version Outdated
When the detected Node.js major version is older than 18:
```
Error: Node.js version <version> is too old. Rocha requires Node.js >= 18.0.0.
```
Exit code: `1`.

### 2.5 Custom Loader Failure
When a specified custom ESM loader module does not exist on disk:
```
Error: Failed to load custom loader "<path>": File does not exist
```
Exit code: `1`.

### 2.6 Protocol Version Mismatch
When a worker process communicates using an incompatible wire protocol version:
```
Error: Protocol version mismatch between Rocha orchestrator (v<expected>) and worker (v<actual>).
```
Exit code: `1`.
