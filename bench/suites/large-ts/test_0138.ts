import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 138', () => {
  it('async TS test 0 of file 138', async () => {
    const payload: TestPayload = { id: '138_0', value: 238 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 138', async () => {
    const payload: TestPayload = { id: '138_1', value: 409 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 138', async () => {
    const payload: TestPayload = { id: '138_2', value: 324 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 138', () => {
    const payload: TestPayload = { id: '138_3', value: 334 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 138', async () => {
    const payload: TestPayload = { id: '138_4', value: 48 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 138', async () => {
    const payload: TestPayload = { id: '138_5', value: 493 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 138', async () => {
    const payload: TestPayload = { id: '138_6', value: 375 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 138', async () => {
    const payload: TestPayload = { id: '138_7', value: 55 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 138', async () => {
    const payload: TestPayload = { id: '138_8', value: 77 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 138', async () => {
    const payload: TestPayload = { id: '138_9', value: 465 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 138', async () => {
    const payload: TestPayload = { id: '138_10', value: 208 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 138', async () => {
    const payload: TestPayload = { id: '138_11', value: 476 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 138', () => {
    const payload: TestPayload = { id: '138_12', value: 130 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
