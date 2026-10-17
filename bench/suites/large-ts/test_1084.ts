import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1084', () => {
  it('async TS test 0 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_0', value: 272 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_1', value: 218 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_2', value: 70 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1084', () => {
    const payload: TestPayload = { id: '1084_3', value: 155 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1084', () => {
    const payload: TestPayload = { id: '1084_4', value: 491 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1084', () => {
    const payload: TestPayload = { id: '1084_5', value: 96 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_6', value: 152 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1084', () => {
    const payload: TestPayload = { id: '1084_7', value: 358 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_8', value: 324 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1084', () => {
    const payload: TestPayload = { id: '1084_9', value: 371 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1084', () => {
    const payload: TestPayload = { id: '1084_10', value: 42 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1084', () => {
    const payload: TestPayload = { id: '1084_11', value: 276 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_12', value: 272 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1084', async () => {
    const payload: TestPayload = { id: '1084_13', value: 296 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
