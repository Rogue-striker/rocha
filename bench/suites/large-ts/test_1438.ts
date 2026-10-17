import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1438', () => {
  it('sync TS test 0 of file 1438', () => {
    const payload: TestPayload = { id: '1438_0', value: 451 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_1', value: 34 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1438', () => {
    const payload: TestPayload = { id: '1438_2', value: 254 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_3', value: 63 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_4', value: 262 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_5', value: 19 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1438', () => {
    const payload: TestPayload = { id: '1438_6', value: 162 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_7', value: 180 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_8', value: 77 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_9', value: 164 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1438', () => {
    const payload: TestPayload = { id: '1438_10', value: 413 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_11', value: 338 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_12', value: 334 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1438', async () => {
    const payload: TestPayload = { id: '1438_13', value: 368 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
