const assert = require('node:assert');

describe('Small Suite File 1', () => {
  it('test 0 should calculate 83 + 5', () => {
    assert.strictEqual(83 + 5, 88);
  });
  it('test 1 should calculate 59 + 3', () => {
    assert.strictEqual(59 + 3, 62);
  });
  it('test 2 should calculate 26 + 6', () => {
    assert.strictEqual(26 + 6, 32);
  });
  it('test 3 should calculate 18 + 78', () => {
    assert.strictEqual(18 + 78, 96);
  });
  it('test 4 should calculate 53 + 2', () => {
    assert.strictEqual(53 + 2, 55);
  });
  it('test 5 should calculate 17 + 84', () => {
    assert.strictEqual(17 + 84, 101);
  });
  it('test 6 should calculate 48 + 80', () => {
    assert.strictEqual(48 + 80, 128);
  });
  it('test 7 should calculate 31 + 44', () => {
    assert.strictEqual(31 + 44, 75);
  });
  it('test 8 should calculate 3 + 5', () => {
    assert.strictEqual(3 + 5, 8);
  });
  it('test 9 should calculate 55 + 59', () => {
    assert.strictEqual(55 + 59, 114);
  });
});
