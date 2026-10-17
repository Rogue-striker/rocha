import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1093', () => {
  it('sync TS test 0 of file 1093', () => {
    const payload: TestPayload = { id: '1093_0', value: 221 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1093', () => {
    const payload: TestPayload = { id: '1093_1', value: 368 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1093', async () => {
    const payload: TestPayload = { id: '1093_2', value: 15 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1093', () => {
    const payload: TestPayload = { id: '1093_3', value: 358 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1093', () => {
    const payload: TestPayload = { id: '1093_4', value: 265 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1093', () => {
    const payload: TestPayload = { id: '1093_5', value: 343 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1093', async () => {
    const payload: TestPayload = { id: '1093_6', value: 151 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1093', () => {
    const payload: TestPayload = { id: '1093_7', value: 147 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1093', () => {
    const payload: TestPayload = { id: '1093_8', value: 435 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1093', async () => {
    const payload: TestPayload = { id: '1093_9', value: 49 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1093', async () => {
    const payload: TestPayload = { id: '1093_10', value: 247 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1093', async () => {
    const payload: TestPayload = { id: '1093_11', value: 474 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1093', () => {
    const payload: TestPayload = { id: '1093_12', value: 172 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1093', () => {
    const payload: TestPayload = { id: '1093_13', value: 406 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
