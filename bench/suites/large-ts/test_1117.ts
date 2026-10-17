import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1117', () => {
  it('async TS test 0 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_0', value: 95 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_1', value: 430 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1117', () => {
    const payload: TestPayload = { id: '1117_2', value: 46 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1117', () => {
    const payload: TestPayload = { id: '1117_3', value: 423 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1117', () => {
    const payload: TestPayload = { id: '1117_4', value: 329 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_5', value: 235 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1117', () => {
    const payload: TestPayload = { id: '1117_6', value: 48 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1117', () => {
    const payload: TestPayload = { id: '1117_7', value: 209 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_8', value: 293 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_9', value: 194 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_10', value: 276 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_11', value: 77 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1117', () => {
    const payload: TestPayload = { id: '1117_12', value: 382 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1117', async () => {
    const payload: TestPayload = { id: '1117_13', value: 198 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
