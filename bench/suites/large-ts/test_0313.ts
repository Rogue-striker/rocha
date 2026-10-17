import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 313', () => {
  it('sync TS test 0 of file 313', () => {
    const payload: TestPayload = { id: '313_0', value: 470 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 313', () => {
    const payload: TestPayload = { id: '313_1', value: 160 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 313', () => {
    const payload: TestPayload = { id: '313_2', value: 191 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 313', () => {
    const payload: TestPayload = { id: '313_3', value: 56 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 313', async () => {
    const payload: TestPayload = { id: '313_4', value: 29 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 313', () => {
    const payload: TestPayload = { id: '313_5', value: 293 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 313', async () => {
    const payload: TestPayload = { id: '313_6', value: 16 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 313', async () => {
    const payload: TestPayload = { id: '313_7', value: 406 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 313', () => {
    const payload: TestPayload = { id: '313_8', value: 162 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 313', () => {
    const payload: TestPayload = { id: '313_9', value: 212 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 313', async () => {
    const payload: TestPayload = { id: '313_10', value: 320 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 313', () => {
    const payload: TestPayload = { id: '313_11', value: 378 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 313', () => {
    const payload: TestPayload = { id: '313_12', value: 156 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
