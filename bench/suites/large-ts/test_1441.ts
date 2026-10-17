import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1441', () => {
  it('sync TS test 0 of file 1441', () => {
    const payload: TestPayload = { id: '1441_0', value: 381 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1441', () => {
    const payload: TestPayload = { id: '1441_1', value: 81 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1441', () => {
    const payload: TestPayload = { id: '1441_2', value: 197 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1441', async () => {
    const payload: TestPayload = { id: '1441_3', value: 272 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1441', async () => {
    const payload: TestPayload = { id: '1441_4', value: 87 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1441', async () => {
    const payload: TestPayload = { id: '1441_5', value: 395 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1441', () => {
    const payload: TestPayload = { id: '1441_6', value: 450 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1441', () => {
    const payload: TestPayload = { id: '1441_7', value: 446 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1441', () => {
    const payload: TestPayload = { id: '1441_8', value: 34 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1441', () => {
    const payload: TestPayload = { id: '1441_9', value: 459 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1441', async () => {
    const payload: TestPayload = { id: '1441_10', value: 417 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1441', async () => {
    const payload: TestPayload = { id: '1441_11', value: 156 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1441', () => {
    const payload: TestPayload = { id: '1441_12', value: 43 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1441', () => {
    const payload: TestPayload = { id: '1441_13', value: 27 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
