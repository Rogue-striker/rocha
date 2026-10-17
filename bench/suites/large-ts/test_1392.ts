import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1392', () => {
  it('sync TS test 0 of file 1392', () => {
    const payload: TestPayload = { id: '1392_0', value: 347 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1392', async () => {
    const payload: TestPayload = { id: '1392_1', value: 75 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1392', () => {
    const payload: TestPayload = { id: '1392_2', value: 125 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1392', () => {
    const payload: TestPayload = { id: '1392_3', value: 75 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1392', async () => {
    const payload: TestPayload = { id: '1392_4', value: 98 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1392', async () => {
    const payload: TestPayload = { id: '1392_5', value: 288 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1392', async () => {
    const payload: TestPayload = { id: '1392_6', value: 61 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1392', () => {
    const payload: TestPayload = { id: '1392_7', value: 236 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1392', () => {
    const payload: TestPayload = { id: '1392_8', value: 371 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1392', async () => {
    const payload: TestPayload = { id: '1392_9', value: 316 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1392', () => {
    const payload: TestPayload = { id: '1392_10', value: 406 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1392', () => {
    const payload: TestPayload = { id: '1392_11', value: 72 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1392', () => {
    const payload: TestPayload = { id: '1392_12', value: 91 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1392', () => {
    const payload: TestPayload = { id: '1392_13', value: 366 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
