import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1063', () => {
  it('sync TS test 0 of file 1063', () => {
    const payload: TestPayload = { id: '1063_0', value: 126 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1063', () => {
    const payload: TestPayload = { id: '1063_1', value: 473 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_2', value: 44 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1063', () => {
    const payload: TestPayload = { id: '1063_3', value: 323 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1063', () => {
    const payload: TestPayload = { id: '1063_4', value: 226 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_5', value: 30 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1063', () => {
    const payload: TestPayload = { id: '1063_6', value: 361 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1063', () => {
    const payload: TestPayload = { id: '1063_7', value: 271 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_8', value: 205 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_9', value: 43 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_10', value: 81 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_11', value: 399 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1063', () => {
    const payload: TestPayload = { id: '1063_12', value: 413 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1063', async () => {
    const payload: TestPayload = { id: '1063_13', value: 447 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
