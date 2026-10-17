import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1421', () => {
  it('async TS test 0 of file 1421', async () => {
    const payload: TestPayload = { id: '1421_0', value: 65 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1421', () => {
    const payload: TestPayload = { id: '1421_1', value: 326 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1421', () => {
    const payload: TestPayload = { id: '1421_2', value: 127 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1421', () => {
    const payload: TestPayload = { id: '1421_3', value: 249 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1421', () => {
    const payload: TestPayload = { id: '1421_4', value: 474 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1421', async () => {
    const payload: TestPayload = { id: '1421_5', value: 279 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1421', async () => {
    const payload: TestPayload = { id: '1421_6', value: 49 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1421', async () => {
    const payload: TestPayload = { id: '1421_7', value: 469 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1421', () => {
    const payload: TestPayload = { id: '1421_8', value: 364 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1421', async () => {
    const payload: TestPayload = { id: '1421_9', value: 119 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1421', () => {
    const payload: TestPayload = { id: '1421_10', value: 369 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1421', () => {
    const payload: TestPayload = { id: '1421_11', value: 273 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1421', () => {
    const payload: TestPayload = { id: '1421_12', value: 7 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1421', async () => {
    const payload: TestPayload = { id: '1421_13', value: 74 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
