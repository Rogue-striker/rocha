import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1333', () => {
  it('sync TS test 0 of file 1333', () => {
    const payload: TestPayload = { id: '1333_0', value: 170 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1333', () => {
    const payload: TestPayload = { id: '1333_1', value: 480 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_2', value: 334 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1333', () => {
    const payload: TestPayload = { id: '1333_3', value: 118 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_4', value: 342 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_5', value: 260 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_6', value: 80 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1333', () => {
    const payload: TestPayload = { id: '1333_7', value: 439 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1333', () => {
    const payload: TestPayload = { id: '1333_8', value: 480 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_9', value: 186 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_10', value: 270 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1333', () => {
    const payload: TestPayload = { id: '1333_11', value: 279 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_12', value: 230 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1333', async () => {
    const payload: TestPayload = { id: '1333_13', value: 300 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
