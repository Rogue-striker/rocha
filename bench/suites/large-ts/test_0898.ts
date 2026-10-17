import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 898', () => {
  it('async TS test 0 of file 898', async () => {
    const payload: TestPayload = { id: '898_0', value: 209 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 898', async () => {
    const payload: TestPayload = { id: '898_1', value: 326 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 898', async () => {
    const payload: TestPayload = { id: '898_2', value: 45 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 898', () => {
    const payload: TestPayload = { id: '898_3', value: 453 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 898', () => {
    const payload: TestPayload = { id: '898_4', value: 326 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 898', () => {
    const payload: TestPayload = { id: '898_5', value: 343 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 898', async () => {
    const payload: TestPayload = { id: '898_6', value: 346 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 898', () => {
    const payload: TestPayload = { id: '898_7', value: 185 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 898', async () => {
    const payload: TestPayload = { id: '898_8', value: 365 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 898', () => {
    const payload: TestPayload = { id: '898_9', value: 345 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 898', async () => {
    const payload: TestPayload = { id: '898_10', value: 126 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 898', () => {
    const payload: TestPayload = { id: '898_11', value: 55 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 898', async () => {
    const payload: TestPayload = { id: '898_12', value: 244 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
