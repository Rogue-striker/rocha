import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1203', () => {
  it('sync TS test 0 of file 1203', () => {
    const payload: TestPayload = { id: '1203_0', value: 249 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_1', value: 279 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1203', () => {
    const payload: TestPayload = { id: '1203_2', value: 91 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_3', value: 102 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1203', () => {
    const payload: TestPayload = { id: '1203_4', value: 383 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_5', value: 307 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1203', () => {
    const payload: TestPayload = { id: '1203_6', value: 180 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_7', value: 24 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_8', value: 77 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_9', value: 114 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_10', value: 389 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1203', () => {
    const payload: TestPayload = { id: '1203_11', value: 6 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_12', value: 220 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1203', async () => {
    const payload: TestPayload = { id: '1203_13', value: 128 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
