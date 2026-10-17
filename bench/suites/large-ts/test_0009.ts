import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 9', () => {
  it('sync TS test 0 of file 9', () => {
    const payload: TestPayload = { id: '9_0', value: 333 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 9', async () => {
    const payload: TestPayload = { id: '9_1', value: 221 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 9', async () => {
    const payload: TestPayload = { id: '9_2', value: 229 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 9', async () => {
    const payload: TestPayload = { id: '9_3', value: 165 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 9', () => {
    const payload: TestPayload = { id: '9_4', value: 73 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 9', async () => {
    const payload: TestPayload = { id: '9_5', value: 133 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 9', async () => {
    const payload: TestPayload = { id: '9_6', value: 273 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 9', async () => {
    const payload: TestPayload = { id: '9_7', value: 218 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 9', () => {
    const payload: TestPayload = { id: '9_8', value: 1 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 9', () => {
    const payload: TestPayload = { id: '9_9', value: 471 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 9', () => {
    const payload: TestPayload = { id: '9_10', value: 435 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 9', async () => {
    const payload: TestPayload = { id: '9_11', value: 251 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 9', () => {
    const payload: TestPayload = { id: '9_12', value: 410 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
