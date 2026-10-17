import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1253', () => {
  it('async TS test 0 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_0', value: 300 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1253', () => {
    const payload: TestPayload = { id: '1253_1', value: 108 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_2', value: 447 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_3', value: 467 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_4', value: 490 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_5', value: 407 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1253', () => {
    const payload: TestPayload = { id: '1253_6', value: 477 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_7', value: 57 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1253', () => {
    const payload: TestPayload = { id: '1253_8', value: 322 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_9', value: 13 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1253', () => {
    const payload: TestPayload = { id: '1253_10', value: 72 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1253', () => {
    const payload: TestPayload = { id: '1253_11', value: 177 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_12', value: 352 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1253', async () => {
    const payload: TestPayload = { id: '1253_13', value: 417 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
