#!/usr/bin/env bash
set -euo pipefail

STATUS_FILE="STATUS.md"

if [ ! -f "$STATUS_FILE" ]; then
  echo "Error: $STATUS_FILE not found!" >&2
  exit 1
fi

EXPECTED_TASKS=(
  "M0-1" "M0-2" "M0-3" "M0-4" "M0-5"
  "C-PROTO" "C-CODEC" "C-CONFIG" "C-CACHE" "C-CONF"
  "A-1" "A-2" "A-3" "A-4" "A-5" "A-6" "A-7"
  "B-1" "B-2" "B-3" "B-4" "B-5" "B-6" "B-7"
  "R-1" "R-2" "R-3" "R-4" "R-5" "R-6"
  "D-1" "D-2" "D-3" "D-4" "D-5" "D-6" "D-7" "D-8"
  "E-1" "E-2" "E-3" "E-4" "E-5"
  "F-1" "F-2" "F-3" "F-4"
  "G-1" "G-2" "G-3" "G-4" "G-5" "G-6"
  "X-1" "X-2" "X-3"
)

missing=0
duplicate=0

for task in "${EXPECTED_TASKS[@]}"; do
  # Match task id at the beginning of a table row | <task> |
  count=$(grep -E "^\|[[:space:]]*${task}[[:space:]]*\|" "$STATUS_FILE" | wc -l | tr -d ' ')
  if [ "$count" -eq 0 ]; then
    echo "FAIL: Task $task is missing in $STATUS_FILE" >&2
    missing=$((missing + 1))
  elif [ "$count" -gt 1 ]; then
    echo "FAIL: Task $task appears $count times in $STATUS_FILE (expected 1)" >&2
    duplicate=$((duplicate + 1))
  fi
done

if [ "$missing" -eq 0 ] && [ "$duplicate" -eq 0 ]; then
  echo "SUCCESS: All ${#EXPECTED_TASKS[@]} tasks are present exactly once in $STATUS_FILE."
  exit 0
else
  echo "STATUS CHECK FAILED ($missing missing, $duplicate duplicate)" >&2
  exit 1
fi
