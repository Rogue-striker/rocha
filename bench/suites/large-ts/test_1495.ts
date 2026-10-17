import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1495', () => {
  it('sync TS test 0 of file 1495', () => {
    const payload: TestPayload = { id: '1495_0', value: 34 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1495', () => {
    const payload: TestPayload = { id: '1495_1', value: 432 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_2', value: 399 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_3', value: 204 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_4', value: 473 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1495', () => {
    const payload: TestPayload = { id: '1495_5', value: 199 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_6', value: 213 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_7', value: 180 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1495', () => {
    const payload: TestPayload = { id: '1495_8', value: 455 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_9', value: 390 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_10', value: 413 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1495', () => {
    const payload: TestPayload = { id: '1495_11', value: 392 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1495', async () => {
    const payload: TestPayload = { id: '1495_12', value: 431 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1495', () => {
    const payload: TestPayload = { id: '1495_13', value: 142 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
