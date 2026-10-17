import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 214', () => {
  it('sync TS test 0 of file 214', () => {
    const payload: TestPayload = { id: '214_0', value: 413 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 214', () => {
    const payload: TestPayload = { id: '214_1', value: 393 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 214', async () => {
    const payload: TestPayload = { id: '214_2', value: 37 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 214', () => {
    const payload: TestPayload = { id: '214_3', value: 349 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 214', async () => {
    const payload: TestPayload = { id: '214_4', value: 76 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 214', async () => {
    const payload: TestPayload = { id: '214_5', value: 70 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 214', () => {
    const payload: TestPayload = { id: '214_6', value: 58 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 214', () => {
    const payload: TestPayload = { id: '214_7', value: 171 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 214', async () => {
    const payload: TestPayload = { id: '214_8', value: 205 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 214', () => {
    const payload: TestPayload = { id: '214_9', value: 405 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 214', () => {
    const payload: TestPayload = { id: '214_10', value: 100 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 214', async () => {
    const payload: TestPayload = { id: '214_11', value: 184 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 214', async () => {
    const payload: TestPayload = { id: '214_12', value: 160 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
