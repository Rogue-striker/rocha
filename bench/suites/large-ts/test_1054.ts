import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1054', () => {
  it('async TS test 0 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_0', value: 12 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_1', value: 382 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_2', value: 457 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_3', value: 383 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1054', () => {
    const payload: TestPayload = { id: '1054_4', value: 40 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_5', value: 57 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1054', () => {
    const payload: TestPayload = { id: '1054_6', value: 84 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1054', () => {
    const payload: TestPayload = { id: '1054_7', value: 237 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1054', () => {
    const payload: TestPayload = { id: '1054_8', value: 450 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1054', () => {
    const payload: TestPayload = { id: '1054_9', value: 290 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1054', () => {
    const payload: TestPayload = { id: '1054_10', value: 494 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_11', value: 322 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1054', () => {
    const payload: TestPayload = { id: '1054_12', value: 230 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1054', async () => {
    const payload: TestPayload = { id: '1054_13', value: 51 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
