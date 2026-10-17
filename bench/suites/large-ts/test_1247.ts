import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1247', () => {
  it('sync TS test 0 of file 1247', () => {
    const payload: TestPayload = { id: '1247_0', value: 199 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_1', value: 251 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_2', value: 273 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_3', value: 447 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_4', value: 468 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_5', value: 109 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1247', () => {
    const payload: TestPayload = { id: '1247_6', value: 147 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_7', value: 165 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1247', () => {
    const payload: TestPayload = { id: '1247_8', value: 354 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_9', value: 74 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_10', value: 461 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_11', value: 65 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_12', value: 390 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1247', async () => {
    const payload: TestPayload = { id: '1247_13', value: 117 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
