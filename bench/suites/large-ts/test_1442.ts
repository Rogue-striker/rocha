import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1442', () => {
  it('sync TS test 0 of file 1442', () => {
    const payload: TestPayload = { id: '1442_0', value: 495 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_1', value: 205 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1442', () => {
    const payload: TestPayload = { id: '1442_2', value: 268 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_3', value: 376 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_4', value: 467 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1442', () => {
    const payload: TestPayload = { id: '1442_5', value: 249 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_6', value: 187 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1442', () => {
    const payload: TestPayload = { id: '1442_7', value: 264 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1442', () => {
    const payload: TestPayload = { id: '1442_8', value: 429 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_9', value: 55 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1442', () => {
    const payload: TestPayload = { id: '1442_10', value: 403 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_11', value: 385 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_12', value: 158 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1442', async () => {
    const payload: TestPayload = { id: '1442_13', value: 370 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
