import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 290', () => {
  it('async TS test 0 of file 290', async () => {
    const payload: TestPayload = { id: '290_0', value: 169 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 290', () => {
    const payload: TestPayload = { id: '290_1', value: 316 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 290', () => {
    const payload: TestPayload = { id: '290_2', value: 47 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 290', () => {
    const payload: TestPayload = { id: '290_3', value: 95 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 290', async () => {
    const payload: TestPayload = { id: '290_4', value: 253 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 290', async () => {
    const payload: TestPayload = { id: '290_5', value: 105 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 290', async () => {
    const payload: TestPayload = { id: '290_6', value: 355 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 290', () => {
    const payload: TestPayload = { id: '290_7', value: 124 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 290', async () => {
    const payload: TestPayload = { id: '290_8', value: 61 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 290', () => {
    const payload: TestPayload = { id: '290_9', value: 25 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 290', () => {
    const payload: TestPayload = { id: '290_10', value: 394 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 290', () => {
    const payload: TestPayload = { id: '290_11', value: 474 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 290', async () => {
    const payload: TestPayload = { id: '290_12', value: 270 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
