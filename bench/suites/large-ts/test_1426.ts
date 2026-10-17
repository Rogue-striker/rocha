import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1426', () => {
  it('async TS test 0 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_0', value: 320 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_1', value: 146 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1426', () => {
    const payload: TestPayload = { id: '1426_2', value: 76 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1426', () => {
    const payload: TestPayload = { id: '1426_3', value: 460 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1426', () => {
    const payload: TestPayload = { id: '1426_4', value: 224 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_5', value: 115 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_6', value: 103 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1426', () => {
    const payload: TestPayload = { id: '1426_7', value: 220 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1426', () => {
    const payload: TestPayload = { id: '1426_8', value: 362 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_9', value: 0 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_10', value: 294 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1426', () => {
    const payload: TestPayload = { id: '1426_11', value: 469 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1426', async () => {
    const payload: TestPayload = { id: '1426_12', value: 277 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1426', () => {
    const payload: TestPayload = { id: '1426_13', value: 248 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
