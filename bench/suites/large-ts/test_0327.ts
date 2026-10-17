import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 327', () => {
  it('async TS test 0 of file 327', async () => {
    const payload: TestPayload = { id: '327_0', value: 26 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 327', () => {
    const payload: TestPayload = { id: '327_1', value: 498 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 327', async () => {
    const payload: TestPayload = { id: '327_2', value: 220 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 327', async () => {
    const payload: TestPayload = { id: '327_3', value: 133 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 327', () => {
    const payload: TestPayload = { id: '327_4', value: 460 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 327', () => {
    const payload: TestPayload = { id: '327_5', value: 391 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 327', async () => {
    const payload: TestPayload = { id: '327_6', value: 266 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 327', async () => {
    const payload: TestPayload = { id: '327_7', value: 32 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 327', () => {
    const payload: TestPayload = { id: '327_8', value: 469 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 327', () => {
    const payload: TestPayload = { id: '327_9', value: 428 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 327', async () => {
    const payload: TestPayload = { id: '327_10', value: 399 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 327', () => {
    const payload: TestPayload = { id: '327_11', value: 448 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 327', () => {
    const payload: TestPayload = { id: '327_12', value: 411 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
