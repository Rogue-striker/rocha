import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 237', () => {
  it('async TS test 0 of file 237', async () => {
    const payload: TestPayload = { id: '237_0', value: 392 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 237', async () => {
    const payload: TestPayload = { id: '237_1', value: 314 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 237', async () => {
    const payload: TestPayload = { id: '237_2', value: 426 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 237', async () => {
    const payload: TestPayload = { id: '237_3', value: 6 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 237', async () => {
    const payload: TestPayload = { id: '237_4', value: 50 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 237', async () => {
    const payload: TestPayload = { id: '237_5', value: 352 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 237', async () => {
    const payload: TestPayload = { id: '237_6', value: 168 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 237', () => {
    const payload: TestPayload = { id: '237_7', value: 341 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 237', () => {
    const payload: TestPayload = { id: '237_8', value: 461 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 237', () => {
    const payload: TestPayload = { id: '237_9', value: 198 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 237', () => {
    const payload: TestPayload = { id: '237_10', value: 88 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 237', async () => {
    const payload: TestPayload = { id: '237_11', value: 227 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 237', () => {
    const payload: TestPayload = { id: '237_12', value: 106 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
