import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 793', () => {
  it('async TS test 0 of file 793', async () => {
    const payload: TestPayload = { id: '793_0', value: 57 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 793', async () => {
    const payload: TestPayload = { id: '793_1', value: 249 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 793', () => {
    const payload: TestPayload = { id: '793_2', value: 105 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 793', async () => {
    const payload: TestPayload = { id: '793_3', value: 50 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 793', async () => {
    const payload: TestPayload = { id: '793_4', value: 223 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 793', () => {
    const payload: TestPayload = { id: '793_5', value: 476 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 793', async () => {
    const payload: TestPayload = { id: '793_6', value: 246 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 793', () => {
    const payload: TestPayload = { id: '793_7', value: 488 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 793', async () => {
    const payload: TestPayload = { id: '793_8', value: 337 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 793', () => {
    const payload: TestPayload = { id: '793_9', value: 48 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 793', async () => {
    const payload: TestPayload = { id: '793_10', value: 455 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 793', async () => {
    const payload: TestPayload = { id: '793_11', value: 311 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 793', () => {
    const payload: TestPayload = { id: '793_12', value: 71 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
