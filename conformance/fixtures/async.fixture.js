const assert = require('node:assert');

describe('Async Promises Suite', () => {
  it('handles async await', async () => {
    const res = await Promise.resolve(100);
    assert.strictEqual(res, 100);
  });

  it('handles returned promises', () => {
    return new Promise(resolve => {
      setTimeout(() => {
        assert.ok(true);
        resolve();
      }, 10);
    });
  });
});
