import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1033', () => {
  it('sync TS test 0 of file 1033', () => {
    const payload: TestPayload = { id: '1033_0', value: 353 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_1', value: 383 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1033', () => {
    const payload: TestPayload = { id: '1033_2', value: 174 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_3', value: 409 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_4', value: 455 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_5', value: 1 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_6', value: 340 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1033', () => {
    const payload: TestPayload = { id: '1033_7', value: 72 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1033', () => {
    const payload: TestPayload = { id: '1033_8', value: 310 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1033', () => {
    const payload: TestPayload = { id: '1033_9', value: 37 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_10', value: 206 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_11', value: 189 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_12', value: 192 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1033', async () => {
    const payload: TestPayload = { id: '1033_13', value: 196 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
