const assert = require('node:assert');

describe('Hooks Suite', () => {
  const trace = [];

  before(() => {
    trace.push('before');
  });

  beforeEach(() => {
    trace.push('beforeEach');
  });

  afterEach(() => {
    trace.push('afterEach');
  });

  after(() => {
    trace.push('after');
  });

  it('runs test 1', () => {
    assert.deepStrictEqual(trace, ['before', 'beforeEach']);
    trace.push('test1');
  });

  it('runs test 2', () => {
    assert.deepStrictEqual(trace, ['before', 'beforeEach', 'test1', 'afterEach', 'beforeEach']);
  });
});
