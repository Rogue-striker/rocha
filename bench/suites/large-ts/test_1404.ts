import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1404', () => {
  it('async TS test 0 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_0', value: 477 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_1', value: 404 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_2', value: 474 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_3', value: 383 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1404', () => {
    const payload: TestPayload = { id: '1404_4', value: 124 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_5', value: 246 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1404', () => {
    const payload: TestPayload = { id: '1404_6', value: 311 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_7', value: 263 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1404', () => {
    const payload: TestPayload = { id: '1404_8', value: 226 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_9', value: 277 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_10', value: 117 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1404', async () => {
    const payload: TestPayload = { id: '1404_11', value: 172 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1404', () => {
    const payload: TestPayload = { id: '1404_12', value: 216 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1404', () => {
    const payload: TestPayload = { id: '1404_13', value: 99 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
