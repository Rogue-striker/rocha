import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1094', () => {
  it('async TS test 0 of file 1094', async () => {
    const payload: TestPayload = { id: '1094_0', value: 233 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1094', async () => {
    const payload: TestPayload = { id: '1094_1', value: 54 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1094', () => {
    const payload: TestPayload = { id: '1094_2', value: 5 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1094', () => {
    const payload: TestPayload = { id: '1094_3', value: 368 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1094', async () => {
    const payload: TestPayload = { id: '1094_4', value: 15 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1094', () => {
    const payload: TestPayload = { id: '1094_5', value: 374 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1094', () => {
    const payload: TestPayload = { id: '1094_6', value: 490 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1094', () => {
    const payload: TestPayload = { id: '1094_7', value: 281 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1094', async () => {
    const payload: TestPayload = { id: '1094_8', value: 411 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1094', async () => {
    const payload: TestPayload = { id: '1094_9', value: 393 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1094', () => {
    const payload: TestPayload = { id: '1094_10', value: 323 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1094', () => {
    const payload: TestPayload = { id: '1094_11', value: 439 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1094', () => {
    const payload: TestPayload = { id: '1094_12', value: 196 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1094', () => {
    const payload: TestPayload = { id: '1094_13', value: 154 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
