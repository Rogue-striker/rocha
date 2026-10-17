import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1415', () => {
  it('async TS test 0 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_0', value: 52 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_1', value: 417 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1415', () => {
    const payload: TestPayload = { id: '1415_2', value: 61 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_3', value: 319 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_4', value: 477 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_5', value: 436 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1415', () => {
    const payload: TestPayload = { id: '1415_6', value: 398 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_7', value: 230 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_8', value: 466 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_9', value: 285 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1415', () => {
    const payload: TestPayload = { id: '1415_10', value: 404 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1415', () => {
    const payload: TestPayload = { id: '1415_11', value: 151 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_12', value: 349 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1415', async () => {
    const payload: TestPayload = { id: '1415_13', value: 163 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
