const test = require('node:test');
const assert = require('node:assert');
const { decode } = require('@msgpack/msgpack');
const {
  encodeFrame,
  BatchEmitter,
  WorkerMessageType,
  PROTOCOL_VERSION,
} = require('../src/emit.js');

test('encodeFrame produces valid 4-byte LE length prefix and MessagePack body', () => {
  const msg = { type: WorkerMessageType.READY, protocol_version: PROTOCOL_VERSION };
  const frame = encodeFrame(msg);

  assert.ok(frame.length > 4);
  const len = frame.readUInt32LE(0);
  assert.strictEqual(frame.length, 4 + len);

  const decoded = decode(frame.subarray(4));
  assert.deepStrictEqual(decoded, msg);
});

test('BatchEmitter flushes immediately on FileDone', () => {
  const flushed = [];
  const emitter = new BatchEmitter(chunk => flushed.push(chunk));

  emitter.emit({ type: WorkerMessageType.TEST_START, id: '1', suite: 's', title: 't', file: 'f.js' });
  assert.strictEqual(flushed.length, 0, 'should be buffered');

  emitter.emit({
    type: WorkerMessageType.FILE_DONE,
    file: 'f.js',
    counts: { passes: 1, failures: 0, pending: 0, duration_ms: 10 },
  });

  assert.strictEqual(flushed.length, 1, 'should flush immediately on FileDone');
  emitter.close();
});

test('BatchEmitter flushes on 64 events threshold', () => {
  const flushed = [];
  const emitter = new BatchEmitter(chunk => flushed.push(chunk));

  for (let i = 0; i < 63; i++) {
    emitter.emit({ type: WorkerMessageType.TEST_PENDING, id: `test-${i}` });
  }
  assert.strictEqual(flushed.length, 0);

  emitter.emit({ type: WorkerMessageType.TEST_PENDING, id: 'test-63' });
  assert.strictEqual(flushed.length, 1, 'flushed on 64th event');
  emitter.close();
});

test('BatchEmitter flushes on timer', async () => {
  const flushed = [];
  const emitter = new BatchEmitter(chunk => flushed.push(chunk), { flushIntervalMs: 10 });

  emitter.emit({ type: WorkerMessageType.TEST_PENDING, id: 'timer-test' });
  assert.strictEqual(flushed.length, 0);

  await new Promise(r => setTimeout(r, 25));
  assert.strictEqual(flushed.length, 1, 'flushed after timer expired');
  emitter.close();
});
