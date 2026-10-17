import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1071', () => {
  it('async TS test 0 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_0', value: 370 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_1', value: 337 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_2', value: 98 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1071', () => {
    const payload: TestPayload = { id: '1071_3', value: 355 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1071', () => {
    const payload: TestPayload = { id: '1071_4', value: 318 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1071', () => {
    const payload: TestPayload = { id: '1071_5', value: 48 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_6', value: 428 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1071', () => {
    const payload: TestPayload = { id: '1071_7', value: 289 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1071', () => {
    const payload: TestPayload = { id: '1071_8', value: 289 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_9', value: 265 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1071', () => {
    const payload: TestPayload = { id: '1071_10', value: 137 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_11', value: 327 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_12', value: 480 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1071', async () => {
    const payload: TestPayload = { id: '1071_13', value: 459 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
