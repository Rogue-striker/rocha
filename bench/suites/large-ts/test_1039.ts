import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1039', () => {
  it('sync TS test 0 of file 1039', () => {
    const payload: TestPayload = { id: '1039_0', value: 348 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1039', async () => {
    const payload: TestPayload = { id: '1039_1', value: 220 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1039', () => {
    const payload: TestPayload = { id: '1039_2', value: 96 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1039', async () => {
    const payload: TestPayload = { id: '1039_3', value: 449 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1039', async () => {
    const payload: TestPayload = { id: '1039_4', value: 32 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1039', () => {
    const payload: TestPayload = { id: '1039_5', value: 143 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1039', () => {
    const payload: TestPayload = { id: '1039_6', value: 326 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1039', async () => {
    const payload: TestPayload = { id: '1039_7', value: 19 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1039', async () => {
    const payload: TestPayload = { id: '1039_8', value: 402 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1039', () => {
    const payload: TestPayload = { id: '1039_9', value: 207 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1039', async () => {
    const payload: TestPayload = { id: '1039_10', value: 412 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1039', () => {
    const payload: TestPayload = { id: '1039_11', value: 326 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1039', () => {
    const payload: TestPayload = { id: '1039_12', value: 206 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1039', () => {
    const payload: TestPayload = { id: '1039_13', value: 54 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
