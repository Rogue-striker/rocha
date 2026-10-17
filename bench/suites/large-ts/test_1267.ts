import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1267', () => {
  it('sync TS test 0 of file 1267', () => {
    const payload: TestPayload = { id: '1267_0', value: 31 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1267', async () => {
    const payload: TestPayload = { id: '1267_1', value: 445 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1267', () => {
    const payload: TestPayload = { id: '1267_2', value: 115 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1267', async () => {
    const payload: TestPayload = { id: '1267_3', value: 126 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1267', async () => {
    const payload: TestPayload = { id: '1267_4', value: 321 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1267', () => {
    const payload: TestPayload = { id: '1267_5', value: 246 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1267', () => {
    const payload: TestPayload = { id: '1267_6', value: 172 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1267', () => {
    const payload: TestPayload = { id: '1267_7', value: 298 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1267', async () => {
    const payload: TestPayload = { id: '1267_8', value: 28 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1267', () => {
    const payload: TestPayload = { id: '1267_9', value: 313 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1267', async () => {
    const payload: TestPayload = { id: '1267_10', value: 169 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1267', async () => {
    const payload: TestPayload = { id: '1267_11', value: 397 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1267', () => {
    const payload: TestPayload = { id: '1267_12', value: 397 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1267', () => {
    const payload: TestPayload = { id: '1267_13', value: 196 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
