import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1287', () => {
  it('async TS test 0 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_0', value: 269 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_1', value: 81 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_2', value: 346 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1287', () => {
    const payload: TestPayload = { id: '1287_3', value: 145 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_4', value: 392 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1287', () => {
    const payload: TestPayload = { id: '1287_5', value: 186 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1287', () => {
    const payload: TestPayload = { id: '1287_6', value: 66 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1287', () => {
    const payload: TestPayload = { id: '1287_7', value: 254 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_8', value: 325 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_9', value: 254 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1287', async () => {
    const payload: TestPayload = { id: '1287_10', value: 179 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1287', () => {
    const payload: TestPayload = { id: '1287_11', value: 24 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1287', () => {
    const payload: TestPayload = { id: '1287_12', value: 91 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1287', () => {
    const payload: TestPayload = { id: '1287_13', value: 364 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
