import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1206', () => {
  it('async TS test 0 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_0', value: 291 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1206', () => {
    const payload: TestPayload = { id: '1206_1', value: 441 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_2', value: 4 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_3', value: 280 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_4', value: 9 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_5', value: 382 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1206', () => {
    const payload: TestPayload = { id: '1206_6', value: 419 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1206', () => {
    const payload: TestPayload = { id: '1206_7', value: 109 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1206', () => {
    const payload: TestPayload = { id: '1206_8', value: 2 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_9', value: 232 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1206', async () => {
    const payload: TestPayload = { id: '1206_10', value: 50 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1206', () => {
    const payload: TestPayload = { id: '1206_11', value: 455 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1206', () => {
    const payload: TestPayload = { id: '1206_12', value: 381 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1206', () => {
    const payload: TestPayload = { id: '1206_13', value: 333 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
