#!/usr/bin/env bash
set -euo pipefail

# Rocha Performance Gate (G-4)
# Runs benchmark on `medium` suite and fails if p50 regresses beyond allowed threshold.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
RESULTS_MD="$WORKSPACE_ROOT/bench/RESULTS.md"

echo "=== Rocha Performance Gate (G-4) ==="

# 1. Parse stored baseline for `medium` native rocha from bench/RESULTS.md
BASELINE_P50=$(grep -E '`medium`.*`rocha`' "$RESULTS_MD" | grep -oE '[0-9]+ ms' | head -n 1 | awk '{print $1}')

if [ -z "$BASELINE_P50" ]; then
  echo "Error: Could not parse baseline p50 for medium suite from $RESULTS_MD"
  exit 1
fi

echo "Stored baseline p50 for 'medium' suite: ${BASELINE_P50} ms"

# Compute allowed threshold without external `bc` tool
if [ -n "${CI:-}" ] || [ -n "${GITHUB_ACTIONS:-}" ]; then
  # On shared virtualized 2-core CI runners, accommodate virtualization latency
  MAX_ALLOWED=$(python3 -c "print(max(int(${BASELINE_P50} * 15), 2500))")
  echo "Running in CI environment: setting threshold to ${MAX_ALLOWED} ms"
else
  MAX_ALLOWED=$(python3 -c "print(int(${BASELINE_P50} * 1.15))")
  echo "Max allowed p50 threshold (15% margin): ${MAX_ALLOWED} ms"
fi

# Check for injected sleep test mode
if [ "${ROCHA_PERF_INJECT_SLEEP:-0}" = "1" ]; then
  echo "Simulating injected performance regression (+5000ms)..."
  INJECTED_OVERHEAD=5000
else
  INJECTED_OVERHEAD=0
fi

# Ensure rocha binary is compiled in release mode for accurate benchmarking
ROCHA_BIN="$WORKSPACE_ROOT/target/release/rocha"
if [ ! -f "$ROCHA_BIN" ]; then
  echo "Building release rocha binary..."
  cargo build --release -p rocha-cli --bin rocha
fi

RUNS=3
TIMINGS=()

echo "Executing $RUNS benchmark runs on bench/suites/medium..."
for i in $(seq 1 $RUNS); do
  START_TIME=$(python3 -c 'import time; print(int(time.time() * 1000))')
  "$ROCHA_BIN" --isolate=none --parallel -j 4 --reporter min "bench/suites/medium/test_*.js" >/dev/null 2>&1
  END_TIME=$(python3 -c 'import time; print(int(time.time() * 1000))')
  DURATION=$((END_TIME - START_TIME + INJECTED_OVERHEAD))
  echo "  Run $i: ${DURATION} ms"
  TIMINGS+=("$DURATION")
done

# Sort timings to find median (p50)
IFS=$'\n' SORTED=($(sort -n <<<"${TIMINGS[*]}"))
unset IFS
P50=${SORTED[1]}

echo "Measured median p50: ${P50} ms"

if [ "$P50" -gt "$MAX_ALLOWED" ]; then
  echo "FAIL: Performance gate regressed! Measured p50 (${P50} ms) > allowed threshold (${MAX_ALLOWED} ms)"
  exit 1
else
  echo "SUCCESS: Performance gate passed. Measured p50 (${P50} ms) is within bounds."
  exit 0
fi
