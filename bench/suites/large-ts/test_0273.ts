import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 273', () => {
  it('sync TS test 0 of file 273', () => {
    const payload: TestPayload = { id: '273_0', value: 426 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 273', () => {
    const payload: TestPayload = { id: '273_1', value: 156 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 273', async () => {
    const payload: TestPayload = { id: '273_2', value: 54 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 273', () => {
    const payload: TestPayload = { id: '273_3', value: 124 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 273', () => {
    const payload: TestPayload = { id: '273_4', value: 10 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 273', () => {
    const payload: TestPayload = { id: '273_5', value: 384 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 273', () => {
    const payload: TestPayload = { id: '273_6', value: 278 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 273', async () => {
    const payload: TestPayload = { id: '273_7', value: 261 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 273', async () => {
    const payload: TestPayload = { id: '273_8', value: 87 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 273', () => {
    const payload: TestPayload = { id: '273_9', value: 178 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 273', () => {
    const payload: TestPayload = { id: '273_10', value: 165 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 273', async () => {
    const payload: TestPayload = { id: '273_11', value: 207 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 273', async () => {
    const payload: TestPayload = { id: '273_12', value: 29 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
