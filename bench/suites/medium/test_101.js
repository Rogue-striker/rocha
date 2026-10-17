const assert = require('node:assert');

describe('Medium Suite File 101', () => {
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

  it('sync test 0 with value 960', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 960, 'number');
  });
  it('async test 1 with value 518', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(518);
  });
  it('sync test 2 with value 670', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 670, 'number');
  });
  it('async test 3 with value 140', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(140);
  });
  it('sync test 4 with value 635', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 635, 'number');
  });
  it('sync test 5 with value 790', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 790, 'number');
  });
  it('async test 6 with value 241', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(241);
  });
  it('sync test 7 with value 871', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 871, 'number');
  });
  it('sync test 8 with value 978', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 978, 'number');
  });
  it('async test 9 with value 247', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(247);
  });
  it('async test 10 with value 766', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(766);
  });
  it('sync test 11 with value 293', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 293, 'number');
  });
  it('sync test 12 with value 93', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 93, 'number');
  });
});
