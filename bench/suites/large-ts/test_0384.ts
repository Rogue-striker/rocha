import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 384', () => {
  it('async TS test 0 of file 384', async () => {
    const payload: TestPayload = { id: '384_0', value: 122 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 384', () => {
    const payload: TestPayload = { id: '384_1', value: 273 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 384', async () => {
    const payload: TestPayload = { id: '384_2', value: 255 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 384', () => {
    const payload: TestPayload = { id: '384_3', value: 246 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 384', () => {
    const payload: TestPayload = { id: '384_4', value: 213 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 384', () => {
    const payload: TestPayload = { id: '384_5', value: 324 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 384', () => {
    const payload: TestPayload = { id: '384_6', value: 66 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 384', () => {
    const payload: TestPayload = { id: '384_7', value: 329 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 384', () => {
    const payload: TestPayload = { id: '384_8', value: 389 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 384', async () => {
    const payload: TestPayload = { id: '384_9', value: 79 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 384', () => {
    const payload: TestPayload = { id: '384_10', value: 279 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 384', async () => {
    const payload: TestPayload = { id: '384_11', value: 316 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 384', async () => {
    const payload: TestPayload = { id: '384_12', value: 422 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
