import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1058', () => {
  it('sync TS test 0 of file 1058', () => {
    const payload: TestPayload = { id: '1058_0', value: 181 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_1', value: 300 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_2', value: 38 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_3', value: 204 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_4', value: 191 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1058', () => {
    const payload: TestPayload = { id: '1058_5', value: 254 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_6', value: 60 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_7', value: 448 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_8', value: 43 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1058', () => {
    const payload: TestPayload = { id: '1058_9', value: 426 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1058', () => {
    const payload: TestPayload = { id: '1058_10', value: 387 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1058', () => {
    const payload: TestPayload = { id: '1058_11', value: 92 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1058', () => {
    const payload: TestPayload = { id: '1058_12', value: 264 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1058', async () => {
    const payload: TestPayload = { id: '1058_13', value: 489 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
