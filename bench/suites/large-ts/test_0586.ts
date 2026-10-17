import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 586', () => {
  it('async TS test 0 of file 586', async () => {
    const payload: TestPayload = { id: '586_0', value: 48 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 586', () => {
    const payload: TestPayload = { id: '586_1', value: 113 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 586', async () => {
    const payload: TestPayload = { id: '586_2', value: 202 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 586', async () => {
    const payload: TestPayload = { id: '586_3', value: 382 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 586', async () => {
    const payload: TestPayload = { id: '586_4', value: 172 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 586', async () => {
    const payload: TestPayload = { id: '586_5', value: 458 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 586', () => {
    const payload: TestPayload = { id: '586_6', value: 202 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 586', async () => {
    const payload: TestPayload = { id: '586_7', value: 285 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 586', () => {
    const payload: TestPayload = { id: '586_8', value: 29 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 586', () => {
    const payload: TestPayload = { id: '586_9', value: 464 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 586', async () => {
    const payload: TestPayload = { id: '586_10', value: 172 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 586', () => {
    const payload: TestPayload = { id: '586_11', value: 468 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 586', async () => {
    const payload: TestPayload = { id: '586_12', value: 331 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
