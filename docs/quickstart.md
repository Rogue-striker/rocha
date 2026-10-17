# Rocha Quickstart

Rocha is a native (Rust) orchestrator for running Mocha test suites fast, using warm Node worker processes and a thin JS harness.

## Installation

### Via npm (recommended)

Install Rocha in your project's `devDependencies`:

```bash
npm install --save-dev rocha
# or
yarn add -D rocha
# or
pnpm add -D rocha
```

You can also run Rocha instantly without installing via `npx`:

```bash
npx rocha --version
```

### From Source

Ensure you have Rust (stable) and Node.js (>= 18) installed:

```bash
git clone https://github.com/rocha-runner/rocha.git
cd rocha
cargo build --release -p rocha-cli --bin rocha
./target/release/rocha --version
```

---

## Running Tests

### Basic Usage

Point Rocha to your test files or glob pattern:

```bash
npx rocha "test/**/*.test.js"
```

### TypeScript Out of the Box

Rocha natively transforms TypeScript (`.ts`, `.tsx`, `.mts`, `.cts`) using the blazing-fast [Oxc](https://oxc.rs) engine and caches transformed code on disk:

```bash
npx rocha "test/**/*.spec.ts"
```

No `ts-node/register` or external transpile build step is required.

---

## Parallel Execution

Run tests across multiple worker processes with longest-first scheduling:

```bash
npx rocha --parallel -j 8 "test/**/*.js"
```

### Warm Worker Pool (`--isolate=none`)

For test suites that do not pollute global state, keep warm Node workers alive across test files for maximum throughput:

```bash
npx rocha --isolate=none --parallel "test/**/*.js"
```

---

## Watch Mode

Rocha includes an integrated file watcher with import graph analysis that only reruns affected test files:

```bash
npx rocha --watch
```

Interactive controls during watch mode:
- `a`: Rerun all tests
- `f`: Rerun failed tests only
- `p`: Pause / resume watching
- `g`: Filter by regex pattern
- `q`: Quit watch mode

---

## Diagnostics

Verify your environment and runtime dependencies:

```bash
npx rocha --doctor
```

Profile wall-clock execution breakdown across all phases:

```bash
npx rocha --profile "test/**/*.js"
```
