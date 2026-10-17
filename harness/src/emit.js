/**
 * Protocol schema constants and event definitions for Rocha worker harness.
 */

const PROTOCOL_VERSION = 1;
const MAX_FRAME_SIZE = 8 * 1024 * 1024; // 8 MiB
const MAX_ERROR_STRING_LEN = 1024 * 1024; // 1 MiB

// Worker -> Orchestrator Message Types
const WorkerMessageType = {
  READY: 'Ready',
  SUITE_START: 'SuiteStart',
  TEST_START: 'TestStart',
  TEST_PASS: 'TestPass',
  TEST_FAIL: 'TestFail',
  TEST_PENDING: 'TestPending',
  HOOK_FAIL: 'HookFail',
  RETRY: 'Retry',
  SUITE_END: 'SuiteEnd',
  FILE_DONE: 'FileDone',
  LOG: 'Log',
  FATAL: 'Fatal',
};

// Orchestrator -> Worker Message Types
const OrchestratorMessageType = {
  RUN_FILE: 'RunFile',
  ABORT: 'Abort',
  SHUTDOWN: 'Shutdown',
};

const LogStream = {
  STDOUT: 'stdout',
  STDERR: 'stderr',
};

module.exports = {
  PROTOCOL_VERSION,
  MAX_FRAME_SIZE,
  MAX_ERROR_STRING_LEN,
  WorkerMessageType,
  OrchestratorMessageType,
  LogStream,
};
