import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1340', () => {
  it('sync TS test 0 of file 1340', () => {
    const payload: TestPayload = { id: '1340_0', value: 414 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_1', value: 283 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_2', value: 171 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_3', value: 208 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1340', () => {
    const payload: TestPayload = { id: '1340_4', value: 283 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_5', value: 49 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1340', () => {
    const payload: TestPayload = { id: '1340_6', value: 7 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_7', value: 265 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1340', () => {
    const payload: TestPayload = { id: '1340_8', value: 165 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_9', value: 11 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_10', value: 391 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1340', async () => {
    const payload: TestPayload = { id: '1340_11', value: 104 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1340', () => {
    const payload: TestPayload = { id: '1340_12', value: 231 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1340', () => {
    const payload: TestPayload = { id: '1340_13', value: 24 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
