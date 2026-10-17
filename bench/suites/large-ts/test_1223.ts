import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1223', () => {
  it('async TS test 0 of file 1223', async () => {
    const payload: TestPayload = { id: '1223_0', value: 309 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1223', () => {
    const payload: TestPayload = { id: '1223_1', value: 239 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1223', async () => {
    const payload: TestPayload = { id: '1223_2', value: 375 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1223', () => {
    const payload: TestPayload = { id: '1223_3', value: 305 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1223', () => {
    const payload: TestPayload = { id: '1223_4', value: 171 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1223', () => {
    const payload: TestPayload = { id: '1223_5', value: 124 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1223', async () => {
    const payload: TestPayload = { id: '1223_6', value: 427 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1223', async () => {
    const payload: TestPayload = { id: '1223_7', value: 192 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1223', () => {
    const payload: TestPayload = { id: '1223_8', value: 110 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1223', async () => {
    const payload: TestPayload = { id: '1223_9', value: 245 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1223', () => {
    const payload: TestPayload = { id: '1223_10', value: 128 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1223', () => {
    const payload: TestPayload = { id: '1223_11', value: 372 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1223', () => {
    const payload: TestPayload = { id: '1223_12', value: 299 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1223', async () => {
    const payload: TestPayload = { id: '1223_13', value: 395 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
