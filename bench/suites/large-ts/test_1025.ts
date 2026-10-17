import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1025', () => {
  it('sync TS test 0 of file 1025', () => {
    const payload: TestPayload = { id: '1025_0', value: 174 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1025', async () => {
    const payload: TestPayload = { id: '1025_1', value: 461 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1025', () => {
    const payload: TestPayload = { id: '1025_2', value: 379 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1025', () => {
    const payload: TestPayload = { id: '1025_3', value: 72 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1025', () => {
    const payload: TestPayload = { id: '1025_4', value: 14 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1025', async () => {
    const payload: TestPayload = { id: '1025_5', value: 51 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1025', () => {
    const payload: TestPayload = { id: '1025_6', value: 49 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1025', async () => {
    const payload: TestPayload = { id: '1025_7', value: 172 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1025', () => {
    const payload: TestPayload = { id: '1025_8', value: 12 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1025', async () => {
    const payload: TestPayload = { id: '1025_9', value: 342 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1025', () => {
    const payload: TestPayload = { id: '1025_10', value: 38 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1025', () => {
    const payload: TestPayload = { id: '1025_11', value: 446 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1025', async () => {
    const payload: TestPayload = { id: '1025_12', value: 124 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1025', () => {
    const payload: TestPayload = { id: '1025_13', value: 326 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
