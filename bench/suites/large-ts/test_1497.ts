import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1497', () => {
  it('sync TS test 0 of file 1497', () => {
    const payload: TestPayload = { id: '1497_0', value: 353 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_1', value: 252 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_2', value: 307 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_3', value: 476 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1497', () => {
    const payload: TestPayload = { id: '1497_4', value: 194 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_5', value: 42 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_6', value: 186 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_7', value: 278 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1497', () => {
    const payload: TestPayload = { id: '1497_8', value: 450 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_9', value: 428 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_10', value: 9 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1497', () => {
    const payload: TestPayload = { id: '1497_11', value: 35 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_12', value: 49 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1497', async () => {
    const payload: TestPayload = { id: '1497_13', value: 414 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
