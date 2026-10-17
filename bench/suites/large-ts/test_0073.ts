import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 73', () => {
  it('async TS test 0 of file 73', async () => {
    const payload: TestPayload = { id: '73_0', value: 275 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 73', () => {
    const payload: TestPayload = { id: '73_1', value: 133 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 73', async () => {
    const payload: TestPayload = { id: '73_2', value: 494 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 73', async () => {
    const payload: TestPayload = { id: '73_3', value: 241 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 73', async () => {
    const payload: TestPayload = { id: '73_4', value: 366 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 73', () => {
    const payload: TestPayload = { id: '73_5', value: 45 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 73', () => {
    const payload: TestPayload = { id: '73_6', value: 72 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 73', async () => {
    const payload: TestPayload = { id: '73_7', value: 262 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 73', async () => {
    const payload: TestPayload = { id: '73_8', value: 192 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 73', () => {
    const payload: TestPayload = { id: '73_9', value: 387 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 73', () => {
    const payload: TestPayload = { id: '73_10', value: 219 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 73', () => {
    const payload: TestPayload = { id: '73_11', value: 404 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 73', async () => {
    const payload: TestPayload = { id: '73_12', value: 10 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
