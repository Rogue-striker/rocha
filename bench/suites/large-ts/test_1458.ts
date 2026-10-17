import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1458', () => {
  it('async TS test 0 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_0', value: 296 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1458', () => {
    const payload: TestPayload = { id: '1458_1', value: 309 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_2', value: 55 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_3', value: 180 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_4', value: 130 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1458', () => {
    const payload: TestPayload = { id: '1458_5', value: 220 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1458', () => {
    const payload: TestPayload = { id: '1458_6', value: 351 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_7', value: 334 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_8', value: 282 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_9', value: 32 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1458', () => {
    const payload: TestPayload = { id: '1458_10', value: 271 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1458', () => {
    const payload: TestPayload = { id: '1458_11', value: 355 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_12', value: 269 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1458', async () => {
    const payload: TestPayload = { id: '1458_13', value: 107 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
