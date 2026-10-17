import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1473', () => {
  it('async TS test 0 of file 1473', async () => {
    const payload: TestPayload = { id: '1473_0', value: 150 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1473', () => {
    const payload: TestPayload = { id: '1473_1', value: 84 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1473', () => {
    const payload: TestPayload = { id: '1473_2', value: 425 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1473', () => {
    const payload: TestPayload = { id: '1473_3', value: 226 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1473', async () => {
    const payload: TestPayload = { id: '1473_4', value: 299 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1473', () => {
    const payload: TestPayload = { id: '1473_5', value: 239 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1473', async () => {
    const payload: TestPayload = { id: '1473_6', value: 196 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1473', async () => {
    const payload: TestPayload = { id: '1473_7', value: 35 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1473', () => {
    const payload: TestPayload = { id: '1473_8', value: 61 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1473', async () => {
    const payload: TestPayload = { id: '1473_9', value: 297 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1473', () => {
    const payload: TestPayload = { id: '1473_10', value: 380 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1473', () => {
    const payload: TestPayload = { id: '1473_11', value: 281 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1473', async () => {
    const payload: TestPayload = { id: '1473_12', value: 302 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1473', () => {
    const payload: TestPayload = { id: '1473_13', value: 41 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
