import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1194', () => {
  it('sync TS test 0 of file 1194', () => {
    const payload: TestPayload = { id: '1194_0', value: 43 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1194', () => {
    const payload: TestPayload = { id: '1194_1', value: 231 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_2', value: 315 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1194', () => {
    const payload: TestPayload = { id: '1194_3', value: 230 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_4', value: 136 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1194', () => {
    const payload: TestPayload = { id: '1194_5', value: 496 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_6', value: 117 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_7', value: 324 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1194', () => {
    const payload: TestPayload = { id: '1194_8', value: 277 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_9', value: 280 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_10', value: 250 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_11', value: 441 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1194', async () => {
    const payload: TestPayload = { id: '1194_12', value: 403 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1194', () => {
    const payload: TestPayload = { id: '1194_13', value: 169 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
