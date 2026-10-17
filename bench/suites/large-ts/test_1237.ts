import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1237', () => {
  it('sync TS test 0 of file 1237', () => {
    const payload: TestPayload = { id: '1237_0', value: 451 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_1', value: 207 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_2', value: 428 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1237', () => {
    const payload: TestPayload = { id: '1237_3', value: 82 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_4', value: 416 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1237', () => {
    const payload: TestPayload = { id: '1237_5', value: 242 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1237', () => {
    const payload: TestPayload = { id: '1237_6', value: 279 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1237', () => {
    const payload: TestPayload = { id: '1237_7', value: 55 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_8', value: 23 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1237', () => {
    const payload: TestPayload = { id: '1237_9', value: 52 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_10', value: 498 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_11', value: 165 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1237', async () => {
    const payload: TestPayload = { id: '1237_12', value: 87 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1237', () => {
    const payload: TestPayload = { id: '1237_13', value: 50 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
