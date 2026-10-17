import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1174', () => {
  it('sync TS test 0 of file 1174', () => {
    const payload: TestPayload = { id: '1174_0', value: 248 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_1', value: 431 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_2', value: 431 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1174', () => {
    const payload: TestPayload = { id: '1174_3', value: 412 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1174', () => {
    const payload: TestPayload = { id: '1174_4', value: 496 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_5', value: 327 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_6', value: 27 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1174', () => {
    const payload: TestPayload = { id: '1174_7', value: 267 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_8', value: 8 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1174', () => {
    const payload: TestPayload = { id: '1174_9', value: 394 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1174', () => {
    const payload: TestPayload = { id: '1174_10', value: 352 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1174', () => {
    const payload: TestPayload = { id: '1174_11', value: 391 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_12', value: 52 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1174', async () => {
    const payload: TestPayload = { id: '1174_13', value: 442 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
