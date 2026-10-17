import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1466', () => {
  it('async TS test 0 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_0', value: 197 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_1', value: 115 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_2', value: 370 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1466', () => {
    const payload: TestPayload = { id: '1466_3', value: 471 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_4', value: 300 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1466', () => {
    const payload: TestPayload = { id: '1466_5', value: 12 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1466', () => {
    const payload: TestPayload = { id: '1466_6', value: 372 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_7', value: 137 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1466', () => {
    const payload: TestPayload = { id: '1466_8', value: 259 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_9', value: 323 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_10', value: 280 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_11', value: 236 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_12', value: 178 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1466', async () => {
    const payload: TestPayload = { id: '1466_13', value: 44 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
