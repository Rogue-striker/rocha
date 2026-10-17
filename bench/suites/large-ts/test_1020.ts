import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1020', () => {
  it('async TS test 0 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_0', value: 63 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1020', () => {
    const payload: TestPayload = { id: '1020_1', value: 313 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_2', value: 95 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1020', () => {
    const payload: TestPayload = { id: '1020_3', value: 293 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1020', () => {
    const payload: TestPayload = { id: '1020_4', value: 284 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1020', () => {
    const payload: TestPayload = { id: '1020_5', value: 213 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_6', value: 357 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1020', () => {
    const payload: TestPayload = { id: '1020_7', value: 133 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_8', value: 53 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_9', value: 26 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_10', value: 429 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1020', () => {
    const payload: TestPayload = { id: '1020_11', value: 52 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1020', () => {
    const payload: TestPayload = { id: '1020_12', value: 230 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1020', async () => {
    const payload: TestPayload = { id: '1020_13', value: 461 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
