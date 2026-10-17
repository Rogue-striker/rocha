import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1411', () => {
  it('async TS test 0 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_0', value: 485 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1411', () => {
    const payload: TestPayload = { id: '1411_1', value: 245 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_2', value: 98 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1411', () => {
    const payload: TestPayload = { id: '1411_3', value: 381 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1411', () => {
    const payload: TestPayload = { id: '1411_4', value: 11 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_5', value: 442 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_6', value: 314 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_7', value: 141 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1411', () => {
    const payload: TestPayload = { id: '1411_8', value: 482 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_9', value: 17 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1411', () => {
    const payload: TestPayload = { id: '1411_10', value: 310 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_11', value: 50 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_12', value: 357 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1411', async () => {
    const payload: TestPayload = { id: '1411_13', value: 472 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
