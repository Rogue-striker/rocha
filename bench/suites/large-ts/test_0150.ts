import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 150', () => {
  it('sync TS test 0 of file 150', () => {
    const payload: TestPayload = { id: '150_0', value: 428 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 150', async () => {
    const payload: TestPayload = { id: '150_1', value: 291 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 150', async () => {
    const payload: TestPayload = { id: '150_2', value: 215 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 150', () => {
    const payload: TestPayload = { id: '150_3', value: 111 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 150', () => {
    const payload: TestPayload = { id: '150_4', value: 77 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 150', async () => {
    const payload: TestPayload = { id: '150_5', value: 397 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 150', async () => {
    const payload: TestPayload = { id: '150_6', value: 271 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 150', () => {
    const payload: TestPayload = { id: '150_7', value: 125 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 150', () => {
    const payload: TestPayload = { id: '150_8', value: 52 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 150', () => {
    const payload: TestPayload = { id: '150_9', value: 405 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 150', async () => {
    const payload: TestPayload = { id: '150_10', value: 12 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 150', () => {
    const payload: TestPayload = { id: '150_11', value: 371 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 150', () => {
    const payload: TestPayload = { id: '150_12', value: 208 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
