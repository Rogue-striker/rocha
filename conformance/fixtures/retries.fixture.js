const assert = require('node:assert');

describe('Retries Suite', () => {
  let attempt = 0;

  it('retries until success', function () {
    this.retries(2);
    attempt++;
    if (attempt < 2) {
      assert.fail(`Failing on attempt ${attempt}`);
    }
    assert.strictEqual(attempt, 2);
  });
});
