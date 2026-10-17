import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1005', () => {
  it('sync TS test 0 of file 1005', () => {
    const payload: TestPayload = { id: '1005_0', value: 289 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_1', value: 179 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1005', () => {
    const payload: TestPayload = { id: '1005_2', value: 353 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_3', value: 408 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1005', () => {
    const payload: TestPayload = { id: '1005_4', value: 126 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1005', () => {
    const payload: TestPayload = { id: '1005_5', value: 315 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_6', value: 149 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_7', value: 405 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_8', value: 448 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_9', value: 343 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_10', value: 368 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1005', async () => {
    const payload: TestPayload = { id: '1005_11', value: 65 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1005', () => {
    const payload: TestPayload = { id: '1005_12', value: 404 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1005', () => {
    const payload: TestPayload = { id: '1005_13', value: 88 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
