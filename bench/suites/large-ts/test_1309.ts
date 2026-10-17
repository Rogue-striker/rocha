import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1309', () => {
  it('async TS test 0 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_0', value: 458 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_1', value: 127 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1309', () => {
    const payload: TestPayload = { id: '1309_2', value: 332 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_3', value: 253 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1309', () => {
    const payload: TestPayload = { id: '1309_4', value: 343 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1309', () => {
    const payload: TestPayload = { id: '1309_5', value: 328 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_6', value: 131 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_7', value: 443 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1309', () => {
    const payload: TestPayload = { id: '1309_8', value: 469 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_9', value: 3 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1309', () => {
    const payload: TestPayload = { id: '1309_10', value: 489 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1309', () => {
    const payload: TestPayload = { id: '1309_11', value: 48 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_12', value: 76 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1309', async () => {
    const payload: TestPayload = { id: '1309_13', value: 217 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
