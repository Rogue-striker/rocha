const assert = require('node:assert');

describe('Medium Suite File 36', () => {
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

  it('sync test 0 with value 335', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 335, 'number');
  });
  it('async test 1 with value 591', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(591);
  });
  it('sync test 2 with value 781', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 781, 'number');
  });
  it('async test 3 with value 739', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(739);
  });
  it('async test 4 with value 481', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(481);
  });
  it('sync test 5 with value 598', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 598, 'number');
  });
  it('async test 6 with value 298', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(298);
  });
  it('sync test 7 with value 411', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 411, 'number');
  });
  it('sync test 8 with value 679', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 679, 'number');
  });
  it('sync test 9 with value 189', () => {
    assert.ok(contextValue >= 10);
    assert.strictEqual(typeof 189, 'number');
  });
  it('async test 10 with value 790', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(790);
  });
  it('async test 11 with value 988', async () => {
    assert.ok(contextValue >= 10);
    await Promise.resolve(988);
  });
});
