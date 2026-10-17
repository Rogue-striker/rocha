import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1065', () => {
  it('sync TS test 0 of file 1065', () => {
    const payload: TestPayload = { id: '1065_0', value: 106 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_1', value: 105 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_2', value: 112 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1065', () => {
    const payload: TestPayload = { id: '1065_3', value: 310 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_4', value: 356 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_5', value: 113 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_6', value: 106 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_7', value: 477 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_8', value: 398 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_9', value: 263 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1065', () => {
    const payload: TestPayload = { id: '1065_10', value: 112 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1065', () => {
    const payload: TestPayload = { id: '1065_11', value: 371 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1065', () => {
    const payload: TestPayload = { id: '1065_12', value: 305 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1065', async () => {
    const payload: TestPayload = { id: '1065_13', value: 94 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
