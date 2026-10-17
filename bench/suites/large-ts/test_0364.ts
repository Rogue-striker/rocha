import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 364', () => {
  it('async TS test 0 of file 364', async () => {
    const payload: TestPayload = { id: '364_0', value: 375 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 364', () => {
    const payload: TestPayload = { id: '364_1', value: 423 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 364', () => {
    const payload: TestPayload = { id: '364_2', value: 192 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 364', async () => {
    const payload: TestPayload = { id: '364_3', value: 214 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 364', () => {
    const payload: TestPayload = { id: '364_4', value: 40 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 364', () => {
    const payload: TestPayload = { id: '364_5', value: 406 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 364', async () => {
    const payload: TestPayload = { id: '364_6', value: 98 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 364', () => {
    const payload: TestPayload = { id: '364_7', value: 271 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 364', () => {
    const payload: TestPayload = { id: '364_8', value: 148 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 364', async () => {
    const payload: TestPayload = { id: '364_9', value: 281 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 364', async () => {
    const payload: TestPayload = { id: '364_10', value: 363 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 364', () => {
    const payload: TestPayload = { id: '364_11', value: 42 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 364', async () => {
    const payload: TestPayload = { id: '364_12', value: 425 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
