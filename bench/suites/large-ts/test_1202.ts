import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1202', () => {
  it('sync TS test 0 of file 1202', () => {
    const payload: TestPayload = { id: '1202_0', value: 38 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1202', () => {
    const payload: TestPayload = { id: '1202_1', value: 232 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1202', () => {
    const payload: TestPayload = { id: '1202_2', value: 149 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1202', async () => {
    const payload: TestPayload = { id: '1202_3', value: 453 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1202', () => {
    const payload: TestPayload = { id: '1202_4', value: 285 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1202', () => {
    const payload: TestPayload = { id: '1202_5', value: 474 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1202', async () => {
    const payload: TestPayload = { id: '1202_6', value: 82 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1202', async () => {
    const payload: TestPayload = { id: '1202_7', value: 222 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1202', () => {
    const payload: TestPayload = { id: '1202_8', value: 337 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1202', () => {
    const payload: TestPayload = { id: '1202_9', value: 386 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1202', async () => {
    const payload: TestPayload = { id: '1202_10', value: 121 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1202', () => {
    const payload: TestPayload = { id: '1202_11', value: 99 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1202', () => {
    const payload: TestPayload = { id: '1202_12', value: 306 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1202', () => {
    const payload: TestPayload = { id: '1202_13', value: 356 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
