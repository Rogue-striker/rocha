import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1163', () => {
  it('sync TS test 0 of file 1163', () => {
    const payload: TestPayload = { id: '1163_0', value: 338 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1163', async () => {
    const payload: TestPayload = { id: '1163_1', value: 17 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1163', () => {
    const payload: TestPayload = { id: '1163_2', value: 325 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1163', () => {
    const payload: TestPayload = { id: '1163_3', value: 94 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1163', async () => {
    const payload: TestPayload = { id: '1163_4', value: 491 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1163', async () => {
    const payload: TestPayload = { id: '1163_5', value: 434 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1163', () => {
    const payload: TestPayload = { id: '1163_6', value: 163 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1163', () => {
    const payload: TestPayload = { id: '1163_7', value: 222 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1163', async () => {
    const payload: TestPayload = { id: '1163_8', value: 100 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1163', () => {
    const payload: TestPayload = { id: '1163_9', value: 75 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1163', async () => {
    const payload: TestPayload = { id: '1163_10', value: 31 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1163', async () => {
    const payload: TestPayload = { id: '1163_11', value: 111 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1163', () => {
    const payload: TestPayload = { id: '1163_12', value: 24 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1163', () => {
    const payload: TestPayload = { id: '1163_13', value: 108 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
