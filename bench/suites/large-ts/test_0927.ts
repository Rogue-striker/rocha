import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 927', () => {
  it('async TS test 0 of file 927', async () => {
    const payload: TestPayload = { id: '927_0', value: 359 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 927', async () => {
    const payload: TestPayload = { id: '927_1', value: 67 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 927', () => {
    const payload: TestPayload = { id: '927_2', value: 397 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 927', async () => {
    const payload: TestPayload = { id: '927_3', value: 338 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 927', () => {
    const payload: TestPayload = { id: '927_4', value: 141 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 927', () => {
    const payload: TestPayload = { id: '927_5', value: 438 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 927', () => {
    const payload: TestPayload = { id: '927_6', value: 133 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 927', async () => {
    const payload: TestPayload = { id: '927_7', value: 101 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 927', () => {
    const payload: TestPayload = { id: '927_8', value: 98 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 927', async () => {
    const payload: TestPayload = { id: '927_9', value: 108 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 927', () => {
    const payload: TestPayload = { id: '927_10', value: 324 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 927', () => {
    const payload: TestPayload = { id: '927_11', value: 230 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 927', async () => {
    const payload: TestPayload = { id: '927_12', value: 122 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
