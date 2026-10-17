import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 503', () => {
  it('sync TS test 0 of file 503', () => {
    const payload: TestPayload = { id: '503_0', value: 19 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 503', () => {
    const payload: TestPayload = { id: '503_1', value: 167 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 503', () => {
    const payload: TestPayload = { id: '503_2', value: 408 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 503', async () => {
    const payload: TestPayload = { id: '503_3', value: 441 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 503', () => {
    const payload: TestPayload = { id: '503_4', value: 468 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 503', () => {
    const payload: TestPayload = { id: '503_5', value: 174 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 503', () => {
    const payload: TestPayload = { id: '503_6', value: 323 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 503', () => {
    const payload: TestPayload = { id: '503_7', value: 165 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 503', async () => {
    const payload: TestPayload = { id: '503_8', value: 109 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 503', async () => {
    const payload: TestPayload = { id: '503_9', value: 130 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 503', async () => {
    const payload: TestPayload = { id: '503_10', value: 92 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 503', async () => {
    const payload: TestPayload = { id: '503_11', value: 173 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 503', async () => {
    const payload: TestPayload = { id: '503_12', value: 181 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
