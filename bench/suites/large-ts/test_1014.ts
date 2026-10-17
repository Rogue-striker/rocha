import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1014', () => {
  it('async TS test 0 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_0', value: 442 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_1', value: 380 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1014', () => {
    const payload: TestPayload = { id: '1014_2', value: 386 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_3', value: 90 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_4', value: 93 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_5', value: 179 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1014', () => {
    const payload: TestPayload = { id: '1014_6', value: 346 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_7', value: 380 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1014', () => {
    const payload: TestPayload = { id: '1014_8', value: 104 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1014', () => {
    const payload: TestPayload = { id: '1014_9', value: 393 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_10', value: 210 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1014', () => {
    const payload: TestPayload = { id: '1014_11', value: 491 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1014', () => {
    const payload: TestPayload = { id: '1014_12', value: 246 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1014', async () => {
    const payload: TestPayload = { id: '1014_13', value: 409 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
