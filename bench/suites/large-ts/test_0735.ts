import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 735', () => {
  it('sync TS test 0 of file 735', () => {
    const payload: TestPayload = { id: '735_0', value: 360 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 735', async () => {
    const payload: TestPayload = { id: '735_1', value: 233 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 735', async () => {
    const payload: TestPayload = { id: '735_2', value: 269 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 735', () => {
    const payload: TestPayload = { id: '735_3', value: 11 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 735', async () => {
    const payload: TestPayload = { id: '735_4', value: 182 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 735', () => {
    const payload: TestPayload = { id: '735_5', value: 384 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 735', async () => {
    const payload: TestPayload = { id: '735_6', value: 439 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 735', async () => {
    const payload: TestPayload = { id: '735_7', value: 38 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 735', () => {
    const payload: TestPayload = { id: '735_8', value: 467 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 735', async () => {
    const payload: TestPayload = { id: '735_9', value: 438 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 735', () => {
    const payload: TestPayload = { id: '735_10', value: 180 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 735', () => {
    const payload: TestPayload = { id: '735_11', value: 242 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 735', async () => {
    const payload: TestPayload = { id: '735_12', value: 204 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
