import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 295', () => {
  it('async TS test 0 of file 295', async () => {
    const payload: TestPayload = { id: '295_0', value: 23 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 295', () => {
    const payload: TestPayload = { id: '295_1', value: 486 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 295', async () => {
    const payload: TestPayload = { id: '295_2', value: 346 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 295', async () => {
    const payload: TestPayload = { id: '295_3', value: 77 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 295', async () => {
    const payload: TestPayload = { id: '295_4', value: 53 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 295', async () => {
    const payload: TestPayload = { id: '295_5', value: 66 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 295', () => {
    const payload: TestPayload = { id: '295_6', value: 41 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 295', async () => {
    const payload: TestPayload = { id: '295_7', value: 258 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 295', () => {
    const payload: TestPayload = { id: '295_8', value: 238 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 295', () => {
    const payload: TestPayload = { id: '295_9', value: 332 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 295', async () => {
    const payload: TestPayload = { id: '295_10', value: 274 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 295', async () => {
    const payload: TestPayload = { id: '295_11', value: 417 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 295', () => {
    const payload: TestPayload = { id: '295_12', value: 29 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
