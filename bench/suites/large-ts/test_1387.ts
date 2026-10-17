import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1387', () => {
  it('sync TS test 0 of file 1387', () => {
    const payload: TestPayload = { id: '1387_0', value: 42 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1387', () => {
    const payload: TestPayload = { id: '1387_1', value: 422 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_2', value: 199 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1387', () => {
    const payload: TestPayload = { id: '1387_3', value: 410 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_4', value: 110 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_5', value: 325 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_6', value: 122 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1387', () => {
    const payload: TestPayload = { id: '1387_7', value: 235 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1387', () => {
    const payload: TestPayload = { id: '1387_8', value: 73 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1387', () => {
    const payload: TestPayload = { id: '1387_9', value: 119 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_10', value: 305 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1387', () => {
    const payload: TestPayload = { id: '1387_11', value: 111 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_12', value: 291 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1387', async () => {
    const payload: TestPayload = { id: '1387_13', value: 431 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
