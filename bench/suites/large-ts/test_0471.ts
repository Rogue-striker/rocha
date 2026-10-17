import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 471', () => {
  it('async TS test 0 of file 471', async () => {
    const payload: TestPayload = { id: '471_0', value: 238 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 471', async () => {
    const payload: TestPayload = { id: '471_1', value: 181 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 471', async () => {
    const payload: TestPayload = { id: '471_2', value: 440 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 471', async () => {
    const payload: TestPayload = { id: '471_3', value: 425 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 471', async () => {
    const payload: TestPayload = { id: '471_4', value: 267 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 471', async () => {
    const payload: TestPayload = { id: '471_5', value: 22 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 471', () => {
    const payload: TestPayload = { id: '471_6', value: 118 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 471', async () => {
    const payload: TestPayload = { id: '471_7', value: 263 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 471', async () => {
    const payload: TestPayload = { id: '471_8', value: 37 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 471', async () => {
    const payload: TestPayload = { id: '471_9', value: 135 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 471', async () => {
    const payload: TestPayload = { id: '471_10', value: 146 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 471', async () => {
    const payload: TestPayload = { id: '471_11', value: 106 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 471', () => {
    const payload: TestPayload = { id: '471_12', value: 316 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
