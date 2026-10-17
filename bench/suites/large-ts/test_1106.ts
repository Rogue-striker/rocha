import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1106', () => {
  it('sync TS test 0 of file 1106', () => {
    const payload: TestPayload = { id: '1106_0', value: 407 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1106', () => {
    const payload: TestPayload = { id: '1106_1', value: 36 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_2', value: 75 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1106', () => {
    const payload: TestPayload = { id: '1106_3', value: 18 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_4', value: 431 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_5', value: 217 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_6', value: 218 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_7', value: 277 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_8', value: 106 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1106', () => {
    const payload: TestPayload = { id: '1106_9', value: 413 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_10', value: 344 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_11', value: 28 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1106', () => {
    const payload: TestPayload = { id: '1106_12', value: 410 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1106', async () => {
    const payload: TestPayload = { id: '1106_13', value: 280 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
