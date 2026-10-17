import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1371', () => {
  it('sync TS test 0 of file 1371', () => {
    const payload: TestPayload = { id: '1371_0', value: 226 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1371', async () => {
    const payload: TestPayload = { id: '1371_1', value: 327 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1371', () => {
    const payload: TestPayload = { id: '1371_2', value: 233 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1371', () => {
    const payload: TestPayload = { id: '1371_3', value: 479 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1371', () => {
    const payload: TestPayload = { id: '1371_4', value: 50 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1371', async () => {
    const payload: TestPayload = { id: '1371_5', value: 6 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1371', async () => {
    const payload: TestPayload = { id: '1371_6', value: 39 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1371', async () => {
    const payload: TestPayload = { id: '1371_7', value: 118 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1371', () => {
    const payload: TestPayload = { id: '1371_8', value: 374 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1371', () => {
    const payload: TestPayload = { id: '1371_9', value: 387 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1371', () => {
    const payload: TestPayload = { id: '1371_10', value: 181 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1371', async () => {
    const payload: TestPayload = { id: '1371_11', value: 64 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1371', () => {
    const payload: TestPayload = { id: '1371_12', value: 48 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1371', async () => {
    const payload: TestPayload = { id: '1371_13', value: 132 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
