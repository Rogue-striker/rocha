# Rocha Wire Protocol Specification (v1)

This document defines the binary communication protocol between the native Rocha orchestrator process and its warm Node worker processes.

---

## 1. Framing and Transport

All messages exchanged between orchestrator and worker are framed over dedicated pipes/file descriptors (stdio fd 3/4 or named pipes on Windows).

```
+------------------------------------+---------------------------------------+
| 4-byte Little-Endian Length Prefix | MessagePack Body (variable length)    |
| (uint32_le)                        | (Max 8 MiB = 8,388,608 bytes)         |
+------------------------------------+---------------------------------------+
```

- **Length Prefix**: 4-byte unsigned integer in Little-Endian byte order representing the byte length of the following MessagePack payload.
- **Maximum Frame Size**: 8 MiB (`MAX_FRAME_SIZE = 8 * 1024 * 1024`). Frames exceeding this limit must be rejected immediately with an error.
- **Error String Bounding**: All string fields in error structures (`name`, `message`, `stack`, `actual`, `expected`) are bounded to 1 MiB (`MAX_ERROR_STRING_LEN = 1024 * 1024`) by the harness prior to serialization.
- **Batching & Flushing**:
  - Events are buffered in memory and flushed on `FileDone`, on `Fatal`, or every 5 ms / 64 events.

---

## 2. Versioning & Handshake

Upon initialization, the worker MUST emit a `Ready` message as its first communication:
```json
{
  "type": "Ready",
  "protocol_version": 1
}
```
If the received `protocol_version` does not match the orchestrator's supported version (`PROTOCOL_VERSION = 1`), the orchestrator aborts the worker with a fatal configuration error.

---

## 3. Message Definitions

### 3.1 Worker → Orchestrator Messages

| Message Type | Fields | Description |
|---|---|---|
| `Ready` | `protocol_version: u32` | Sent immediately upon worker boot |
| `SuiteStart` | `id: string, parent?: string, title: string, file: string` | A test suite began execution |
| `TestStart` | `id: string, suite: string, title: string, file: string` | A single test execution began |
| `TestPass` | `id: string, duration_ms: u64, slow: bool` | Test completed successfully |
| `TestFail` | `id: string, duration_ms: u64, error: ProtocolError` | Test failed with error details |
| `TestPending` | `id: string` | Test was marked pending or skipped |
| `HookFail` | `suite: string, hook: string, title: string, error: ProtocolError` | Suite or root hook failed |
| `Retry` | `id: string, attempt: u32` | Test is being retried |
| `SuiteEnd` | `id: string` | Test suite completed |
| `FileDone` | `file: string, counts: TestCounts` | File execution finished with summary counts |
| `Log` | `stream: "stdout" \| "stderr", chunk: string` | Captured output during test execution |
| `Fatal` | `error: ProtocolError` | Unhandled crash / fatal failure |

### 3.2 Orchestrator → Worker Messages

| Message Type | Fields | Description |
|---|---|---|
| `RunFile` | `file: string, options: RunFileOptions` | Execute the given test file |
| `Abort` | `reason: string` | Immediately abort active run |
| `Shutdown` | *(none)* | Gracefully shut down worker process |

### 3.3 Core Structures

#### `ProtocolError`
```rust
pub struct ProtocolError {
    pub name: String,
    pub message: String,
    pub stack: Option<String>,
    pub code: Option<String>,
    pub actual: Option<String>,
    pub expected: Option<String>,
    pub show_diff: bool,
    pub operator: Option<String>,
}
```

#### `TestCounts`
```rust
pub struct TestCounts {
    pub passes: u32,
    pub failures: u32,
    pub pending: u32,
    pub duration_ms: u64,
}
```

---

## 4. Byte-Level Wire Examples

### Example 1: `Ready` Handshake Message

- **Payload Object**: `{"type": "Ready", "protocol_version": 1}`
- **Length Prefix (4 bytes LE)**: `1e 00 00 00` (30 bytes)
- **MessagePack Body (30 bytes)**:
  ```hex
  82 a4 74 79 70 65 a5 52 65 61 64 79 b0 70 72 6f 74 6f 63 6f 6c 5f 76 65 72 73 69 6f 6e 01
  ```
  - `82`: fixmap with 2 elements
  - `a4 74 79 70 65`: fixstr (len 4) `"type"`
  - `a5 52 65 61 64 79`: fixstr (len 5) `"Ready"`
  - `b0 70 72 6f 74 6f 63 6f 6c 5f 76 65 72 73 69 6f 6e`: fixstr (len 16) `"protocol_version"`
  - `01`: positive fixint `1`

### Example 2: `TestPass` Message

- **Payload Object**: `{"type": "TestPass", "id": "test-1", "duration_ms": 15, "slow": false}`
- **Length Prefix (4 bytes LE)**: `2c 00 00 00` (44 bytes)
- **MessagePack Body (44 bytes)**:
  ```hex
  84 a4 74 79 70 65 a8 54 65 73 74 50 61 73 73 a2 69 64 a6 74 65 73 74 2d 31 ab 64 75 72 61 74 69 6f 6e 5f 6d 73 0f a4 73 6c 6f 77 c2
  ```
  - `84`: fixmap with 4 elements
  - Key `"type"` -> Value `"TestPass"`
  - Key `"id"` -> Value `"test-1"`
  - Key `"duration_ms"` -> Value `15` (`0x0f`)
  - Key `"slow"` -> Value `false` (`0xc2`)

### Example 3: `TestFail` Message

- **Payload Object**:
  ```json
  {
    "type": "TestFail",
    "id": "test-2",
    "duration_ms": 45,
    "error": {
      "name": "AssertionError",
      "message": "expected 42 to equal 99",
      "stack": "Error\n    at test.js:5:10",
      "code": "ERR_ASSERTION",
      "actual": "42",
      "expected": "99",
      "show_diff": true,
      "operator": "strictEqual"
    }
  }
  ```
- **Length Prefix (4 bytes LE)**: `ca 00 00 00` (202 bytes)
- **MessagePack Body (202 bytes)**:
  ```hex
  84 a4 74 79 70 65 a8 54 65 73 74 46 61 69 6c a2 69 64 a6 74 65 73 74 2d 32 ab 64 75 72 61 74 69 6f 6e 5f 6d 73 2d a5 65 72 72 6f 72 88 a4 6e 61 6d 65 ae 41 73 73 65 72 74 69 6f 6e 45 72 72 6f 72 a7 6d 65 73 73 61 67 65 b7 65 78 70 65 63 74 65 64 20 34 32 20 74 6f 20 65 71 75 61 6c 20 39 39 a5 73 74 61 63 6b b9 45 72 72 6f 72 0a 20 20 20 20 61 74 20 74 65 73 74 2e 6a 73 3a 35 3a 31 30 a4 63 6f 64 65 ad 45 52 52 5f 41 53 53 45 52 54 49 4f 4e a6 61 63 74 75 61 6c a2 34 32 a8 65 78 70 65 63 74 65 64 a2 39 39 a9 73 68 6f 77 5f 64 69 66 66 c3 a8 6f 70 65 72 61 74 6f 72 ab 73 74 72 69 63 74 45 71 75 61 6c
  ```
  - Map of 4 top-level keys (`type`, `id`, `duration_ms`, `error`)
  - Submap of 8 keys for `error` detailing assertion mismatch and stack.

---

## 5. Fuzz Testing

The streaming decoder is hardened against arbitrary malformed input and corrupted byte streams.

### Running Cargo Fuzz
To run the libFuzzer target:
```bash
# Requires nightly toolchain with AddressSanitizer
cargo install cargo-fuzz
cargo +nightly fuzz run decode -- -max_total_time=60
```

Continuous integration runs an in-crate proptest fuzz smoke suite (`test_fuzz_smoke_random_bytes`) verifying resilience across arbitrary byte sequences.
