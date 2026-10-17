/**
 * Protocol schema constants and event definitions for Rocha worker harness.
 */

const { encode } = require('@msgpack/msgpack');

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

/**
 * Encodes a message into a length-prefixed MessagePack frame.
 * @param {object} message
 * @returns {Buffer}
 */
function encodeFrame(message) {
  const payload = encode(message);
  if (payload.byteLength > MAX_FRAME_SIZE) {
    throw new Error(`Frame payload size ${payload.byteLength} exceeds MAX_FRAME_SIZE ${MAX_FRAME_SIZE}`);
  }
  const header = Buffer.allocUnsafe(4);
  header.writeUInt32LE(payload.byteLength, 0);
  return Buffer.concat([header, Buffer.from(payload.buffer, payload.byteOffset, payload.byteLength)]);
}

/**
 * Batching emitter that queues events and flushes to stream according to rules:
 * - Flush on FileDone
 * - Flush on Fatal
 * - Flush every 5ms or 64 events
 */
class BatchEmitter {
  constructor(outputStream, options = {}) {
    this.stream = outputStream;
    this.batchSize = options.batchSize || 64;
    this.flushIntervalMs = options.flushIntervalMs || 5;
    this.queue = [];
    this.timer = null;
    this.closed = false;
  }

  emit(message) {
    if (this.closed) return;
    this.queue.push(message);

    const isImmediate =
      message.type === WorkerMessageType.FILE_DONE ||
      message.type === WorkerMessageType.FATAL ||
      this.queue.length >= this.batchSize;

    if (isImmediate) {
      this.flush();
    } else if (!this.timer) {
      this.timer = setTimeout(() => this.flush(), this.flushIntervalMs);
    }
  }

  flush() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.queue.length === 0) return;

    const items = this.queue;
    this.queue = [];

    const chunks = items.map(msg => encodeFrame(msg));
    const combined = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks);

    if (this.stream) {
      if (typeof this.stream.write === 'function') {
        this.stream.write(combined);
      } else if (typeof this.stream === 'function') {
        this.stream(combined);
      }
    }
    return combined;
  }

  close() {
    this.flush();
    this.closed = true;
  }
}

module.exports = {
  PROTOCOL_VERSION,
  MAX_FRAME_SIZE,
  MAX_ERROR_STRING_LEN,
  WorkerMessageType,
  OrchestratorMessageType,
  LogStream,
  encodeFrame,
  BatchEmitter,
};
