import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1413', () => {
  it('async TS test 0 of file 1413', async () => {
    const payload: TestPayload = { id: '1413_0', value: 380 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1413', () => {
    const payload: TestPayload = { id: '1413_1', value: 261 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1413', () => {
    const payload: TestPayload = { id: '1413_2', value: 199 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1413', () => {
    const payload: TestPayload = { id: '1413_3', value: 23 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1413', () => {
    const payload: TestPayload = { id: '1413_4', value: 367 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1413', () => {
    const payload: TestPayload = { id: '1413_5', value: 91 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1413', () => {
    const payload: TestPayload = { id: '1413_6', value: 106 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1413', async () => {
    const payload: TestPayload = { id: '1413_7', value: 154 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1413', () => {
    const payload: TestPayload = { id: '1413_8', value: 299 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1413', async () => {
    const payload: TestPayload = { id: '1413_9', value: 349 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1413', () => {
    const payload: TestPayload = { id: '1413_10', value: 315 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1413', () => {
    const payload: TestPayload = { id: '1413_11', value: 115 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1413', () => {
    const payload: TestPayload = { id: '1413_12', value: 143 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1413', async () => {
    const payload: TestPayload = { id: '1413_13', value: 214 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
