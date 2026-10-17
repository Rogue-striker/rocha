import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1315', () => {
  it('sync TS test 0 of file 1315', () => {
    const payload: TestPayload = { id: '1315_0', value: 157 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1315', () => {
    const payload: TestPayload = { id: '1315_1', value: 467 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_2', value: 202 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1315', () => {
    const payload: TestPayload = { id: '1315_3', value: 34 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_4', value: 413 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_5', value: 277 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_6', value: 391 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_7', value: 420 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_8', value: 313 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1315', () => {
    const payload: TestPayload = { id: '1315_9', value: 313 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_10', value: 101 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_11', value: 387 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1315', () => {
    const payload: TestPayload = { id: '1315_12', value: 180 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1315', async () => {
    const payload: TestPayload = { id: '1315_13', value: 97 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
