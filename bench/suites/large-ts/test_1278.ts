import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1278', () => {
  it('async TS test 0 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_0', value: 353 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_1', value: 200 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1278', () => {
    const payload: TestPayload = { id: '1278_2', value: 268 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_3', value: 306 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1278', () => {
    const payload: TestPayload = { id: '1278_4', value: 414 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1278', () => {
    const payload: TestPayload = { id: '1278_5', value: 452 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_6', value: 55 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1278', () => {
    const payload: TestPayload = { id: '1278_7', value: 269 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_8', value: 86 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_9', value: 484 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1278', () => {
    const payload: TestPayload = { id: '1278_10', value: 45 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1278', () => {
    const payload: TestPayload = { id: '1278_11', value: 30 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1278', () => {
    const payload: TestPayload = { id: '1278_12', value: 50 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1278', async () => {
    const payload: TestPayload = { id: '1278_13', value: 121 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
