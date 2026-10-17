import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1193', () => {
  it('async TS test 0 of file 1193', async () => {
    const payload: TestPayload = { id: '1193_0', value: 410 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1193', () => {
    const payload: TestPayload = { id: '1193_1', value: 175 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1193', () => {
    const payload: TestPayload = { id: '1193_2', value: 56 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1193', () => {
    const payload: TestPayload = { id: '1193_3', value: 474 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1193', async () => {
    const payload: TestPayload = { id: '1193_4', value: 394 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1193', () => {
    const payload: TestPayload = { id: '1193_5', value: 351 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1193', async () => {
    const payload: TestPayload = { id: '1193_6', value: 473 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1193', () => {
    const payload: TestPayload = { id: '1193_7', value: 84 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1193', () => {
    const payload: TestPayload = { id: '1193_8', value: 130 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1193', () => {
    const payload: TestPayload = { id: '1193_9', value: 89 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1193', () => {
    const payload: TestPayload = { id: '1193_10', value: 381 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1193', async () => {
    const payload: TestPayload = { id: '1193_11', value: 450 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1193', async () => {
    const payload: TestPayload = { id: '1193_12', value: 206 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1193', async () => {
    const payload: TestPayload = { id: '1193_13', value: 261 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
