import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1124', () => {
  it('async TS test 0 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_0', value: 315 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_1', value: 302 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_2', value: 309 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_3', value: 8 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1124', () => {
    const payload: TestPayload = { id: '1124_4', value: 153 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_5', value: 367 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1124', () => {
    const payload: TestPayload = { id: '1124_6', value: 419 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_7', value: 149 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_8', value: 30 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_9', value: 380 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_10', value: 200 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1124', () => {
    const payload: TestPayload = { id: '1124_11', value: 261 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1124', async () => {
    const payload: TestPayload = { id: '1124_12', value: 140 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1124', () => {
    const payload: TestPayload = { id: '1124_13', value: 379 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
