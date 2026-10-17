import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1045', () => {
  it('async TS test 0 of file 1045', async () => {
    const payload: TestPayload = { id: '1045_0', value: 180 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1045', () => {
    const payload: TestPayload = { id: '1045_1', value: 278 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1045', async () => {
    const payload: TestPayload = { id: '1045_2', value: 374 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1045', () => {
    const payload: TestPayload = { id: '1045_3', value: 303 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1045', () => {
    const payload: TestPayload = { id: '1045_4', value: 483 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1045', () => {
    const payload: TestPayload = { id: '1045_5', value: 455 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1045', async () => {
    const payload: TestPayload = { id: '1045_6', value: 15 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1045', async () => {
    const payload: TestPayload = { id: '1045_7', value: 274 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1045', () => {
    const payload: TestPayload = { id: '1045_8', value: 444 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1045', () => {
    const payload: TestPayload = { id: '1045_9', value: 138 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1045', async () => {
    const payload: TestPayload = { id: '1045_10', value: 43 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1045', () => {
    const payload: TestPayload = { id: '1045_11', value: 3 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1045', () => {
    const payload: TestPayload = { id: '1045_12', value: 165 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1045', () => {
    const payload: TestPayload = { id: '1045_13', value: 124 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
