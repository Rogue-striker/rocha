import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1294', () => {
  it('sync TS test 0 of file 1294', () => {
    const payload: TestPayload = { id: '1294_0', value: 208 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1294', () => {
    const payload: TestPayload = { id: '1294_1', value: 280 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_2', value: 98 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_3', value: 29 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1294', () => {
    const payload: TestPayload = { id: '1294_4', value: 390 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_5', value: 282 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_6', value: 418 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1294', () => {
    const payload: TestPayload = { id: '1294_7', value: 105 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_8', value: 45 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_9', value: 401 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1294', async () => {
    const payload: TestPayload = { id: '1294_10', value: 227 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1294', () => {
    const payload: TestPayload = { id: '1294_11', value: 474 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1294', () => {
    const payload: TestPayload = { id: '1294_12', value: 385 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1294', () => {
    const payload: TestPayload = { id: '1294_13', value: 386 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
