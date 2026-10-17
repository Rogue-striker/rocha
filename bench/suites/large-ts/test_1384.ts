import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1384', () => {
  it('async TS test 0 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_0', value: 491 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1384', () => {
    const payload: TestPayload = { id: '1384_1', value: 439 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_2', value: 221 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_3', value: 499 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_4', value: 162 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_5', value: 373 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1384', () => {
    const payload: TestPayload = { id: '1384_6', value: 84 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_7', value: 204 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1384', () => {
    const payload: TestPayload = { id: '1384_8', value: 471 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_9', value: 453 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_10', value: 152 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1384', () => {
    const payload: TestPayload = { id: '1384_11', value: 294 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1384', () => {
    const payload: TestPayload = { id: '1384_12', value: 455 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1384', async () => {
    const payload: TestPayload = { id: '1384_13', value: 127 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
