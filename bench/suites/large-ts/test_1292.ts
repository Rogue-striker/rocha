import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1292', () => {
  it('sync TS test 0 of file 1292', () => {
    const payload: TestPayload = { id: '1292_0', value: 416 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1292', () => {
    const payload: TestPayload = { id: '1292_1', value: 404 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1292', () => {
    const payload: TestPayload = { id: '1292_2', value: 369 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_3', value: 74 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1292', () => {
    const payload: TestPayload = { id: '1292_4', value: 61 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_5', value: 49 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_6', value: 391 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_7', value: 47 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_8', value: 136 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1292', () => {
    const payload: TestPayload = { id: '1292_9', value: 101 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1292', () => {
    const payload: TestPayload = { id: '1292_10', value: 391 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_11', value: 271 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1292', async () => {
    const payload: TestPayload = { id: '1292_12', value: 145 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1292', () => {
    const payload: TestPayload = { id: '1292_13', value: 180 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
