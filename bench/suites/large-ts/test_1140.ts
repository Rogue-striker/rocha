import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1140', () => {
  it('async TS test 0 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_0', value: 272 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_1', value: 320 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1140', () => {
    const payload: TestPayload = { id: '1140_2', value: 364 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_3', value: 128 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_4', value: 222 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1140', () => {
    const payload: TestPayload = { id: '1140_5', value: 263 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1140', () => {
    const payload: TestPayload = { id: '1140_6', value: 215 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1140', () => {
    const payload: TestPayload = { id: '1140_7', value: 274 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1140', () => {
    const payload: TestPayload = { id: '1140_8', value: 357 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_9', value: 432 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_10', value: 70 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1140', () => {
    const payload: TestPayload = { id: '1140_11', value: 36 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_12', value: 235 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1140', async () => {
    const payload: TestPayload = { id: '1140_13', value: 410 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
