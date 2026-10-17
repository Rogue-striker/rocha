import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 613', () => {
  it('sync TS test 0 of file 613', () => {
    const payload: TestPayload = { id: '613_0', value: 324 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 613', async () => {
    const payload: TestPayload = { id: '613_1', value: 153 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 613', async () => {
    const payload: TestPayload = { id: '613_2', value: 355 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 613', async () => {
    const payload: TestPayload = { id: '613_3', value: 256 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 613', () => {
    const payload: TestPayload = { id: '613_4', value: 432 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 613', () => {
    const payload: TestPayload = { id: '613_5', value: 439 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 613', async () => {
    const payload: TestPayload = { id: '613_6', value: 296 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 613', () => {
    const payload: TestPayload = { id: '613_7', value: 208 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 613', async () => {
    const payload: TestPayload = { id: '613_8', value: 346 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 613', async () => {
    const payload: TestPayload = { id: '613_9', value: 284 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 613', () => {
    const payload: TestPayload = { id: '613_10', value: 427 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 613', async () => {
    const payload: TestPayload = { id: '613_11', value: 233 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 613', async () => {
    const payload: TestPayload = { id: '613_12', value: 77 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
