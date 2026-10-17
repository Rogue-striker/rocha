import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1138', () => {
  it('sync TS test 0 of file 1138', () => {
    const payload: TestPayload = { id: '1138_0', value: 44 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_1', value: 413 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_2', value: 293 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_3', value: 188 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_4', value: 449 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1138', () => {
    const payload: TestPayload = { id: '1138_5', value: 480 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1138', () => {
    const payload: TestPayload = { id: '1138_6', value: 270 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1138', () => {
    const payload: TestPayload = { id: '1138_7', value: 94 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1138', () => {
    const payload: TestPayload = { id: '1138_8', value: 449 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_9', value: 480 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_10', value: 467 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_11', value: 372 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1138', async () => {
    const payload: TestPayload = { id: '1138_12', value: 406 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1138', () => {
    const payload: TestPayload = { id: '1138_13', value: 282 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
