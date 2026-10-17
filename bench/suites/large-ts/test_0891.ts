import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 891', () => {
  it('async TS test 0 of file 891', async () => {
    const payload: TestPayload = { id: '891_0', value: 98 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 891', async () => {
    const payload: TestPayload = { id: '891_1', value: 360 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 891', () => {
    const payload: TestPayload = { id: '891_2', value: 404 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 891', () => {
    const payload: TestPayload = { id: '891_3', value: 269 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 891', async () => {
    const payload: TestPayload = { id: '891_4', value: 426 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 891', async () => {
    const payload: TestPayload = { id: '891_5', value: 11 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 891', async () => {
    const payload: TestPayload = { id: '891_6', value: 60 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 891', async () => {
    const payload: TestPayload = { id: '891_7', value: 443 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 891', () => {
    const payload: TestPayload = { id: '891_8', value: 407 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 891', () => {
    const payload: TestPayload = { id: '891_9', value: 355 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 891', () => {
    const payload: TestPayload = { id: '891_10', value: 279 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 891', () => {
    const payload: TestPayload = { id: '891_11', value: 79 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 891', async () => {
    const payload: TestPayload = { id: '891_12', value: 197 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
