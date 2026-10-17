const assert = require('node:assert');

describe('Medium Suite File 150', () => {
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

  it('async test 0 with value 20', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(20);
  });
  it('async test 1 with value 918', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(918);
  });
  it('async test 2 with value 317', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(317);
  });
  it('sync test 3 with value 44', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 44, 'number');
  });
  it('sync test 4 with value 991', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 991, 'number');
  });
  it('async test 5 with value 65', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(65);
  });
  it('sync test 6 with value 636', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 636, 'number');
  });
  it('sync test 7 with value 429', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 429, 'number');
  });
  it('sync test 8 with value 876', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 876, 'number');
  });
  it('sync test 9 with value 492', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 492, 'number');
  });
  it('sync test 10 with value 373', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 373, 'number');
  });
  it('sync test 11 with value 102', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 102, 'number');
  });
});
