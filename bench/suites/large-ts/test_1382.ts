import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1382', () => {
  it('async TS test 0 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_0', value: 276 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1382', () => {
    const payload: TestPayload = { id: '1382_1', value: 467 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_2', value: 196 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_3', value: 362 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1382', () => {
    const payload: TestPayload = { id: '1382_4', value: 310 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1382', () => {
    const payload: TestPayload = { id: '1382_5', value: 374 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1382', () => {
    const payload: TestPayload = { id: '1382_6', value: 320 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_7', value: 135 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1382', () => {
    const payload: TestPayload = { id: '1382_8', value: 36 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1382', () => {
    const payload: TestPayload = { id: '1382_9', value: 286 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1382', () => {
    const payload: TestPayload = { id: '1382_10', value: 283 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_11', value: 144 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_12', value: 433 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1382', async () => {
    const payload: TestPayload = { id: '1382_13', value: 383 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
