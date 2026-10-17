import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 634', () => {
  it('async TS test 0 of file 634', async () => {
    const payload: TestPayload = { id: '634_0', value: 459 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 634', async () => {
    const payload: TestPayload = { id: '634_1', value: 240 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 634', async () => {
    const payload: TestPayload = { id: '634_2', value: 355 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 634', async () => {
    const payload: TestPayload = { id: '634_3', value: 470 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 634', async () => {
    const payload: TestPayload = { id: '634_4', value: 345 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 634', () => {
    const payload: TestPayload = { id: '634_5', value: 402 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 634', () => {
    const payload: TestPayload = { id: '634_6', value: 128 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 634', () => {
    const payload: TestPayload = { id: '634_7', value: 387 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 634', async () => {
    const payload: TestPayload = { id: '634_8', value: 18 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 634', async () => {
    const payload: TestPayload = { id: '634_9', value: 115 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 634', () => {
    const payload: TestPayload = { id: '634_10', value: 392 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 634', async () => {
    const payload: TestPayload = { id: '634_11', value: 494 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 634', () => {
    const payload: TestPayload = { id: '634_12', value: 221 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
