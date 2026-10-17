import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1361', () => {
  it('async TS test 0 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_0', value: 324 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1361', () => {
    const payload: TestPayload = { id: '1361_1', value: 339 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1361', () => {
    const payload: TestPayload = { id: '1361_2', value: 453 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_3', value: 260 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1361', () => {
    const payload: TestPayload = { id: '1361_4', value: 2 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_5', value: 476 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1361', () => {
    const payload: TestPayload = { id: '1361_6', value: 273 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_7', value: 453 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_8', value: 489 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_9', value: 17 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1361', () => {
    const payload: TestPayload = { id: '1361_10', value: 13 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_11', value: 309 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_12', value: 298 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1361', async () => {
    const payload: TestPayload = { id: '1361_13', value: 270 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
