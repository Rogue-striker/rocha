import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1021', () => {
  it('sync TS test 0 of file 1021', () => {
    const payload: TestPayload = { id: '1021_0', value: 437 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_1', value: 212 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_2', value: 253 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_3', value: 351 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_4', value: 405 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_5', value: 391 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1021', () => {
    const payload: TestPayload = { id: '1021_6', value: 270 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_7', value: 429 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1021', () => {
    const payload: TestPayload = { id: '1021_8', value: 51 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_9', value: 384 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1021', () => {
    const payload: TestPayload = { id: '1021_10', value: 227 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_11', value: 93 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1021', async () => {
    const payload: TestPayload = { id: '1021_12', value: 11 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1021', () => {
    const payload: TestPayload = { id: '1021_13', value: 110 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
