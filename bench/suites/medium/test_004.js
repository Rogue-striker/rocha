const assert = require('node:assert');

describe('Medium Suite File 4', () => {
  let contextValue = 0;

  before(() => {
    contextValue = 10;
  });

  beforeEach(() => {
    contextValue += 1;
  });

  afterEach(() => {
    contextValue -= 1;
  });

  after(() => {
    contextValue = 0;
  });

  it('async test 0 with value 129', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(129);
  });
  it('async test 1 with value 178', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(178);
  });
  it('async test 2 with value 699', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(699);
  });
  it('sync test 3 with value 412', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 412, 'number');
  });
  it('sync test 4 with value 654', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 654, 'number');
  });
  it('sync test 5 with value 206', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 206, 'number');
  });
  it('async test 6 with value 886', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(886);
  });
  it('sync test 7 with value 792', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 792, 'number');
  });
  it('sync test 8 with value 131', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 131, 'number');
  });
  it('async test 9 with value 369', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(369);
  });
  it('sync test 10 with value 737', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 737, 'number');
  });
  it('async test 11 with value 875', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(875);
  });
});
