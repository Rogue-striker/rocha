import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 893', () => {
  it('sync TS test 0 of file 893', () => {
    const payload: TestPayload = { id: '893_0', value: 143 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 893', async () => {
    const payload: TestPayload = { id: '893_1', value: 471 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 893', async () => {
    const payload: TestPayload = { id: '893_2', value: 362 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 893', async () => {
    const payload: TestPayload = { id: '893_3', value: 323 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 893', async () => {
    const payload: TestPayload = { id: '893_4', value: 118 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 893', () => {
    const payload: TestPayload = { id: '893_5', value: 130 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 893', () => {
    const payload: TestPayload = { id: '893_6', value: 313 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 893', () => {
    const payload: TestPayload = { id: '893_7', value: 285 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 893', async () => {
    const payload: TestPayload = { id: '893_8', value: 130 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 893', async () => {
    const payload: TestPayload = { id: '893_9', value: 171 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 893', () => {
    const payload: TestPayload = { id: '893_10', value: 342 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 893', () => {
    const payload: TestPayload = { id: '893_11', value: 214 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 893', async () => {
    const payload: TestPayload = { id: '893_12', value: 75 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
