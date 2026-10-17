import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 189', () => {
  it('sync TS test 0 of file 189', () => {
    const payload: TestPayload = { id: '189_0', value: 395 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 189', () => {
    const payload: TestPayload = { id: '189_1', value: 378 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 189', async () => {
    const payload: TestPayload = { id: '189_2', value: 66 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 189', async () => {
    const payload: TestPayload = { id: '189_3', value: 437 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 189', async () => {
    const payload: TestPayload = { id: '189_4', value: 334 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 189', () => {
    const payload: TestPayload = { id: '189_5', value: 39 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 189', () => {
    const payload: TestPayload = { id: '189_6', value: 59 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 189', () => {
    const payload: TestPayload = { id: '189_7', value: 116 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 189', async () => {
    const payload: TestPayload = { id: '189_8', value: 4 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 189', () => {
    const payload: TestPayload = { id: '189_9', value: 396 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 189', () => {
    const payload: TestPayload = { id: '189_10', value: 224 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 189', () => {
    const payload: TestPayload = { id: '189_11', value: 481 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 189', () => {
    const payload: TestPayload = { id: '189_12', value: 432 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
