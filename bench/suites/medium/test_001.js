const assert = require('node:assert');

describe('Medium Suite File 1', () => {
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

  it('sync test 0 with value 61', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 61, 'number');
  });
  it('sync test 1 with value 783', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 783, 'number');
  });
  it('async test 2 with value 27', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(27);
  });
  it('sync test 3 with value 842', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 842, 'number');
  });
  it('sync test 4 with value 809', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 809, 'number');
  });
  it('sync test 5 with value 449', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 449, 'number');
  });
  it('sync test 6 with value 51', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 51, 'number');
  });
  it('async test 7 with value 596', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(596);
  });
  it('sync test 8 with value 645', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 645, 'number');
  });
  it('sync test 9 with value 303', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 303, 'number');
  });
  it('async test 10 with value 858', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(858);
  });
  it('async test 11 with value 204', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(204);
  });
  it('sync test 12 with value 292', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 292, 'number');
  });
});
