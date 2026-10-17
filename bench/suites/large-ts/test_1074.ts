import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1074', () => {
  it('sync TS test 0 of file 1074', () => {
    const payload: TestPayload = { id: '1074_0', value: 310 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1074', async () => {
    const payload: TestPayload = { id: '1074_1', value: 243 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1074', () => {
    const payload: TestPayload = { id: '1074_2', value: 192 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1074', async () => {
    const payload: TestPayload = { id: '1074_3', value: 260 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1074', () => {
    const payload: TestPayload = { id: '1074_4', value: 103 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1074', () => {
    const payload: TestPayload = { id: '1074_5', value: 174 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1074', () => {
    const payload: TestPayload = { id: '1074_6', value: 212 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1074', async () => {
    const payload: TestPayload = { id: '1074_7', value: 340 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1074', async () => {
    const payload: TestPayload = { id: '1074_8', value: 30 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1074', () => {
    const payload: TestPayload = { id: '1074_9', value: 414 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1074', () => {
    const payload: TestPayload = { id: '1074_10', value: 491 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1074', () => {
    const payload: TestPayload = { id: '1074_11', value: 208 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1074', async () => {
    const payload: TestPayload = { id: '1074_12', value: 412 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1074', () => {
    const payload: TestPayload = { id: '1074_13', value: 110 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
