import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 434', () => {
  it('sync TS test 0 of file 434', () => {
    const payload: TestPayload = { id: '434_0', value: 254 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 434', () => {
    const payload: TestPayload = { id: '434_1', value: 37 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 434', async () => {
    const payload: TestPayload = { id: '434_2', value: 335 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 434', async () => {
    const payload: TestPayload = { id: '434_3', value: 431 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 434', () => {
    const payload: TestPayload = { id: '434_4', value: 456 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 434', async () => {
    const payload: TestPayload = { id: '434_5', value: 498 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 434', async () => {
    const payload: TestPayload = { id: '434_6', value: 109 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 434', () => {
    const payload: TestPayload = { id: '434_7', value: 298 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 434', async () => {
    const payload: TestPayload = { id: '434_8', value: 180 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 434', () => {
    const payload: TestPayload = { id: '434_9', value: 162 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 434', async () => {
    const payload: TestPayload = { id: '434_10', value: 149 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 434', async () => {
    const payload: TestPayload = { id: '434_11', value: 227 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 434', () => {
    const payload: TestPayload = { id: '434_12', value: 45 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
