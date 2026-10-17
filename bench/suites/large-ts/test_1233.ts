import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1233', () => {
  it('sync TS test 0 of file 1233', () => {
    const payload: TestPayload = { id: '1233_0', value: 1 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1233', () => {
    const payload: TestPayload = { id: '1233_1', value: 144 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_2', value: 97 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_3', value: 345 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1233', () => {
    const payload: TestPayload = { id: '1233_4', value: 397 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_5', value: 186 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_6', value: 77 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1233', () => {
    const payload: TestPayload = { id: '1233_7', value: 184 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1233', () => {
    const payload: TestPayload = { id: '1233_8', value: 482 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_9', value: 163 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1233', () => {
    const payload: TestPayload = { id: '1233_10', value: 301 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_11', value: 303 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1233', () => {
    const payload: TestPayload = { id: '1233_12', value: 94 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1233', async () => {
    const payload: TestPayload = { id: '1233_13', value: 211 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
