import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1032', () => {
  it('async TS test 0 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_0', value: 234 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1032', () => {
    const payload: TestPayload = { id: '1032_1', value: 486 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_2', value: 120 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_3', value: 156 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_4', value: 129 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1032', () => {
    const payload: TestPayload = { id: '1032_5', value: 337 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_6', value: 135 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1032', () => {
    const payload: TestPayload = { id: '1032_7', value: 258 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_8', value: 136 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_9', value: 488 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_10', value: 437 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1032', async () => {
    const payload: TestPayload = { id: '1032_11', value: 498 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1032', () => {
    const payload: TestPayload = { id: '1032_12', value: 285 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1032', () => {
    const payload: TestPayload = { id: '1032_13', value: 125 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
