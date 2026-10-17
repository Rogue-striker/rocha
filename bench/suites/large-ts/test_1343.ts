import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1343', () => {
  it('sync TS test 0 of file 1343', () => {
    const payload: TestPayload = { id: '1343_0', value: 407 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1343', async () => {
    const payload: TestPayload = { id: '1343_1', value: 49 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1343', () => {
    const payload: TestPayload = { id: '1343_2', value: 222 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1343', () => {
    const payload: TestPayload = { id: '1343_3', value: 215 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1343', async () => {
    const payload: TestPayload = { id: '1343_4', value: 17 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1343', async () => {
    const payload: TestPayload = { id: '1343_5', value: 78 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1343', async () => {
    const payload: TestPayload = { id: '1343_6', value: 188 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1343', () => {
    const payload: TestPayload = { id: '1343_7', value: 279 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1343', () => {
    const payload: TestPayload = { id: '1343_8', value: 309 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1343', () => {
    const payload: TestPayload = { id: '1343_9', value: 403 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1343', () => {
    const payload: TestPayload = { id: '1343_10', value: 466 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1343', async () => {
    const payload: TestPayload = { id: '1343_11', value: 89 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1343', () => {
    const payload: TestPayload = { id: '1343_12', value: 426 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1343', async () => {
    const payload: TestPayload = { id: '1343_13', value: 481 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
