const assert = require('node:assert');

describe('Done Callback Suite', () => {
  it('handles done callback success', done => {
    setTimeout(() => {
      assert.strictEqual(1, 1);
      done();
    }, 10);
  });
});
