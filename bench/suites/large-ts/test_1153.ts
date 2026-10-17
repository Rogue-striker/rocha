import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1153', () => {
  it('async TS test 0 of file 1153', async () => {
    const payload: TestPayload = { id: '1153_0', value: 62 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1153', () => {
    const payload: TestPayload = { id: '1153_1', value: 305 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1153', () => {
    const payload: TestPayload = { id: '1153_2', value: 280 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1153', () => {
    const payload: TestPayload = { id: '1153_3', value: 419 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1153', async () => {
    const payload: TestPayload = { id: '1153_4', value: 466 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1153', () => {
    const payload: TestPayload = { id: '1153_5', value: 479 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1153', async () => {
    const payload: TestPayload = { id: '1153_6', value: 272 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1153', () => {
    const payload: TestPayload = { id: '1153_7', value: 213 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1153', async () => {
    const payload: TestPayload = { id: '1153_8', value: 211 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1153', () => {
    const payload: TestPayload = { id: '1153_9', value: 10 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1153', async () => {
    const payload: TestPayload = { id: '1153_10', value: 48 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1153', () => {
    const payload: TestPayload = { id: '1153_11', value: 3 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1153', async () => {
    const payload: TestPayload = { id: '1153_12', value: 231 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1153', () => {
    const payload: TestPayload = { id: '1153_13', value: 454 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
