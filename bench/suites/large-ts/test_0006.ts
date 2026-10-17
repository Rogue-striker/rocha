import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 6', () => {
  it('sync TS test 0 of file 6', () => {
    const payload: TestPayload = { id: '6_0', value: 162 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 6', () => {
    const payload: TestPayload = { id: '6_1', value: 160 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 6', async () => {
    const payload: TestPayload = { id: '6_2', value: 110 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 6', () => {
    const payload: TestPayload = { id: '6_3', value: 347 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 6', () => {
    const payload: TestPayload = { id: '6_4', value: 62 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 6', () => {
    const payload: TestPayload = { id: '6_5', value: 21 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 6', async () => {
    const payload: TestPayload = { id: '6_6', value: 103 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 6', async () => {
    const payload: TestPayload = { id: '6_7', value: 189 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 6', async () => {
    const payload: TestPayload = { id: '6_8', value: 456 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 6', async () => {
    const payload: TestPayload = { id: '6_9', value: 219 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 6', () => {
    const payload: TestPayload = { id: '6_10', value: 433 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 6', async () => {
    const payload: TestPayload = { id: '6_11', value: 420 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 6', async () => {
    const payload: TestPayload = { id: '6_12', value: 225 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
