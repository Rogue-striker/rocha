import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 786', () => {
  it('async TS test 0 of file 786', async () => {
    const payload: TestPayload = { id: '786_0', value: 222 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 786', () => {
    const payload: TestPayload = { id: '786_1', value: 393 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 786', async () => {
    const payload: TestPayload = { id: '786_2', value: 458 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 786', async () => {
    const payload: TestPayload = { id: '786_3', value: 7 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 786', async () => {
    const payload: TestPayload = { id: '786_4', value: 413 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 786', () => {
    const payload: TestPayload = { id: '786_5', value: 162 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 786', async () => {
    const payload: TestPayload = { id: '786_6', value: 161 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 786', () => {
    const payload: TestPayload = { id: '786_7', value: 407 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 786', () => {
    const payload: TestPayload = { id: '786_8', value: 276 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 786', () => {
    const payload: TestPayload = { id: '786_9', value: 266 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 786', () => {
    const payload: TestPayload = { id: '786_10', value: 92 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 786', async () => {
    const payload: TestPayload = { id: '786_11', value: 478 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 786', () => {
    const payload: TestPayload = { id: '786_12', value: 264 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
