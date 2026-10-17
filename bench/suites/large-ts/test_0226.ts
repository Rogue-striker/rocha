import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 226', () => {
  it('async TS test 0 of file 226', async () => {
    const payload: TestPayload = { id: '226_0', value: 282 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 226', () => {
    const payload: TestPayload = { id: '226_1', value: 193 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 226', async () => {
    const payload: TestPayload = { id: '226_2', value: 145 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 226', () => {
    const payload: TestPayload = { id: '226_3', value: 378 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 226', async () => {
    const payload: TestPayload = { id: '226_4', value: 24 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 226', async () => {
    const payload: TestPayload = { id: '226_5', value: 101 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 226', () => {
    const payload: TestPayload = { id: '226_6', value: 195 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 226', async () => {
    const payload: TestPayload = { id: '226_7', value: 294 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 226', () => {
    const payload: TestPayload = { id: '226_8', value: 308 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 226', async () => {
    const payload: TestPayload = { id: '226_9', value: 67 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 226', async () => {
    const payload: TestPayload = { id: '226_10', value: 437 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 226', () => {
    const payload: TestPayload = { id: '226_11', value: 49 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 226', async () => {
    const payload: TestPayload = { id: '226_12', value: 451 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
