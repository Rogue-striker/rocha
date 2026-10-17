import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1310', () => {
  it('sync TS test 0 of file 1310', () => {
    const payload: TestPayload = { id: '1310_0', value: 44 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1310', () => {
    const payload: TestPayload = { id: '1310_1', value: 386 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1310', async () => {
    const payload: TestPayload = { id: '1310_2', value: 326 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1310', async () => {
    const payload: TestPayload = { id: '1310_3', value: 401 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1310', () => {
    const payload: TestPayload = { id: '1310_4', value: 305 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1310', () => {
    const payload: TestPayload = { id: '1310_5', value: 342 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1310', () => {
    const payload: TestPayload = { id: '1310_6', value: 266 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1310', async () => {
    const payload: TestPayload = { id: '1310_7', value: 282 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1310', () => {
    const payload: TestPayload = { id: '1310_8', value: 281 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1310', async () => {
    const payload: TestPayload = { id: '1310_9', value: 238 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1310', async () => {
    const payload: TestPayload = { id: '1310_10', value: 206 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1310', () => {
    const payload: TestPayload = { id: '1310_11', value: 321 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1310', () => {
    const payload: TestPayload = { id: '1310_12', value: 458 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1310', async () => {
    const payload: TestPayload = { id: '1310_13', value: 438 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
