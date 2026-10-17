import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 114', () => {
  it('async TS test 0 of file 114', async () => {
    const payload: TestPayload = { id: '114_0', value: 429 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 114', async () => {
    const payload: TestPayload = { id: '114_1', value: 186 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 114', async () => {
    const payload: TestPayload = { id: '114_2', value: 320 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 114', () => {
    const payload: TestPayload = { id: '114_3', value: 399 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 114', () => {
    const payload: TestPayload = { id: '114_4', value: 456 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 114', () => {
    const payload: TestPayload = { id: '114_5', value: 190 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 114', () => {
    const payload: TestPayload = { id: '114_6', value: 383 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 114', () => {
    const payload: TestPayload = { id: '114_7', value: 384 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 114', () => {
    const payload: TestPayload = { id: '114_8', value: 209 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 114', async () => {
    const payload: TestPayload = { id: '114_9', value: 266 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 114', () => {
    const payload: TestPayload = { id: '114_10', value: 151 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 114', () => {
    const payload: TestPayload = { id: '114_11', value: 23 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 114', () => {
    const payload: TestPayload = { id: '114_12', value: 51 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
