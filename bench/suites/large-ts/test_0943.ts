import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 943', () => {
  it('async TS test 0 of file 943', async () => {
    const payload: TestPayload = { id: '943_0', value: 39 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 943', () => {
    const payload: TestPayload = { id: '943_1', value: 14 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 943', () => {
    const payload: TestPayload = { id: '943_2', value: 380 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 943', () => {
    const payload: TestPayload = { id: '943_3', value: 495 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 943', async () => {
    const payload: TestPayload = { id: '943_4', value: 409 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 943', () => {
    const payload: TestPayload = { id: '943_5', value: 366 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 943', () => {
    const payload: TestPayload = { id: '943_6', value: 218 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 943', () => {
    const payload: TestPayload = { id: '943_7', value: 404 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 943', () => {
    const payload: TestPayload = { id: '943_8', value: 129 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 943', async () => {
    const payload: TestPayload = { id: '943_9', value: 88 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 943', async () => {
    const payload: TestPayload = { id: '943_10', value: 120 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 943', () => {
    const payload: TestPayload = { id: '943_11', value: 144 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 943', () => {
    const payload: TestPayload = { id: '943_12', value: 2 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
