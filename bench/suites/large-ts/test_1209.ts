import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1209', () => {
  it('async TS test 0 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_0', value: 60 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1209', () => {
    const payload: TestPayload = { id: '1209_1', value: 119 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_2', value: 291 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1209', () => {
    const payload: TestPayload = { id: '1209_3', value: 133 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_4', value: 362 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1209', () => {
    const payload: TestPayload = { id: '1209_5', value: 338 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1209', () => {
    const payload: TestPayload = { id: '1209_6', value: 318 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_7', value: 343 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_8', value: 327 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_9', value: 454 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1209', () => {
    const payload: TestPayload = { id: '1209_10', value: 332 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_11', value: 66 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1209', () => {
    const payload: TestPayload = { id: '1209_12', value: 151 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1209', async () => {
    const payload: TestPayload = { id: '1209_13', value: 474 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
