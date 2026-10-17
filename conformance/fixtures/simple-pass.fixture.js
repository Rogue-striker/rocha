const assert = require('node:assert');

describe('Simple Passing Suite', () => {
  it('should pass test 1', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should pass test 2 with string equality', () => {
    assert.strictEqual('hello world'.toUpperCase(), 'HELLO WORLD');
  });
});
