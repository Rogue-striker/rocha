const assert = require('node:assert');

describe('Medium Suite File 8', () => {
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

  it('async test 0 with value 631', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(631);
  });
  it('async test 1 with value 852', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(852);
  });
  it('async test 2 with value 351', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(351);
  });
  it('sync test 3 with value 878', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 878, 'number');
  });
  it('async test 4 with value 349', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(349);
  });
  it('async test 5 with value 625', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(625);
  });
  it('sync test 6 with value 844', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 844, 'number');
  });
  it('sync test 7 with value 365', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 365, 'number');
  });
  it('sync test 8 with value 85', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 85, 'number');
  });
  it('async test 9 with value 726', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(726);
  });
  it('async test 10 with value 879', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(879);
  });
  it('sync test 11 with value 707', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 707, 'number');
  });
});
