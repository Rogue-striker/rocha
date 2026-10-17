import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 993', () => {
  it('async TS test 0 of file 993', async () => {
    const payload: TestPayload = { id: '993_0', value: 181 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 993', () => {
    const payload: TestPayload = { id: '993_1', value: 63 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 993', () => {
    const payload: TestPayload = { id: '993_2', value: 460 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 993', async () => {
    const payload: TestPayload = { id: '993_3', value: 123 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 993', () => {
    const payload: TestPayload = { id: '993_4', value: 496 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 993', async () => {
    const payload: TestPayload = { id: '993_5', value: 173 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 993', () => {
    const payload: TestPayload = { id: '993_6', value: 181 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 993', async () => {
    const payload: TestPayload = { id: '993_7', value: 379 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 993', async () => {
    const payload: TestPayload = { id: '993_8', value: 28 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 993', async () => {
    const payload: TestPayload = { id: '993_9', value: 261 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 993', async () => {
    const payload: TestPayload = { id: '993_10', value: 180 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 993', async () => {
    const payload: TestPayload = { id: '993_11', value: 104 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 993', () => {
    const payload: TestPayload = { id: '993_12', value: 459 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
