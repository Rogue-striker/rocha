import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 297', () => {
  it('sync TS test 0 of file 297', () => {
    const payload: TestPayload = { id: '297_0', value: 266 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 297', async () => {
    const payload: TestPayload = { id: '297_1', value: 307 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 297', () => {
    const payload: TestPayload = { id: '297_2', value: 266 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 297', async () => {
    const payload: TestPayload = { id: '297_3', value: 178 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 297', async () => {
    const payload: TestPayload = { id: '297_4', value: 5 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 297', () => {
    const payload: TestPayload = { id: '297_5', value: 456 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 297', () => {
    const payload: TestPayload = { id: '297_6', value: 263 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 297', async () => {
    const payload: TestPayload = { id: '297_7', value: 455 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 297', async () => {
    const payload: TestPayload = { id: '297_8', value: 397 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 297', () => {
    const payload: TestPayload = { id: '297_9', value: 286 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 297', () => {
    const payload: TestPayload = { id: '297_10', value: 451 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 297', async () => {
    const payload: TestPayload = { id: '297_11', value: 174 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 297', () => {
    const payload: TestPayload = { id: '297_12', value: 270 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
