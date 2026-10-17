const assert = require('node:assert');

describe('Medium Suite File 2', () => {
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

  it('sync test 0 with value 659', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 659, 'number');
  });
  it('async test 1 with value 693', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(693);
  });
  it('async test 2 with value 87', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(87);
  });
  it('async test 3 with value 431', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(431);
  });
  it('async test 4 with value 137', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(137);
  });
  it('sync test 5 with value 15', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 15, 'number');
  });
  it('sync test 6 with value 481', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 481, 'number');
  });
  it('async test 7 with value 899', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(899);
  });
  it('sync test 8 with value 719', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 719, 'number');
  });
  it('async test 9 with value 278', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(278);
  });
  it('async test 10 with value 179', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(179);
  });
  it('async test 11 with value 821', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(821);
  });
});
