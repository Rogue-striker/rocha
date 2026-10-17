import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1113', () => {
  it('async TS test 0 of file 1113', async () => {
    const payload: TestPayload = { id: '1113_0', value: 309 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1113', () => {
    const payload: TestPayload = { id: '1113_1', value: 488 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1113', async () => {
    const payload: TestPayload = { id: '1113_2', value: 321 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1113', () => {
    const payload: TestPayload = { id: '1113_3', value: 188 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1113', async () => {
    const payload: TestPayload = { id: '1113_4', value: 310 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1113', async () => {
    const payload: TestPayload = { id: '1113_5', value: 43 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1113', () => {
    const payload: TestPayload = { id: '1113_6', value: 395 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1113', () => {
    const payload: TestPayload = { id: '1113_7', value: 258 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1113', () => {
    const payload: TestPayload = { id: '1113_8', value: 375 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1113', () => {
    const payload: TestPayload = { id: '1113_9', value: 41 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1113', () => {
    const payload: TestPayload = { id: '1113_10', value: 234 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1113', async () => {
    const payload: TestPayload = { id: '1113_11', value: 29 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1113', async () => {
    const payload: TestPayload = { id: '1113_12', value: 343 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1113', () => {
    const payload: TestPayload = { id: '1113_13', value: 93 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
