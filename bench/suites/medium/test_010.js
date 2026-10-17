const assert = require('node:assert');

describe('Medium Suite File 10', () => {
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

  it('sync test 0 with value 3', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 3, 'number');
  });
  it('sync test 1 with value 943', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 943, 'number');
  });
  it('sync test 2 with value 870', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 870, 'number');
  });
  it('sync test 3 with value 502', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 502, 'number');
  });
  it('sync test 4 with value 821', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 821, 'number');
  });
  it('sync test 5 with value 370', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 370, 'number');
  });
  it('sync test 6 with value 702', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 702, 'number');
  });
  it('async test 7 with value 94', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(94);
  });
  it('async test 8 with value 750', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(750);
  });
  it('async test 9 with value 796', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(796);
  });
  it('async test 10 with value 804', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(804);
  });
  it('async test 11 with value 176', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(176);
  });
});
