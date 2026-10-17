import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1449', () => {
  it('sync TS test 0 of file 1449', () => {
    const payload: TestPayload = { id: '1449_0', value: 422 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1449', () => {
    const payload: TestPayload = { id: '1449_1', value: 121 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1449', () => {
    const payload: TestPayload = { id: '1449_2', value: 352 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_3', value: 451 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_4', value: 249 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_5', value: 262 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_6', value: 31 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_7', value: 479 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_8', value: 331 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1449', () => {
    const payload: TestPayload = { id: '1449_9', value: 397 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_10', value: 403 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1449', () => {
    const payload: TestPayload = { id: '1449_11', value: 274 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1449', () => {
    const payload: TestPayload = { id: '1449_12', value: 238 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1449', async () => {
    const payload: TestPayload = { id: '1449_13', value: 97 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
