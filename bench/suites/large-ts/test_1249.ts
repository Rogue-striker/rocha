import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1249', () => {
  it('async TS test 0 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_0', value: 417 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_1', value: 388 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_2', value: 13 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_3', value: 481 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1249', () => {
    const payload: TestPayload = { id: '1249_4', value: 459 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1249', () => {
    const payload: TestPayload = { id: '1249_5', value: 184 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_6', value: 355 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_7', value: 433 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_8', value: 34 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_9', value: 125 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1249', () => {
    const payload: TestPayload = { id: '1249_10', value: 154 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_11', value: 54 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1249', async () => {
    const payload: TestPayload = { id: '1249_12', value: 268 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1249', () => {
    const payload: TestPayload = { id: '1249_13', value: 153 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
