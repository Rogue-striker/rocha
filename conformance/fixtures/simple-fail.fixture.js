const assert = require('node:assert');

describe('Simple Failing Suite', () => {
  it('should pass before failing', () => {
    assert.strictEqual(true, true);
  });

  it('should fail with assertion error', () => {
    assert.strictEqual(10, 20);
  });
});
