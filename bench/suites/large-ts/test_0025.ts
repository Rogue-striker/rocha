import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 25', () => {
  it('async TS test 0 of file 25', async () => {
    const payload: TestPayload = { id: '25_0', value: 444 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 25', async () => {
    const payload: TestPayload = { id: '25_1', value: 427 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 25', async () => {
    const payload: TestPayload = { id: '25_2', value: 315 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 25', async () => {
    const payload: TestPayload = { id: '25_3', value: 294 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 25', async () => {
    const payload: TestPayload = { id: '25_4', value: 312 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 25', async () => {
    const payload: TestPayload = { id: '25_5', value: 86 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 25', () => {
    const payload: TestPayload = { id: '25_6', value: 355 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 25', () => {
    const payload: TestPayload = { id: '25_7', value: 163 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 25', () => {
    const payload: TestPayload = { id: '25_8', value: 62 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 25', async () => {
    const payload: TestPayload = { id: '25_9', value: 140 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 25', () => {
    const payload: TestPayload = { id: '25_10', value: 229 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 25', async () => {
    const payload: TestPayload = { id: '25_11', value: 68 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 25', async () => {
    const payload: TestPayload = { id: '25_12', value: 107 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
