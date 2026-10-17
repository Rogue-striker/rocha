import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 794', () => {
  it('async TS test 0 of file 794', async () => {
    const payload: TestPayload = { id: '794_0', value: 384 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 794', async () => {
    const payload: TestPayload = { id: '794_1', value: 425 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 794', () => {
    const payload: TestPayload = { id: '794_2', value: 499 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 794', async () => {
    const payload: TestPayload = { id: '794_3', value: 235 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 794', () => {
    const payload: TestPayload = { id: '794_4', value: 180 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 794', () => {
    const payload: TestPayload = { id: '794_5', value: 318 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 794', () => {
    const payload: TestPayload = { id: '794_6', value: 38 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 794', async () => {
    const payload: TestPayload = { id: '794_7', value: 469 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 794', () => {
    const payload: TestPayload = { id: '794_8', value: 268 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 794', () => {
    const payload: TestPayload = { id: '794_9', value: 287 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 794', async () => {
    const payload: TestPayload = { id: '794_10', value: 123 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 794', async () => {
    const payload: TestPayload = { id: '794_11', value: 64 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 794', async () => {
    const payload: TestPayload = { id: '794_12', value: 485 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
