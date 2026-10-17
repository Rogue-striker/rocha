# Rocha CLI Flag Reference

This document catalogs all CLI arguments and options supported by Rocha.

## Execution & Concurrency

| Flag | Type | Description |
|---|---|---|
| `-p, --parallel` | boolean | Run test files concurrently across multiple worker processes. |
| `-j, --jobs <N>` | integer | Number of concurrent worker processes (defaults to available CPU cores). |
| `--isolate <mode>` | string | Worker isolation strategy: `none` (reuse warm workers) or `file` (fresh process per file). Default: `none`. |
| `-b, --bail` | boolean | Stop running tests after the first failure. |
| `-t, --timeout <ms>` | integer | Test-case timeout threshold in milliseconds (default: `2000`). `0` disables timeout. |
| `-s, --slow <ms>` | integer | Threshold in milliseconds to flag a test as "slow" (default: `75`). |
| `--retries <N>` | integer | Number of times to retry failing test cases. |
| `--delay` | boolean | Wait for global `run()` function call before initiating test execution. |
| `--shard <I/N>` | string | Shard test files across CI machines (e.g., `1/4`, `2/4`). |

---

## Filtering & Selection

| Flag | Type | Description |
|---|---|---|
| `-g, --grep <pattern>` | string | Only run tests matching the regular expression pattern. |
| `-f, --fgrep <string>` | string | Only run tests containing the exact substring. |
| `-i, --invert` | boolean | Invert `--grep` and `--fgrep` matches. |
| `--forbid-only` | boolean | Fail the run if any `.only` calls exist in the test suite. |
| `--forbid-pending` | boolean | Fail the run if any `.skip` or pending tests exist. |
| `--dry-run` | boolean | Discover and report tests without executing hooks or test bodies. |
| `--fail-zero` | boolean | Exit with code 1 if zero test cases were matched or executed. |

---

## Reporting & Output

| Flag | Type | Description |
|---|---|---|
| `-R, --reporter <name>` | string | Output reporter: `spec`, `dot`, `min`, `list`, `tap`, `json`, `json-stream`, `xunit`, or custom package. Default: `spec`. |
| `-O, --reporter-option <k=v>` | string | Options forwarded to reporter (e.g. `output=results.xml`). |
| `-c, --color` | boolean | Force ANSI colors in output. |
| `-C, --no-color` | boolean | Suppress ANSI colors in output. |
| `--diff` | boolean | Display inline diff for failing assertions (default: true). |
| `--no-diff` | boolean | Suppress diff display on failures. |

---

## Preload & Runtime Forwarding

| Flag | Type | Description |
|---|---|---|
| `-r, --require <module>` | string | Preload specified module prior to test execution. |
| `--import <module>` | string | Preload ECMAScript module via Node `--import`. |
| `--file <file>` | string | Run file before test suite execution. |
| `--loader <loader>` | string | Custom ECMAScript module loader for worker processes. |
| `--node-option <opt>` | string | Forward flag or VM argument directly to Node runtime. |
| `--check-leaks` | boolean | Detect variables leaked into global scope. |
| `--globals <names>` | string | Comma-delimited list of accepted global variable identifiers. |

---

## Watch Mode & Diagnostics

| Flag | Type | Description |
|---|---|---|
| `-w, --watch` | boolean | Watch files for modifications and rerun affected tests. |
| `--watch-files <paths>` | string | Comma-delimited list of file patterns to monitor in watch mode. |
| `--watch-ignore <paths>` | string | Comma-delimited list of paths to ignore in watch mode. |
| `--doctor` | boolean | Verify toolchain dependencies, Node runtime, and configurations. |
| `--profile` | boolean | Measure and display execution time breakdown across all internal phases. |
