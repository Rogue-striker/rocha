const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { decode } = require('@msgpack/msgpack');

const goldenPath = path.resolve(__dirname, '../../crates/rocha-protocol/tests/golden/protocol_events.bin');

test('protocol golden file decodes identically in Node.js', () => {
  const buf = fs.readFileSync(goldenPath);
  assert.ok(buf.length > 0, 'golden file must not be empty');

  const messages = [];
  let offset = 0;

  while (offset < buf.length) {
    assert.ok(offset + 4 <= buf.length, 'must have 4-byte header');
    const len = buf.readUInt32LE(offset);
    offset += 4;
    assert.ok(offset + len <= buf.length, 'frame payload exceeds buffer');
    const payload = buf.subarray(offset, offset + len);
    const decoded = decode(payload);
    messages.push(decoded);
    offset += len;
  }

  assert.strictEqual(messages.length, 3);

  // Message 1: Ready
  assert.deepStrictEqual(messages[0], {
    type: 'Ready',
    protocol_version: 1,
  });

  // Message 2: TestPass
  assert.deepStrictEqual(messages[1], {
    type: 'TestPass',
    id: 'test-1',
    duration_ms: 15,
    slow: false,
  });

  // Message 3: TestFail
  assert.deepStrictEqual(messages[2], {
    type: 'TestFail',
    id: 'test-2',
    duration_ms: 45,
    error: {
      name: 'AssertionError',
      message: 'expected 42 to equal 99',
      stack: 'Error\n    at test.js:5:10',
      code: 'ERR_ASSERTION',
      actual: '42',
      expected: '99',
      show_diff: true,
      operator: 'strictEqual',
    },
  });
});
