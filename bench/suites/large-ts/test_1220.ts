import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1220', () => {
  it('sync TS test 0 of file 1220', () => {
    const payload: TestPayload = { id: '1220_0', value: 495 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_1', value: 81 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1220', () => {
    const payload: TestPayload = { id: '1220_2', value: 140 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_3', value: 259 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_4', value: 234 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_5', value: 92 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1220', () => {
    const payload: TestPayload = { id: '1220_6', value: 202 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1220', () => {
    const payload: TestPayload = { id: '1220_7', value: 398 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1220', () => {
    const payload: TestPayload = { id: '1220_8', value: 343 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_9', value: 426 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_10', value: 412 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_11', value: 238 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1220', () => {
    const payload: TestPayload = { id: '1220_12', value: 302 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1220', async () => {
    const payload: TestPayload = { id: '1220_13', value: 128 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
