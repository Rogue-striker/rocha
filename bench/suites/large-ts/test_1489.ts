import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1489', () => {
  it('sync TS test 0 of file 1489', () => {
    const payload: TestPayload = { id: '1489_0', value: 430 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_1', value: 42 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1489', () => {
    const payload: TestPayload = { id: '1489_2', value: 226 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1489', () => {
    const payload: TestPayload = { id: '1489_3', value: 358 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_4', value: 327 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_5', value: 476 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1489', () => {
    const payload: TestPayload = { id: '1489_6', value: 221 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1489', () => {
    const payload: TestPayload = { id: '1489_7', value: 467 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1489', () => {
    const payload: TestPayload = { id: '1489_8', value: 421 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_9', value: 139 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_10', value: 38 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_11', value: 151 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1489', () => {
    const payload: TestPayload = { id: '1489_12', value: 406 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1489', async () => {
    const payload: TestPayload = { id: '1489_13', value: 52 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
