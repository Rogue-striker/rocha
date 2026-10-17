import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 954', () => {
  it('sync TS test 0 of file 954', () => {
    const payload: TestPayload = { id: '954_0', value: 27 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 954', async () => {
    const payload: TestPayload = { id: '954_1', value: 410 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 954', async () => {
    const payload: TestPayload = { id: '954_2', value: 456 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 954', () => {
    const payload: TestPayload = { id: '954_3', value: 182 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 954', () => {
    const payload: TestPayload = { id: '954_4', value: 295 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 954', () => {
    const payload: TestPayload = { id: '954_5', value: 454 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 954', () => {
    const payload: TestPayload = { id: '954_6', value: 14 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 954', async () => {
    const payload: TestPayload = { id: '954_7', value: 363 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 954', async () => {
    const payload: TestPayload = { id: '954_8', value: 481 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 954', () => {
    const payload: TestPayload = { id: '954_9', value: 36 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 954', () => {
    const payload: TestPayload = { id: '954_10', value: 118 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 954', async () => {
    const payload: TestPayload = { id: '954_11', value: 297 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 954', async () => {
    const payload: TestPayload = { id: '954_12', value: 63 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
