import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1070', () => {
  it('sync TS test 0 of file 1070', () => {
    const payload: TestPayload = { id: '1070_0', value: 144 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_1', value: 478 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1070', () => {
    const payload: TestPayload = { id: '1070_2', value: 314 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_3', value: 46 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_4', value: 496 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_5', value: 362 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1070', () => {
    const payload: TestPayload = { id: '1070_6', value: 401 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_7', value: 335 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_8', value: 29 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1070', () => {
    const payload: TestPayload = { id: '1070_9', value: 293 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1070', () => {
    const payload: TestPayload = { id: '1070_10', value: 269 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1070', async () => {
    const payload: TestPayload = { id: '1070_11', value: 255 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1070', () => {
    const payload: TestPayload = { id: '1070_12', value: 373 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1070', () => {
    const payload: TestPayload = { id: '1070_13', value: 137 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
