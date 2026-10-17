import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1165', () => {
  it('sync TS test 0 of file 1165', () => {
    const payload: TestPayload = { id: '1165_0', value: 454 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1165', () => {
    const payload: TestPayload = { id: '1165_1', value: 457 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1165', async () => {
    const payload: TestPayload = { id: '1165_2', value: 312 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1165', () => {
    const payload: TestPayload = { id: '1165_3', value: 130 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1165', () => {
    const payload: TestPayload = { id: '1165_4', value: 463 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1165', async () => {
    const payload: TestPayload = { id: '1165_5', value: 254 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1165', async () => {
    const payload: TestPayload = { id: '1165_6', value: 387 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1165', async () => {
    const payload: TestPayload = { id: '1165_7', value: 24 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1165', async () => {
    const payload: TestPayload = { id: '1165_8', value: 125 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1165', () => {
    const payload: TestPayload = { id: '1165_9', value: 495 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1165', () => {
    const payload: TestPayload = { id: '1165_10', value: 128 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1165', () => {
    const payload: TestPayload = { id: '1165_11', value: 344 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1165', () => {
    const payload: TestPayload = { id: '1165_12', value: 461 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1165', () => {
    const payload: TestPayload = { id: '1165_13', value: 179 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
