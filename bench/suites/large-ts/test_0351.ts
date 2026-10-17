import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 351', () => {
  it('async TS test 0 of file 351', async () => {
    const payload: TestPayload = { id: '351_0', value: 267 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 351', () => {
    const payload: TestPayload = { id: '351_1', value: 252 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 351', async () => {
    const payload: TestPayload = { id: '351_2', value: 321 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 351', () => {
    const payload: TestPayload = { id: '351_3', value: 200 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 351', async () => {
    const payload: TestPayload = { id: '351_4', value: 370 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 351', async () => {
    const payload: TestPayload = { id: '351_5', value: 87 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 351', async () => {
    const payload: TestPayload = { id: '351_6', value: 367 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 351', async () => {
    const payload: TestPayload = { id: '351_7', value: 475 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 351', async () => {
    const payload: TestPayload = { id: '351_8', value: 246 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 351', () => {
    const payload: TestPayload = { id: '351_9', value: 162 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 351', async () => {
    const payload: TestPayload = { id: '351_10', value: 284 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 351', async () => {
    const payload: TestPayload = { id: '351_11', value: 231 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 351', async () => {
    const payload: TestPayload = { id: '351_12', value: 80 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
