import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1129', () => {
  it('async TS test 0 of file 1129', async () => {
    const payload: TestPayload = { id: '1129_0', value: 309 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1129', async () => {
    const payload: TestPayload = { id: '1129_1', value: 170 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1129', () => {
    const payload: TestPayload = { id: '1129_2', value: 238 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1129', async () => {
    const payload: TestPayload = { id: '1129_3', value: 201 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1129', () => {
    const payload: TestPayload = { id: '1129_4', value: 29 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1129', () => {
    const payload: TestPayload = { id: '1129_5', value: 183 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1129', () => {
    const payload: TestPayload = { id: '1129_6', value: 175 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1129', async () => {
    const payload: TestPayload = { id: '1129_7', value: 5 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1129', () => {
    const payload: TestPayload = { id: '1129_8', value: 32 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1129', () => {
    const payload: TestPayload = { id: '1129_9', value: 433 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1129', () => {
    const payload: TestPayload = { id: '1129_10', value: 442 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1129', () => {
    const payload: TestPayload = { id: '1129_11', value: 290 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1129', async () => {
    const payload: TestPayload = { id: '1129_12', value: 179 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1129', async () => {
    const payload: TestPayload = { id: '1129_13', value: 351 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
