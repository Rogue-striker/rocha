import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1414', () => {
  it('async TS test 0 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_0', value: 95 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1414', () => {
    const payload: TestPayload = { id: '1414_1', value: 455 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1414', () => {
    const payload: TestPayload = { id: '1414_2', value: 254 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1414', () => {
    const payload: TestPayload = { id: '1414_3', value: 231 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_4', value: 429 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_5', value: 216 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1414', () => {
    const payload: TestPayload = { id: '1414_6', value: 304 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_7', value: 250 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_8', value: 316 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1414', () => {
    const payload: TestPayload = { id: '1414_9', value: 165 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_10', value: 280 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_11', value: 299 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1414', () => {
    const payload: TestPayload = { id: '1414_12', value: 67 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1414', async () => {
    const payload: TestPayload = { id: '1414_13', value: 397 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
