import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 257', () => {
  it('sync TS test 0 of file 257', () => {
    const payload: TestPayload = { id: '257_0', value: 60 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 257', () => {
    const payload: TestPayload = { id: '257_1', value: 178 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 257', async () => {
    const payload: TestPayload = { id: '257_2', value: 347 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 257', async () => {
    const payload: TestPayload = { id: '257_3', value: 226 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 257', () => {
    const payload: TestPayload = { id: '257_4', value: 168 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 257', () => {
    const payload: TestPayload = { id: '257_5', value: 245 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 257', async () => {
    const payload: TestPayload = { id: '257_6', value: 204 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 257', () => {
    const payload: TestPayload = { id: '257_7', value: 343 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 257', () => {
    const payload: TestPayload = { id: '257_8', value: 462 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 257', async () => {
    const payload: TestPayload = { id: '257_9', value: 193 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 257', async () => {
    const payload: TestPayload = { id: '257_10', value: 22 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 257', () => {
    const payload: TestPayload = { id: '257_11', value: 228 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 257', () => {
    const payload: TestPayload = { id: '257_12', value: 43 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
