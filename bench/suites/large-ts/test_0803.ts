import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 803', () => {
  it('async TS test 0 of file 803', async () => {
    const payload: TestPayload = { id: '803_0', value: 16 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 803', async () => {
    const payload: TestPayload = { id: '803_1', value: 411 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 803', () => {
    const payload: TestPayload = { id: '803_2', value: 11 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 803', () => {
    const payload: TestPayload = { id: '803_3', value: 29 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 803', () => {
    const payload: TestPayload = { id: '803_4', value: 26 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 803', async () => {
    const payload: TestPayload = { id: '803_5', value: 350 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 803', async () => {
    const payload: TestPayload = { id: '803_6', value: 143 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 803', () => {
    const payload: TestPayload = { id: '803_7', value: 66 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 803', async () => {
    const payload: TestPayload = { id: '803_8', value: 137 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 803', async () => {
    const payload: TestPayload = { id: '803_9', value: 435 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 803', () => {
    const payload: TestPayload = { id: '803_10', value: 290 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 803', async () => {
    const payload: TestPayload = { id: '803_11', value: 379 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 803', async () => {
    const payload: TestPayload = { id: '803_12', value: 233 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
