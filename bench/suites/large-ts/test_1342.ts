import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1342', () => {
  it('sync TS test 0 of file 1342', () => {
    const payload: TestPayload = { id: '1342_0', value: 167 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1342', async () => {
    const payload: TestPayload = { id: '1342_1', value: 39 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1342', () => {
    const payload: TestPayload = { id: '1342_2', value: 488 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1342', () => {
    const payload: TestPayload = { id: '1342_3', value: 364 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1342', async () => {
    const payload: TestPayload = { id: '1342_4', value: 202 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1342', () => {
    const payload: TestPayload = { id: '1342_5', value: 59 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1342', () => {
    const payload: TestPayload = { id: '1342_6', value: 203 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1342', () => {
    const payload: TestPayload = { id: '1342_7', value: 338 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1342', async () => {
    const payload: TestPayload = { id: '1342_8', value: 139 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1342', async () => {
    const payload: TestPayload = { id: '1342_9', value: 204 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1342', () => {
    const payload: TestPayload = { id: '1342_10', value: 395 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1342', () => {
    const payload: TestPayload = { id: '1342_11', value: 233 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1342', () => {
    const payload: TestPayload = { id: '1342_12', value: 201 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1342', async () => {
    const payload: TestPayload = { id: '1342_13', value: 372 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
