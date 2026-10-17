import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1004', () => {
  it('sync TS test 0 of file 1004', () => {
    const payload: TestPayload = { id: '1004_0', value: 410 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1004', () => {
    const payload: TestPayload = { id: '1004_1', value: 355 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1004', async () => {
    const payload: TestPayload = { id: '1004_2', value: 370 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1004', async () => {
    const payload: TestPayload = { id: '1004_3', value: 57 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1004', async () => {
    const payload: TestPayload = { id: '1004_4', value: 297 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1004', async () => {
    const payload: TestPayload = { id: '1004_5', value: 321 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1004', async () => {
    const payload: TestPayload = { id: '1004_6', value: 97 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1004', () => {
    const payload: TestPayload = { id: '1004_7', value: 420 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1004', () => {
    const payload: TestPayload = { id: '1004_8', value: 12 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1004', () => {
    const payload: TestPayload = { id: '1004_9', value: 374 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1004', () => {
    const payload: TestPayload = { id: '1004_10', value: 385 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1004', () => {
    const payload: TestPayload = { id: '1004_11', value: 98 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1004', async () => {
    const payload: TestPayload = { id: '1004_12', value: 256 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1004', () => {
    const payload: TestPayload = { id: '1004_13', value: 197 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
