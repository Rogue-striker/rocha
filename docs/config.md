# Rocha Configuration Specification

Rocha provides drop-in configuration parity with Mocha CLI options and configuration files (`.mocharc.json`, `.mocharc.jsonc`, `.mocharc.yaml`, `.mocharc.yml`, `.mocharc.js`, `.mocharc.cjs`, `.mocharc.mjs`, and `package.json#mocha`).

---

## 1. Precedence Order

When determining active option values, Rocha resolves settings according to strict precedence:

```
CLI Arguments
    ↓ (overrides)
Environment Variables (e.g. MOCHA_COLORS, NO_COLOR, CI)
    ↓ (overrides)
Configuration File (.mocharc.{json,jsonc,yaml,yml,js,cjs,mjs})
    ↓ (overrides)
package.json (#mocha key)
    ↓ (overrides)
Built-in Defaults
```

---

## 2. Options Matrix

The following table documents every supported option, its type, default value, CLI flag, `.mocharc` key, Mocha version parity, and status milestone (`v1`, `later`, or `unsupported`):

| Option | Type | Default | CLI Flag | `.mocharc` Key | Mocha Parity | Status | Description |
|---|---|---|---|---|---|---|---|
| `spec` | `string[]` | `["test/**/*.js"]` | Positional / `--spec` | `spec` | >= 6.0 | `v1` | One or more specs (files, directories, or globs) to run |
| `ignore` | `string[]` | `[]` | `--ignore` | `ignore` | >= 6.0 | `v1` | Files or globs to ignore during discovery |
| `extension` | `string[]` | `["js", "cjs", "mjs", "ts", "tsx", "jsx"]` | `--extension` | `extension` | >= 6.0 | `v1` | File extensions to look for when traversing directories |
| `recursive` | `boolean` | `false` | `--recursive` | `recursive` | >= 1.0 | `v1` | Search subdirectories recursively for tests |
| `sort` | `boolean` | `false` | `-S, --sort` | `sort` | >= 1.0 | `v1` | Sort discovered test files alphabetically |
| `require` | `string[]` | `[]` | `-r, --require` | `require` | >= 1.0 | `v1` | Require specified modules prior to running tests (CJS) |
| `import` | `string[]` | `[]` | `--import` | `import` | >= 9.0 | `v1` | Import specified modules prior to running tests (ESM) |
| `file` | `string[]` | `[]` | `--file` | `file` | >= 3.0 | `v1` | Include a file to run first before any test suite files |
| `grep` | `string \| null` | `null` | `-g, --grep` | `grep` | >= 1.0 | `v1` | Only run tests matching regular expression |
| `fgrep` | `string \| null` | `null` | `-f, --fgrep` | `fgrep` | >= 1.0 | `v1` | Only run tests containing specified literal string |
| `invert` | `boolean` | `false` | `-i, --invert` | `invert` | >= 1.0 | `v1` | Inverts `--grep` and `--fgrep` matches |
| `timeout` | `number` | `2000` | `-t, --timeout` | `timeout` | >= 1.0 | `v1` | Test-case timeout cap in milliseconds (0 disables) |
| `slow` | `number` | `75` | `-s, --slow` | `slow` | >= 1.0 | `v1` | Threshold in milliseconds to flag tests as "slow" |
| `retries` | `number` | `0` | `--retries` | `retries` | >= 3.0 | `v1` | Number of times to retry failed tests |
| `bail` | `boolean` | `false` | `-b, --bail` | `bail` | >= 1.0 | `v1` | Abort test run immediately upon first failure |
| `forbid-only` | `boolean` | `false` | `--forbid-only` | `forbid-only` | >= 3.0 | `v1` | Fail the run if any tests/suites are marked `.only` |
| `forbid-pending` | `boolean` | `false` | `--forbid-pending` | `forbid-pending` | >= 3.0 | `v1` | Fail the run if any tests are skipped or pending |
| `reporter` | `string` | `"spec"` | `-R, --reporter` | `reporter` | >= 1.0 | `v1` | Output reporter name (`spec`, `dot`, `min`, `list`, `tap`, `json`, `xunit`) |
| `reporter-option` | `string[]` | `[]` | `-O, --reporter-option` | `reporter-option` | >= 1.0 | `v1` | Reporter-specific options (`key=value`) |
| `parallel` | `boolean` | `false` | `-p, --parallel` | `parallel` | >= 8.0 | `v1` | Run tests concurrently across worker processes |
| `jobs` | `number` | `1` | `-j, --jobs` | `jobs` | >= 8.0 | `v1` | Maximum concurrent worker processes |
| `exit` | `boolean` | `false` | `--exit` | `exit` | >= 4.0 | `v1` | Force exit process once all suites complete |
| `ui` | `string` | `"bdd"` | `-u, --ui` | `ui` | >= 1.0 | `v1` | Test interface syntax style (`bdd`, `tdd`, `qunit`) |
| `config` | `string \| null` | `null` | `-c, --config` | `config` | >= 6.0 | `v1` | Explicit path to configuration file |
| `diff` | `boolean` | `true` | `--diff / --no-diff` | `diff` | >= 1.0 | `v1` | Show diffs when assertion errors occur |
| `color` | `boolean \| null` | `null` | `-c, --color / -C, --no-color` | `color` | >= 1.0 | `v1` | Force enable or disable colorized TTY output |
| `node-option` | `string[]` | `[]` | `-n, --node-option` | `node-option` | >= 7.0 | `v1` | Custom Node CLI arguments passed to workers |
| `watch` | `boolean` | `false` | `-w, --watch` | `watch` | >= 1.0 | `v1` | Watch files in test directories for changes |
| `watch-files` | `string[]` | `[]` | `--watch-files` | `watch-files` | >= 7.0 | `v1` | Explicit paths or patterns to monitor in watch mode |
| `watch-ignore` | `string[]` | `["node_modules", ".git"]` | `--watch-ignore` | `watch-ignore` | >= 7.0 | `v1` | Patterns or paths to ignore in watch mode |
| `allow-uncaught` | `boolean` | `false` | `--allow-uncaught` | `allow-uncaught` | >= 1.0 | `v1` | Do not intercept uncaught exceptions; bubble up |
| `delay` | `boolean` | `false` | `--delay` | `delay` | >= 2.0 | `v1` | Wait for explicit `run()` invocation |
| `check-leaks` | `boolean` | `false` | `--check-leaks` | `check-leaks` | >= 1.0 | `v1` | Check for global variable leaks |
| `global` | `string[]` | `[]` | `--global` | `global` | >= 1.0 | `v1` | Allowed global variable names when `check-leaks` is set |
| `inline-diffs` | `boolean` | `false` | `--inline-diffs` | `inline-diffs` | >= 1.0 | `v1` | Display actual and expected diffs inline |
| `fail-zero` | `boolean` | `false` | `--fail-zero` | `fail-zero` | >= 9.0 | `v1` | Exit with error status if zero test cases executed |
| `dry-run` | `boolean` | `false` | `--dry-run` | `dry-run` | >= 9.0 | `v1` | Discover and report suites without running test bodies |
