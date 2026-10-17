const assert = require('node:assert');

describe('Medium Suite File 9', () => {
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

  it('sync test 0 with value 273', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 273, 'number');
  });
  it('sync test 1 with value 47', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 47, 'number');
  });
  it('sync test 2 with value 440', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 440, 'number');
  });
  it('async test 3 with value 716', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(716);
  });
  it('async test 4 with value 784', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(784);
  });
  it('sync test 5 with value 666', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 666, 'number');
  });
  it('async test 6 with value 443', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(443);
  });
  it('sync test 7 with value 459', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 459, 'number');
  });
  it('sync test 8 with value 331', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 331, 'number');
  });
  it('sync test 9 with value 147', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 147, 'number');
  });
  it('async test 10 with value 267', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(267);
  });
  it('async test 11 with value 547', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(547);
  });
  it('async test 12 with value 437', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(437);
  });
});
