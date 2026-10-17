#!/usr/bin/env node
"use strict";

const path = require("node:path");
const util = require("node:util");
const { decode } = require("@msgpack/msgpack");
const {
  PROTOCOL_VERSION,
  WorkerMessageType,
  OrchestratorMessageType,
  LogStream,
  BatchEmitter,
} = require("../src/emit.js");
const { Harness, Runner } = require("../src/index.js");
const { serializeError } = require("../src/errors.js");

// 1. Setup stdout batch emitter
const emitter = new BatchEmitter(process.stdout);

// 2. Intercept console logs
let activeTestId = null;

function captureLog(streamType, text) {
  const buf = Buffer.isBuffer(text) ? text : Buffer.from(String(text), "utf8");
  emitter.emit({
    type: WorkerMessageType.LOG,
    stream: streamType,
    data: buf,
    test_id: activeTestId,
  });
}

console.log = (...args) => captureLog(LogStream.STDOUT, util.format(...args) + "\n");
console.info = (...args) => captureLog(LogStream.STDOUT, util.format(...args) + "\n");
console.warn = (...args) => captureLog(LogStream.STDERR, util.format(...args) + "\n");
console.error = (...args) => captureLog(LogStream.STDERR, util.format(...args) + "\n");

// 3. Immediately emit Ready
emitter.emit({
  type: WorkerMessageType.READY,
  protocol_version: PROTOCOL_VERSION,
});
emitter.flush();

// 4. Handle incoming Orchestrator messages on stdin
let activeRunner = null;
let currentBuffer = Buffer.alloc(0);

process.stdin.on("data", async (chunk) => {
  currentBuffer = Buffer.concat([currentBuffer, chunk]);

  while (currentBuffer.length >= 4) {
    const frameLength = currentBuffer.readUInt32LE(0);
    if (currentBuffer.length < 4 + frameLength) {
      break;
    }

    const payload = currentBuffer.subarray(4, 4 + frameLength);
    currentBuffer = currentBuffer.subarray(4 + frameLength);

    const msg = decode(payload);
    await handleOrchestratorMessage(msg);
  }
});

process.stdin.on("end", () => {
  emitter.close();
  process.exit(0);
});

async function handleOrchestratorMessage(msg) {
  if (!msg || typeof msg !== "object") return;

  switch (msg.type) {
    case OrchestratorMessageType.RUN_FILE:
      await executeFile(msg.file, msg.options || {});
      break;

    case OrchestratorMessageType.ABORT:
      if (activeRunner) {
        activeRunner._bailed = true;
      }
      break;

    case OrchestratorMessageType.SHUTDOWN:
      emitter.close();
      process.exit(0);
      break;
  }
}

async function executeFile(filePath, options) {
  const startTime = Date.now();
  const absPath = path.resolve(filePath);

  const harness = new Harness({
    file: absPath,
    ui: options.ui || "bdd",
    timeout: options.timeout_ms !== undefined ? options.timeout_ms : 2000,
    slow: options.slow_ms !== undefined ? options.slow_ms : 75,
    bail: Boolean(options.bail),
    grep: options.grep || null,
    fgrep: options.fgrep || null,
    invert: Boolean(options.invert || options.invert_grep),
    retries: options.retries || 0,
    forbidOnly: Boolean(options.forbid_only),
    forbidPending: Boolean(options.forbid_pending),
    checkLeaks: Boolean(options.check_leaks),
    globals: options.globals || [],
    allowUncaught: Boolean(options.allow_uncaught),
    dryRun: Boolean(options.dry_run),
    delay: Boolean(options.delay),
  });

  const runner = new Runner(harness.options);
  activeRunner = runner;

  let passes = 0;
  let failures = 0;
  let pending = 0;

  runner.on("suite", (suite) => {
    emitter.emit({
      type: WorkerMessageType.SUITE_START,
      id: suite.id,
      parent: suite.parent && suite.parent.title ? suite.parent.id : null,
      title: suite.title,
      file: suite.file || absPath,
    });
  });

  runner.on("test", (test) => {
    activeTestId = test.id;
    emitter.emit({
      type: WorkerMessageType.TEST_START,
      id: test.id,
      suite: test.suite.id,
      title: test.title,
      file: test.file || absPath,
    });
    emitter.flush();
  });

  runner.on("pass", (test) => {
    passes++;
    const duration_ms = test.duration || 0;
    emitter.emit({
      type: WorkerMessageType.TEST_PASS,
      id: test.id,
      duration_ms,
      slow: duration_ms > (typeof test.slow === "function" ? test.slow() : (test.slow || 75)),
    });
  });

  runner.on("fail", (runnable, err) => {
    failures++;
    const duration_ms = runnable.duration || 0;
    if (runnable.type) {
      emitter.emit({
        type: WorkerMessageType.HOOK_FAIL,
        suite: runnable.suite ? runnable.suite.id : "",
        hook: runnable.type,
        title: runnable.title,
        error: serializeError(err),
      });
    } else {
      emitter.emit({
        type: WorkerMessageType.TEST_FAIL,
        id: runnable.id,
        duration_ms,
        error: serializeError(err),
      });
    }
  });

  runner.on("pending", (test) => {
    pending++;
    if (activeTestId !== test.id) {
      emitter.emit({
        type: WorkerMessageType.TEST_START,
        id: test.id,
        suite: test.suite ? test.suite.id : "",
        title: test.title,
        file: test.file || absPath,
      });
    }
    emitter.emit({
      type: WorkerMessageType.TEST_PENDING,
      id: test.id,
    });
  });

  runner.on("retry", (test) => {
    emitter.emit({
      type: WorkerMessageType.RETRY,
      id: test.id,
      attempt: (typeof test.currentRetry === "function" ? test.currentRetry() : (test.currentRetry || 0)) + 1,
    });
  });

  runner.on("test end", () => {
    activeTestId = null;
  });

  runner.on("suite end", (suite) => {
    emitter.emit({
      type: WorkerMessageType.SUITE_END,
      id: suite.id,
    });
  });

  try {
    harness.loadFile(absPath);
    await runner.run(harness.rootSuite);
  } catch (err) {
    emitter.emit({
      type: WorkerMessageType.FATAL,
      error: serializeError(err),
    });
  } finally {
    activeRunner = null;
    activeTestId = null;
    const duration_ms = Date.now() - startTime;
    emitter.emit({
      type: WorkerMessageType.FILE_DONE,
      file: absPath,
      counts: {
        passes,
        failures,
        pending,
        duration_ms,
      },
    });
    emitter.flush();
  }
}
