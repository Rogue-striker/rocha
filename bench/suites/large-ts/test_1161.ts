import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1161', () => {
  it('sync TS test 0 of file 1161', () => {
    const payload: TestPayload = { id: '1161_0', value: 65 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1161', () => {
    const payload: TestPayload = { id: '1161_1', value: 446 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1161', () => {
    const payload: TestPayload = { id: '1161_2', value: 197 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1161', async () => {
    const payload: TestPayload = { id: '1161_3', value: 310 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1161', () => {
    const payload: TestPayload = { id: '1161_4', value: 238 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1161', async () => {
    const payload: TestPayload = { id: '1161_5', value: 449 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1161', () => {
    const payload: TestPayload = { id: '1161_6', value: 226 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1161', () => {
    const payload: TestPayload = { id: '1161_7', value: 54 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1161', () => {
    const payload: TestPayload = { id: '1161_8', value: 466 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1161', () => {
    const payload: TestPayload = { id: '1161_9', value: 369 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1161', async () => {
    const payload: TestPayload = { id: '1161_10', value: 301 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1161', () => {
    const payload: TestPayload = { id: '1161_11', value: 439 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1161', async () => {
    const payload: TestPayload = { id: '1161_12', value: 205 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1161', () => {
    const payload: TestPayload = { id: '1161_13', value: 209 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
