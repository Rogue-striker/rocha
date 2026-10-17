import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 397', () => {
  it('sync TS test 0 of file 397', () => {
    const payload: TestPayload = { id: '397_0', value: 455 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 397', () => {
    const payload: TestPayload = { id: '397_1', value: 172 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 397', () => {
    const payload: TestPayload = { id: '397_2', value: 68 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 397', async () => {
    const payload: TestPayload = { id: '397_3', value: 303 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 397', async () => {
    const payload: TestPayload = { id: '397_4', value: 233 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 397', () => {
    const payload: TestPayload = { id: '397_5', value: 235 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 397', async () => {
    const payload: TestPayload = { id: '397_6', value: 121 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 397', async () => {
    const payload: TestPayload = { id: '397_7', value: 57 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 397', () => {
    const payload: TestPayload = { id: '397_8', value: 45 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 397', () => {
    const payload: TestPayload = { id: '397_9', value: 447 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 397', async () => {
    const payload: TestPayload = { id: '397_10', value: 401 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 397', async () => {
    const payload: TestPayload = { id: '397_11', value: 438 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 397', async () => {
    const payload: TestPayload = { id: '397_12', value: 416 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
