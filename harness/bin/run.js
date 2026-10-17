#!/usr/bin/env node
"use strict";

const path = require("node:path");
const { runFile } = require("../src/index.js");

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    reporter: "spec",
    files: [],
    bail: false,
    grep: null,
    fgrep: null,
    invert: false,
    forbidOnly: false,
    forbidPending: false,
    timeout: 2000,
    ui: "bdd",
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-R" || arg === "--reporter") {
      options.reporter = args[++i];
    } else if (arg === "-b" || arg === "--bail") {
      options.bail = true;
    } else if (arg === "-g" || arg === "--grep") {
      options.grep = args[++i];
    } else if (arg === "-f" || arg === "--fgrep") {
      options.fgrep = args[++i];
    } else if (arg === "--invert") {
      options.invert = true;
    } else if (arg === "--forbid-only") {
      options.forbidOnly = true;
    } else if (arg === "--forbid-pending") {
      options.forbidPending = true;
    } else if (arg === "-u" || arg === "--ui") {
      options.ui = args[++i];
    } else if (arg === "-t" || arg === "--timeout") {
      options.timeout = parseInt(args[++i], 10);
    } else if (!arg.startsWith("-")) {
      options.files.push(arg);
    }
  }

  return options;
}

async function main() {
  const options = parseArgs();
  if (options.files.length === 0) {
    process.exit(0);
  }

  let totalFailures = 0;
  let totalPasses = 0;
  let totalPending = 0;
  const tStart = Date.now();
  for (const file of options.files) {
    try {
      const result = await runFile(file, options);
      totalPasses += result.stats.passes;
      totalFailures += result.stats.failures;
      totalPending += result.stats.pending;
      if (options.reporter === "json") {
        console.log(JSON.stringify(result, null, 2));
      } else if (options.reporter !== "min") {
        console.log(`${result.stats.passes} passing, ${result.stats.failures} failing`);
      }
      if (options.bail && totalFailures > 0) {
        break;
      }
    } catch (err) {
      if (options.reporter === "json") {
        console.log(JSON.stringify({
          stats: { suites: 0, tests: 0, passes: 0, pending: 0, failures: 1, duration: 0 },
          passes: [],
          pending: [],
          failures: [{ title: "runFile error", fullTitle: "runFile error", err: { name: err.name, message: err.message, stack: err.stack } }],
        }, null, 2));
      } else {
        console.error(err);
      }
      totalFailures++;
      break;
    }
  }

  if (options.reporter === "min") {
    const elapsed = Date.now() - tStart;
    console.log(`\n  ${totalPasses} passing (${elapsed}ms)`);
    if (totalFailures > 0) {
      console.log(`  ${totalFailures} failing`);
    }
  }
  process.exit(totalFailures > 0 ? 1 : 0);
}

main();
