import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1326', () => {
  it('sync TS test 0 of file 1326', () => {
    const payload: TestPayload = { id: '1326_0', value: 480 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1326', () => {
    const payload: TestPayload = { id: '1326_1', value: 494 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1326', () => {
    const payload: TestPayload = { id: '1326_2', value: 15 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1326', () => {
    const payload: TestPayload = { id: '1326_3', value: 311 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1326', () => {
    const payload: TestPayload = { id: '1326_4', value: 438 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1326', async () => {
    const payload: TestPayload = { id: '1326_5', value: 476 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1326', async () => {
    const payload: TestPayload = { id: '1326_6', value: 86 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1326', async () => {
    const payload: TestPayload = { id: '1326_7', value: 390 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1326', () => {
    const payload: TestPayload = { id: '1326_8', value: 484 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1326', async () => {
    const payload: TestPayload = { id: '1326_9', value: 1 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1326', () => {
    const payload: TestPayload = { id: '1326_10', value: 138 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1326', async () => {
    const payload: TestPayload = { id: '1326_11', value: 268 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1326', async () => {
    const payload: TestPayload = { id: '1326_12', value: 47 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1326', () => {
    const payload: TestPayload = { id: '1326_13', value: 338 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
