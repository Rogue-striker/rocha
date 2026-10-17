const assert = require('node:assert');

describe('Pending and Skipped Suite', () => {
  it('runs normal test', () => {
    assert.strictEqual(1, 1);
  });

  it('pending test with no callback');

  it.skip('skipped test via it.skip', () => {
    assert.fail('should not execute');
  });

  it('conditionally skipped with this.skip()', function () {
    this.skip();
    assert.fail('should not execute');
  });
});
