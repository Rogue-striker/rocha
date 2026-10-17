import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 833', () => {
  it('sync TS test 0 of file 833', () => {
    const payload: TestPayload = { id: '833_0', value: 278 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 833', () => {
    const payload: TestPayload = { id: '833_1', value: 412 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 833', async () => {
    const payload: TestPayload = { id: '833_2', value: 273 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 833', () => {
    const payload: TestPayload = { id: '833_3', value: 258 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 833', () => {
    const payload: TestPayload = { id: '833_4', value: 281 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 833', async () => {
    const payload: TestPayload = { id: '833_5', value: 138 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 833', async () => {
    const payload: TestPayload = { id: '833_6', value: 451 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 833', async () => {
    const payload: TestPayload = { id: '833_7', value: 168 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 833', async () => {
    const payload: TestPayload = { id: '833_8', value: 28 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 833', () => {
    const payload: TestPayload = { id: '833_9', value: 200 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 833', () => {
    const payload: TestPayload = { id: '833_10', value: 244 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 833', async () => {
    const payload: TestPayload = { id: '833_11', value: 397 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 833', async () => {
    const payload: TestPayload = { id: '833_12', value: 374 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
