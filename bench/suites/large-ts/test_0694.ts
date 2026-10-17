import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 694', () => {
  it('sync TS test 0 of file 694', () => {
    const payload: TestPayload = { id: '694_0', value: 283 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 694', () => {
    const payload: TestPayload = { id: '694_1', value: 96 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 694', async () => {
    const payload: TestPayload = { id: '694_2', value: 61 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 694', () => {
    const payload: TestPayload = { id: '694_3', value: 434 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 694', () => {
    const payload: TestPayload = { id: '694_4', value: 152 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 694', () => {
    const payload: TestPayload = { id: '694_5', value: 38 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 694', async () => {
    const payload: TestPayload = { id: '694_6', value: 117 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 694', () => {
    const payload: TestPayload = { id: '694_7', value: 117 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 694', async () => {
    const payload: TestPayload = { id: '694_8', value: 254 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 694', () => {
    const payload: TestPayload = { id: '694_9', value: 251 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 694', async () => {
    const payload: TestPayload = { id: '694_10', value: 50 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 694', async () => {
    const payload: TestPayload = { id: '694_11', value: 467 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 694', async () => {
    const payload: TestPayload = { id: '694_12', value: 363 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
