import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 293', () => {
  it('async TS test 0 of file 293', async () => {
    const payload: TestPayload = { id: '293_0', value: 488 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 293', async () => {
    const payload: TestPayload = { id: '293_1', value: 274 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 293', async () => {
    const payload: TestPayload = { id: '293_2', value: 20 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 293', () => {
    const payload: TestPayload = { id: '293_3', value: 353 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 293', () => {
    const payload: TestPayload = { id: '293_4', value: 459 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 293', async () => {
    const payload: TestPayload = { id: '293_5', value: 104 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 293', async () => {
    const payload: TestPayload = { id: '293_6', value: 417 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 293', async () => {
    const payload: TestPayload = { id: '293_7', value: 294 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 293', async () => {
    const payload: TestPayload = { id: '293_8', value: 54 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 293', () => {
    const payload: TestPayload = { id: '293_9', value: 272 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 293', async () => {
    const payload: TestPayload = { id: '293_10', value: 98 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 293', async () => {
    const payload: TestPayload = { id: '293_11', value: 193 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 293', async () => {
    const payload: TestPayload = { id: '293_12', value: 469 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
