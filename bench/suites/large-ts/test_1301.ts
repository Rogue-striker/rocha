import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1301', () => {
  it('async TS test 0 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_0', value: 379 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_1', value: 177 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_2', value: 32 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_3', value: 378 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1301', () => {
    const payload: TestPayload = { id: '1301_4', value: 426 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1301', () => {
    const payload: TestPayload = { id: '1301_5', value: 369 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_6', value: 324 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_7', value: 121 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_8', value: 52 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_9', value: 381 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1301', () => {
    const payload: TestPayload = { id: '1301_10', value: 196 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1301', async () => {
    const payload: TestPayload = { id: '1301_11', value: 253 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1301', () => {
    const payload: TestPayload = { id: '1301_12', value: 211 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1301', () => {
    const payload: TestPayload = { id: '1301_13', value: 460 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
