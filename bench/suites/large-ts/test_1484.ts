import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1484', () => {
  it('sync TS test 0 of file 1484', () => {
    const payload: TestPayload = { id: '1484_0', value: 16 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1484', () => {
    const payload: TestPayload = { id: '1484_1', value: 33 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_2', value: 387 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1484', () => {
    const payload: TestPayload = { id: '1484_3', value: 487 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_4', value: 455 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1484', () => {
    const payload: TestPayload = { id: '1484_5', value: 306 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_6', value: 176 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_7', value: 208 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_8', value: 66 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_9', value: 379 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_10', value: 336 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1484', () => {
    const payload: TestPayload = { id: '1484_11', value: 432 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1484', async () => {
    const payload: TestPayload = { id: '1484_12', value: 283 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1484', () => {
    const payload: TestPayload = { id: '1484_13', value: 355 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
