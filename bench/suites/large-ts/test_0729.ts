import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 729', () => {
  it('async TS test 0 of file 729', async () => {
    const payload: TestPayload = { id: '729_0', value: 350 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 729', async () => {
    const payload: TestPayload = { id: '729_1', value: 300 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 729', () => {
    const payload: TestPayload = { id: '729_2', value: 156 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 729', () => {
    const payload: TestPayload = { id: '729_3', value: 407 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 729', () => {
    const payload: TestPayload = { id: '729_4', value: 310 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 729', () => {
    const payload: TestPayload = { id: '729_5', value: 254 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 729', async () => {
    const payload: TestPayload = { id: '729_6', value: 93 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 729', async () => {
    const payload: TestPayload = { id: '729_7', value: 173 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 729', async () => {
    const payload: TestPayload = { id: '729_8', value: 266 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 729', async () => {
    const payload: TestPayload = { id: '729_9', value: 66 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 729', async () => {
    const payload: TestPayload = { id: '729_10', value: 320 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 729', () => {
    const payload: TestPayload = { id: '729_11', value: 347 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 729', async () => {
    const payload: TestPayload = { id: '729_12', value: 133 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
