import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1044', () => {
  it('sync TS test 0 of file 1044', () => {
    const payload: TestPayload = { id: '1044_0', value: 199 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1044', () => {
    const payload: TestPayload = { id: '1044_1', value: 196 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1044', () => {
    const payload: TestPayload = { id: '1044_2', value: 209 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_3', value: 44 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_4', value: 439 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_5', value: 122 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_6', value: 146 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1044', () => {
    const payload: TestPayload = { id: '1044_7', value: 373 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_8', value: 437 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1044', () => {
    const payload: TestPayload = { id: '1044_9', value: 226 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1044', () => {
    const payload: TestPayload = { id: '1044_10', value: 5 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_11', value: 325 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1044', () => {
    const payload: TestPayload = { id: '1044_12', value: 87 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1044', async () => {
    const payload: TestPayload = { id: '1044_13', value: 234 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
