import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1186', () => {
  it('sync TS test 0 of file 1186', () => {
    const payload: TestPayload = { id: '1186_0', value: 200 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1186', async () => {
    const payload: TestPayload = { id: '1186_1', value: 410 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1186', () => {
    const payload: TestPayload = { id: '1186_2', value: 272 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1186', async () => {
    const payload: TestPayload = { id: '1186_3', value: 430 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1186', () => {
    const payload: TestPayload = { id: '1186_4', value: 305 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1186', () => {
    const payload: TestPayload = { id: '1186_5', value: 449 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1186', async () => {
    const payload: TestPayload = { id: '1186_6', value: 177 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1186', async () => {
    const payload: TestPayload = { id: '1186_7', value: 53 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1186', () => {
    const payload: TestPayload = { id: '1186_8', value: 283 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1186', () => {
    const payload: TestPayload = { id: '1186_9', value: 453 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1186', () => {
    const payload: TestPayload = { id: '1186_10', value: 93 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1186', () => {
    const payload: TestPayload = { id: '1186_11', value: 135 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1186', () => {
    const payload: TestPayload = { id: '1186_12', value: 462 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1186', async () => {
    const payload: TestPayload = { id: '1186_13', value: 241 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
