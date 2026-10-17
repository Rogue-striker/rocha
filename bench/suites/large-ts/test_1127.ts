import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1127', () => {
  it('sync TS test 0 of file 1127', () => {
    const payload: TestPayload = { id: '1127_0', value: 327 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1127', () => {
    const payload: TestPayload = { id: '1127_1', value: 242 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_2', value: 471 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_3', value: 40 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1127', () => {
    const payload: TestPayload = { id: '1127_4', value: 387 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_5', value: 180 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_6', value: 395 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_7', value: 14 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1127', () => {
    const payload: TestPayload = { id: '1127_8', value: 471 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_9', value: 464 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1127', () => {
    const payload: TestPayload = { id: '1127_10', value: 325 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_11', value: 148 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1127', async () => {
    const payload: TestPayload = { id: '1127_12', value: 340 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1127', () => {
    const payload: TestPayload = { id: '1127_13', value: 289 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
