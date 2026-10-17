import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1060', () => {
  it('async TS test 0 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_0', value: 493 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_1', value: 98 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_2', value: 137 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_3', value: 414 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1060', () => {
    const payload: TestPayload = { id: '1060_4', value: 409 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_5', value: 309 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1060', () => {
    const payload: TestPayload = { id: '1060_6', value: 435 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_7', value: 44 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1060', () => {
    const payload: TestPayload = { id: '1060_8', value: 244 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1060', () => {
    const payload: TestPayload = { id: '1060_9', value: 361 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_10', value: 181 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_11', value: 367 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1060', () => {
    const payload: TestPayload = { id: '1060_12', value: 144 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1060', async () => {
    const payload: TestPayload = { id: '1060_13', value: 243 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
