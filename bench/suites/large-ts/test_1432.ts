import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1432', () => {
  it('async TS test 0 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_0', value: 408 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1432', () => {
    const payload: TestPayload = { id: '1432_1', value: 391 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_2', value: 128 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_3', value: 306 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_4', value: 105 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_5', value: 110 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_6', value: 90 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1432', () => {
    const payload: TestPayload = { id: '1432_7', value: 397 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_8', value: 185 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_9', value: 5 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1432', () => {
    const payload: TestPayload = { id: '1432_10', value: 12 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1432', () => {
    const payload: TestPayload = { id: '1432_11', value: 457 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1432', () => {
    const payload: TestPayload = { id: '1432_12', value: 149 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1432', async () => {
    const payload: TestPayload = { id: '1432_13', value: 176 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
