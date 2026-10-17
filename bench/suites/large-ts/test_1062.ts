import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1062', () => {
  it('sync TS test 0 of file 1062', () => {
    const payload: TestPayload = { id: '1062_0', value: 157 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_1', value: 447 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_2', value: 124 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_3', value: 434 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1062', () => {
    const payload: TestPayload = { id: '1062_4', value: 300 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1062', () => {
    const payload: TestPayload = { id: '1062_5', value: 156 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_6', value: 326 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1062', () => {
    const payload: TestPayload = { id: '1062_7', value: 200 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_8', value: 131 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1062', () => {
    const payload: TestPayload = { id: '1062_9', value: 469 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1062', () => {
    const payload: TestPayload = { id: '1062_10', value: 351 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_11', value: 104 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_12', value: 121 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1062', async () => {
    const payload: TestPayload = { id: '1062_13', value: 227 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
