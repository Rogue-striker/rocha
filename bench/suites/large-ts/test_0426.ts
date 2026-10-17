import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 426', () => {
  it('async TS test 0 of file 426', async () => {
    const payload: TestPayload = { id: '426_0', value: 266 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 426', async () => {
    const payload: TestPayload = { id: '426_1', value: 100 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 426', async () => {
    const payload: TestPayload = { id: '426_2', value: 294 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 426', async () => {
    const payload: TestPayload = { id: '426_3', value: 317 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 426', () => {
    const payload: TestPayload = { id: '426_4', value: 441 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 426', async () => {
    const payload: TestPayload = { id: '426_5', value: 293 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 426', () => {
    const payload: TestPayload = { id: '426_6', value: 207 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 426', async () => {
    const payload: TestPayload = { id: '426_7', value: 28 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 426', () => {
    const payload: TestPayload = { id: '426_8', value: 209 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 426', () => {
    const payload: TestPayload = { id: '426_9', value: 26 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 426', () => {
    const payload: TestPayload = { id: '426_10', value: 397 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 426', () => {
    const payload: TestPayload = { id: '426_11', value: 212 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 426', async () => {
    const payload: TestPayload = { id: '426_12', value: 53 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
