import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1422', () => {
  it('async TS test 0 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_0', value: 84 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1422', () => {
    const payload: TestPayload = { id: '1422_1', value: 470 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_2', value: 363 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_3', value: 318 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_4', value: 496 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_5', value: 9 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_6', value: 402 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1422', () => {
    const payload: TestPayload = { id: '1422_7', value: 383 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_8', value: 116 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_9', value: 148 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1422', async () => {
    const payload: TestPayload = { id: '1422_10', value: 466 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1422', () => {
    const payload: TestPayload = { id: '1422_11', value: 25 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1422', () => {
    const payload: TestPayload = { id: '1422_12', value: 283 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1422', () => {
    const payload: TestPayload = { id: '1422_13', value: 185 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
