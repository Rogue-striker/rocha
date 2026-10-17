import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1122', () => {
  it('sync TS test 0 of file 1122', () => {
    const payload: TestPayload = { id: '1122_0', value: 46 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1122', () => {
    const payload: TestPayload = { id: '1122_1', value: 454 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1122', async () => {
    const payload: TestPayload = { id: '1122_2', value: 453 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1122', async () => {
    const payload: TestPayload = { id: '1122_3', value: 90 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1122', async () => {
    const payload: TestPayload = { id: '1122_4', value: 374 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1122', () => {
    const payload: TestPayload = { id: '1122_5', value: 388 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1122', () => {
    const payload: TestPayload = { id: '1122_6', value: 207 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1122', async () => {
    const payload: TestPayload = { id: '1122_7', value: 215 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1122', async () => {
    const payload: TestPayload = { id: '1122_8', value: 375 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1122', () => {
    const payload: TestPayload = { id: '1122_9', value: 49 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1122', () => {
    const payload: TestPayload = { id: '1122_10', value: 493 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1122', () => {
    const payload: TestPayload = { id: '1122_11', value: 484 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1122', () => {
    const payload: TestPayload = { id: '1122_12', value: 429 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1122', () => {
    const payload: TestPayload = { id: '1122_13', value: 324 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
