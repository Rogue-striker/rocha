import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1109', () => {
  it('async TS test 0 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_0', value: 458 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_1', value: 242 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_2', value: 203 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_3', value: 58 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1109', () => {
    const payload: TestPayload = { id: '1109_4', value: 284 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_5', value: 147 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_6', value: 126 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1109', () => {
    const payload: TestPayload = { id: '1109_7', value: 469 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1109', () => {
    const payload: TestPayload = { id: '1109_8', value: 432 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_9', value: 149 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1109', () => {
    const payload: TestPayload = { id: '1109_10', value: 265 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1109', () => {
    const payload: TestPayload = { id: '1109_11', value: 408 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_12', value: 42 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1109', async () => {
    const payload: TestPayload = { id: '1109_13', value: 119 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
