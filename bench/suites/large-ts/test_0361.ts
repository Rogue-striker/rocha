import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 361', () => {
  it('sync TS test 0 of file 361', () => {
    const payload: TestPayload = { id: '361_0', value: 246 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 361', async () => {
    const payload: TestPayload = { id: '361_1', value: 167 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 361', async () => {
    const payload: TestPayload = { id: '361_2', value: 336 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 361', () => {
    const payload: TestPayload = { id: '361_3', value: 241 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 361', () => {
    const payload: TestPayload = { id: '361_4', value: 180 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 361', () => {
    const payload: TestPayload = { id: '361_5', value: 285 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 361', () => {
    const payload: TestPayload = { id: '361_6', value: 194 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 361', () => {
    const payload: TestPayload = { id: '361_7', value: 67 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 361', () => {
    const payload: TestPayload = { id: '361_8', value: 311 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 361', async () => {
    const payload: TestPayload = { id: '361_9', value: 8 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 361', () => {
    const payload: TestPayload = { id: '361_10', value: 409 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 361', async () => {
    const payload: TestPayload = { id: '361_11', value: 168 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 361', async () => {
    const payload: TestPayload = { id: '361_12', value: 283 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
