import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 653', () => {
  it('sync TS test 0 of file 653', () => {
    const payload: TestPayload = { id: '653_0', value: 102 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 653', () => {
    const payload: TestPayload = { id: '653_1', value: 307 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 653', async () => {
    const payload: TestPayload = { id: '653_2', value: 201 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 653', async () => {
    const payload: TestPayload = { id: '653_3', value: 357 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 653', () => {
    const payload: TestPayload = { id: '653_4', value: 459 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 653', () => {
    const payload: TestPayload = { id: '653_5', value: 169 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 653', async () => {
    const payload: TestPayload = { id: '653_6', value: 439 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 653', () => {
    const payload: TestPayload = { id: '653_7', value: 13 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 653', () => {
    const payload: TestPayload = { id: '653_8', value: 108 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 653', () => {
    const payload: TestPayload = { id: '653_9', value: 25 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 653', async () => {
    const payload: TestPayload = { id: '653_10', value: 446 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 653', () => {
    const payload: TestPayload = { id: '653_11', value: 229 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 653', () => {
    const payload: TestPayload = { id: '653_12', value: 407 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
