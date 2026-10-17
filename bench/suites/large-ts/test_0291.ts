import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 291', () => {
  it('sync TS test 0 of file 291', () => {
    const payload: TestPayload = { id: '291_0', value: 362 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 291', async () => {
    const payload: TestPayload = { id: '291_1', value: 161 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 291', () => {
    const payload: TestPayload = { id: '291_2', value: 54 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 291', () => {
    const payload: TestPayload = { id: '291_3', value: 266 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 291', () => {
    const payload: TestPayload = { id: '291_4', value: 402 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 291', async () => {
    const payload: TestPayload = { id: '291_5', value: 495 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 291', () => {
    const payload: TestPayload = { id: '291_6', value: 384 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 291', () => {
    const payload: TestPayload = { id: '291_7', value: 178 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 291', async () => {
    const payload: TestPayload = { id: '291_8', value: 235 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 291', () => {
    const payload: TestPayload = { id: '291_9', value: 349 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 291', async () => {
    const payload: TestPayload = { id: '291_10', value: 300 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 291', () => {
    const payload: TestPayload = { id: '291_11', value: 43 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 291', async () => {
    const payload: TestPayload = { id: '291_12', value: 203 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
