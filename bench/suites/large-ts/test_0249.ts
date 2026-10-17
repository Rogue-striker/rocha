import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 249', () => {
  it('sync TS test 0 of file 249', () => {
    const payload: TestPayload = { id: '249_0', value: 195 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 249', () => {
    const payload: TestPayload = { id: '249_1', value: 124 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 249', () => {
    const payload: TestPayload = { id: '249_2', value: 34 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 249', async () => {
    const payload: TestPayload = { id: '249_3', value: 285 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 249', async () => {
    const payload: TestPayload = { id: '249_4', value: 242 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 249', async () => {
    const payload: TestPayload = { id: '249_5', value: 187 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 249', () => {
    const payload: TestPayload = { id: '249_6', value: 315 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 249', async () => {
    const payload: TestPayload = { id: '249_7', value: 120 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 249', () => {
    const payload: TestPayload = { id: '249_8', value: 473 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 249', async () => {
    const payload: TestPayload = { id: '249_9', value: 392 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 249', async () => {
    const payload: TestPayload = { id: '249_10', value: 275 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 249', () => {
    const payload: TestPayload = { id: '249_11', value: 355 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 249', () => {
    const payload: TestPayload = { id: '249_12', value: 207 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
