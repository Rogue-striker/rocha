import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 135', () => {
  it('async TS test 0 of file 135', async () => {
    const payload: TestPayload = { id: '135_0', value: 141 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 135', () => {
    const payload: TestPayload = { id: '135_1', value: 250 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 135', async () => {
    const payload: TestPayload = { id: '135_2', value: 447 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 135', async () => {
    const payload: TestPayload = { id: '135_3', value: 443 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 135', async () => {
    const payload: TestPayload = { id: '135_4', value: 140 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 135', async () => {
    const payload: TestPayload = { id: '135_5', value: 269 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 135', () => {
    const payload: TestPayload = { id: '135_6', value: 497 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 135', () => {
    const payload: TestPayload = { id: '135_7', value: 454 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 135', async () => {
    const payload: TestPayload = { id: '135_8', value: 105 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 135', () => {
    const payload: TestPayload = { id: '135_9', value: 427 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 135', () => {
    const payload: TestPayload = { id: '135_10', value: 406 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 135', async () => {
    const payload: TestPayload = { id: '135_11', value: 485 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 135', async () => {
    const payload: TestPayload = { id: '135_12', value: 35 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
