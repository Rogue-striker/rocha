import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1381', () => {
  it('sync TS test 0 of file 1381', () => {
    const payload: TestPayload = { id: '1381_0', value: 168 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_1', value: 437 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_2', value: 260 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_3', value: 132 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1381', () => {
    const payload: TestPayload = { id: '1381_4', value: 259 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_5', value: 453 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_6', value: 15 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_7', value: 161 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1381', () => {
    const payload: TestPayload = { id: '1381_8', value: 371 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1381', () => {
    const payload: TestPayload = { id: '1381_9', value: 60 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1381', () => {
    const payload: TestPayload = { id: '1381_10', value: 53 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_11', value: 359 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1381', () => {
    const payload: TestPayload = { id: '1381_12', value: 414 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1381', async () => {
    const payload: TestPayload = { id: '1381_13', value: 170 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
