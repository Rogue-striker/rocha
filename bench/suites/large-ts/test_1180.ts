import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1180', () => {
  it('async TS test 0 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_0', value: 299 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1180', () => {
    const payload: TestPayload = { id: '1180_1', value: 92 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_2', value: 321 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1180', () => {
    const payload: TestPayload = { id: '1180_3', value: 496 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_4', value: 76 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_5', value: 471 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1180', () => {
    const payload: TestPayload = { id: '1180_6', value: 275 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_7', value: 47 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1180', () => {
    const payload: TestPayload = { id: '1180_8', value: 441 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1180', () => {
    const payload: TestPayload = { id: '1180_9', value: 320 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_10', value: 65 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_11', value: 387 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1180', async () => {
    const payload: TestPayload = { id: '1180_12', value: 172 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1180', () => {
    const payload: TestPayload = { id: '1180_13', value: 461 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
