import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 415', () => {
  it('async TS test 0 of file 415', async () => {
    const payload: TestPayload = { id: '415_0', value: 216 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 415', () => {
    const payload: TestPayload = { id: '415_1', value: 322 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 415', () => {
    const payload: TestPayload = { id: '415_2', value: 55 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 415', () => {
    const payload: TestPayload = { id: '415_3', value: 91 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 415', () => {
    const payload: TestPayload = { id: '415_4', value: 458 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 415', async () => {
    const payload: TestPayload = { id: '415_5', value: 32 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 415', async () => {
    const payload: TestPayload = { id: '415_6', value: 295 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 415', async () => {
    const payload: TestPayload = { id: '415_7', value: 347 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 415', () => {
    const payload: TestPayload = { id: '415_8', value: 128 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 415', () => {
    const payload: TestPayload = { id: '415_9', value: 269 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 415', () => {
    const payload: TestPayload = { id: '415_10', value: 268 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 415', async () => {
    const payload: TestPayload = { id: '415_11', value: 23 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 415', () => {
    const payload: TestPayload = { id: '415_12', value: 125 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
