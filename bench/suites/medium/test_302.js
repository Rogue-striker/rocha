const assert = require('node:assert');

describe('Medium Suite File 302', () => {
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

  it('sync test 0 with value 210', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 210, 'number');
  });
  it('async test 1 with value 710', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(710);
  });
  it('sync test 2 with value 248', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 248, 'number');
  });
  it('async test 3 with value 123', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(123);
  });
  it('sync test 4 with value 50', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 50, 'number');
  });
  it('sync test 5 with value 789', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 789, 'number');
  });
  it('sync test 6 with value 949', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 949, 'number');
  });
  it('sync test 7 with value 541', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 541, 'number');
  });
  it('sync test 8 with value 725', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 725, 'number');
  });
  it('async test 9 with value 323', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(323);
  });
  it('sync test 10 with value 108', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 108, 'number');
  });
  it('sync test 11 with value 532', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 532, 'number');
  });
});
