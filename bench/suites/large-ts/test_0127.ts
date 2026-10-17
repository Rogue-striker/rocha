import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 127', () => {
  it('sync TS test 0 of file 127', () => {
    const payload: TestPayload = { id: '127_0', value: 341 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 127', async () => {
    const payload: TestPayload = { id: '127_1', value: 232 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 127', () => {
    const payload: TestPayload = { id: '127_2', value: 421 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 127', () => {
    const payload: TestPayload = { id: '127_3', value: 35 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 127', () => {
    const payload: TestPayload = { id: '127_4', value: 170 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 127', async () => {
    const payload: TestPayload = { id: '127_5', value: 106 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 127', async () => {
    const payload: TestPayload = { id: '127_6', value: 496 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 127', async () => {
    const payload: TestPayload = { id: '127_7', value: 411 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 127', () => {
    const payload: TestPayload = { id: '127_8', value: 70 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 127', () => {
    const payload: TestPayload = { id: '127_9', value: 323 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 127', async () => {
    const payload: TestPayload = { id: '127_10', value: 376 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 127', () => {
    const payload: TestPayload = { id: '127_11', value: 375 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 127', async () => {
    const payload: TestPayload = { id: '127_12', value: 1 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
