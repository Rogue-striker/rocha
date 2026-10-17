import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 14', () => {
  it('sync TS test 0 of file 14', () => {
    const payload: TestPayload = { id: '14_0', value: 313 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 14', () => {
    const payload: TestPayload = { id: '14_1', value: 240 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 14', () => {
    const payload: TestPayload = { id: '14_2', value: 130 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 14', async () => {
    const payload: TestPayload = { id: '14_3', value: 259 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 14', async () => {
    const payload: TestPayload = { id: '14_4', value: 295 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 14', () => {
    const payload: TestPayload = { id: '14_5', value: 390 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 14', async () => {
    const payload: TestPayload = { id: '14_6', value: 459 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 14', () => {
    const payload: TestPayload = { id: '14_7', value: 29 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 14', () => {
    const payload: TestPayload = { id: '14_8', value: 170 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 14', () => {
    const payload: TestPayload = { id: '14_9', value: 114 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 14', async () => {
    const payload: TestPayload = { id: '14_10', value: 290 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 14', async () => {
    const payload: TestPayload = { id: '14_11', value: 170 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 14', async () => {
    const payload: TestPayload = { id: '14_12', value: 16 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
