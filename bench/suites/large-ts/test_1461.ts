import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1461', () => {
  it('async TS test 0 of file 1461', async () => {
    const payload: TestPayload = { id: '1461_0', value: 180 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1461', () => {
    const payload: TestPayload = { id: '1461_1', value: 245 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1461', () => {
    const payload: TestPayload = { id: '1461_2', value: 412 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1461', () => {
    const payload: TestPayload = { id: '1461_3', value: 194 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1461', async () => {
    const payload: TestPayload = { id: '1461_4', value: 438 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1461', () => {
    const payload: TestPayload = { id: '1461_5', value: 279 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1461', () => {
    const payload: TestPayload = { id: '1461_6', value: 317 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1461', async () => {
    const payload: TestPayload = { id: '1461_7', value: 112 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1461', () => {
    const payload: TestPayload = { id: '1461_8', value: 336 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1461', () => {
    const payload: TestPayload = { id: '1461_9', value: 243 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1461', async () => {
    const payload: TestPayload = { id: '1461_10', value: 391 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1461', async () => {
    const payload: TestPayload = { id: '1461_11', value: 261 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1461', () => {
    const payload: TestPayload = { id: '1461_12', value: 339 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1461', () => {
    const payload: TestPayload = { id: '1461_13', value: 40 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
