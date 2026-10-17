import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1173', () => {
  it('sync TS test 0 of file 1173', () => {
    const payload: TestPayload = { id: '1173_0', value: 52 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_1', value: 437 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_2', value: 340 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_3', value: 152 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_4', value: 342 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_5', value: 241 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_6', value: 99 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1173', () => {
    const payload: TestPayload = { id: '1173_7', value: 281 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1173', () => {
    const payload: TestPayload = { id: '1173_8', value: 123 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_9', value: 291 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_10', value: 457 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1173', async () => {
    const payload: TestPayload = { id: '1173_11', value: 357 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1173', () => {
    const payload: TestPayload = { id: '1173_12', value: 30 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1173', () => {
    const payload: TestPayload = { id: '1173_13', value: 115 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
