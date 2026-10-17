import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 374', () => {
  it('async TS test 0 of file 374', async () => {
    const payload: TestPayload = { id: '374_0', value: 253 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 374', () => {
    const payload: TestPayload = { id: '374_1', value: 165 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 374', async () => {
    const payload: TestPayload = { id: '374_2', value: 217 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 374', () => {
    const payload: TestPayload = { id: '374_3', value: 330 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 374', async () => {
    const payload: TestPayload = { id: '374_4', value: 99 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 374', async () => {
    const payload: TestPayload = { id: '374_5', value: 445 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 374', () => {
    const payload: TestPayload = { id: '374_6', value: 306 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 374', () => {
    const payload: TestPayload = { id: '374_7', value: 52 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 374', async () => {
    const payload: TestPayload = { id: '374_8', value: 276 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 374', async () => {
    const payload: TestPayload = { id: '374_9', value: 324 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 374', () => {
    const payload: TestPayload = { id: '374_10', value: 349 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 374', async () => {
    const payload: TestPayload = { id: '374_11', value: 179 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 374', () => {
    const payload: TestPayload = { id: '374_12', value: 328 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
