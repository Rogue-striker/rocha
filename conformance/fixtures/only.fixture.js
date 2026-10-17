const assert = require('node:assert');

describe('Only Filtering Suite', () => {
  it('should not run this test', () => {
    assert.fail('should be filtered out');
  });

  it.only('should run this only test', () => {
    assert.strictEqual(42, 42);
  });
});
