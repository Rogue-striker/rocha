import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1089', () => {
  it('async TS test 0 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_0', value: 481 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1089', () => {
    const payload: TestPayload = { id: '1089_1', value: 126 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1089', () => {
    const payload: TestPayload = { id: '1089_2', value: 401 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_3', value: 19 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1089', () => {
    const payload: TestPayload = { id: '1089_4', value: 36 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_5', value: 179 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_6', value: 418 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_7', value: 73 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1089', () => {
    const payload: TestPayload = { id: '1089_8', value: 364 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1089', () => {
    const payload: TestPayload = { id: '1089_9', value: 148 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_10', value: 458 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_11', value: 142 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_12', value: 228 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1089', async () => {
    const payload: TestPayload = { id: '1089_13', value: 96 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
