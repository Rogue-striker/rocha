import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1002', () => {
  it('async TS test 0 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_0', value: 328 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_1', value: 419 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1002', () => {
    const payload: TestPayload = { id: '1002_2', value: 177 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_3', value: 246 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1002', () => {
    const payload: TestPayload = { id: '1002_4', value: 254 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1002', () => {
    const payload: TestPayload = { id: '1002_5', value: 350 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_6', value: 341 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1002', () => {
    const payload: TestPayload = { id: '1002_7', value: 204 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1002', () => {
    const payload: TestPayload = { id: '1002_8', value: 106 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_9', value: 219 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_10', value: 80 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1002', () => {
    const payload: TestPayload = { id: '1002_11', value: 171 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1002', () => {
    const payload: TestPayload = { id: '1002_12', value: 219 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1002', async () => {
    const payload: TestPayload = { id: '1002_13', value: 238 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
