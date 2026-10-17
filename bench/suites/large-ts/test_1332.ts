import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1332', () => {
  it('async TS test 0 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_0', value: 87 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_1', value: 379 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1332', () => {
    const payload: TestPayload = { id: '1332_2', value: 312 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_3', value: 382 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_4', value: 395 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1332', () => {
    const payload: TestPayload = { id: '1332_5', value: 432 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1332', () => {
    const payload: TestPayload = { id: '1332_6', value: 243 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_7', value: 38 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1332', () => {
    const payload: TestPayload = { id: '1332_8', value: 255 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1332', () => {
    const payload: TestPayload = { id: '1332_9', value: 0 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_10', value: 487 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_11', value: 123 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_12', value: 89 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1332', async () => {
    const payload: TestPayload = { id: '1332_13', value: 107 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
