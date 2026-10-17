import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1311', () => {
  it('async TS test 0 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_0', value: 373 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1311', () => {
    const payload: TestPayload = { id: '1311_1', value: 357 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_2', value: 326 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1311', () => {
    const payload: TestPayload = { id: '1311_3', value: 33 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1311', () => {
    const payload: TestPayload = { id: '1311_4', value: 269 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_5', value: 245 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_6', value: 341 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1311', () => {
    const payload: TestPayload = { id: '1311_7', value: 178 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1311', () => {
    const payload: TestPayload = { id: '1311_8', value: 265 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_9', value: 277 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_10', value: 154 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_11', value: 441 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_12', value: 372 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1311', async () => {
    const payload: TestPayload = { id: '1311_13', value: 352 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
