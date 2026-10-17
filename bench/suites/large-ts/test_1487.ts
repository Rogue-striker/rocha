import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1487', () => {
  it('sync TS test 0 of file 1487', () => {
    const payload: TestPayload = { id: '1487_0', value: 193 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_1', value: 175 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1487', () => {
    const payload: TestPayload = { id: '1487_2', value: 437 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1487', () => {
    const payload: TestPayload = { id: '1487_3', value: 393 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_4', value: 294 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1487', () => {
    const payload: TestPayload = { id: '1487_5', value: 61 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_6', value: 4 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_7', value: 154 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1487', () => {
    const payload: TestPayload = { id: '1487_8', value: 496 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_9', value: 416 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_10', value: 246 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1487', () => {
    const payload: TestPayload = { id: '1487_11', value: 457 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_12', value: 404 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1487', async () => {
    const payload: TestPayload = { id: '1487_13', value: 386 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
