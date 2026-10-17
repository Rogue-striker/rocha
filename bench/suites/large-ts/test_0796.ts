import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 796', () => {
  it('sync TS test 0 of file 796', () => {
    const payload: TestPayload = { id: '796_0', value: 61 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 796', async () => {
    const payload: TestPayload = { id: '796_1', value: 116 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 796', () => {
    const payload: TestPayload = { id: '796_2', value: 311 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 796', async () => {
    const payload: TestPayload = { id: '796_3', value: 359 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 796', async () => {
    const payload: TestPayload = { id: '796_4', value: 221 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 796', async () => {
    const payload: TestPayload = { id: '796_5', value: 155 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 796', async () => {
    const payload: TestPayload = { id: '796_6', value: 200 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 796', () => {
    const payload: TestPayload = { id: '796_7', value: 108 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 796', () => {
    const payload: TestPayload = { id: '796_8', value: 180 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 796', () => {
    const payload: TestPayload = { id: '796_9', value: 69 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 796', () => {
    const payload: TestPayload = { id: '796_10', value: 37 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 796', () => {
    const payload: TestPayload = { id: '796_11', value: 230 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 796', async () => {
    const payload: TestPayload = { id: '796_12', value: 85 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
