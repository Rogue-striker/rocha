import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 417', () => {
  it('async TS test 0 of file 417', async () => {
    const payload: TestPayload = { id: '417_0', value: 183 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 417', async () => {
    const payload: TestPayload = { id: '417_1', value: 101 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 417', async () => {
    const payload: TestPayload = { id: '417_2', value: 393 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 417', () => {
    const payload: TestPayload = { id: '417_3', value: 114 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 417', async () => {
    const payload: TestPayload = { id: '417_4', value: 422 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 417', async () => {
    const payload: TestPayload = { id: '417_5', value: 298 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 417', async () => {
    const payload: TestPayload = { id: '417_6', value: 240 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 417', async () => {
    const payload: TestPayload = { id: '417_7', value: 99 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 417', () => {
    const payload: TestPayload = { id: '417_8', value: 220 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 417', () => {
    const payload: TestPayload = { id: '417_9', value: 269 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 417', async () => {
    const payload: TestPayload = { id: '417_10', value: 467 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 417', async () => {
    const payload: TestPayload = { id: '417_11', value: 80 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 417', async () => {
    const payload: TestPayload = { id: '417_12', value: 354 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
