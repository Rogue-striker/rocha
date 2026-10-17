import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 573', () => {
  it('async TS test 0 of file 573', async () => {
    const payload: TestPayload = { id: '573_0', value: 272 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 573', async () => {
    const payload: TestPayload = { id: '573_1', value: 231 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 573', () => {
    const payload: TestPayload = { id: '573_2', value: 362 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 573', () => {
    const payload: TestPayload = { id: '573_3', value: 352 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 573', () => {
    const payload: TestPayload = { id: '573_4', value: 318 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 573', () => {
    const payload: TestPayload = { id: '573_5', value: 0 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 573', async () => {
    const payload: TestPayload = { id: '573_6', value: 294 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 573', async () => {
    const payload: TestPayload = { id: '573_7', value: 289 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 573', async () => {
    const payload: TestPayload = { id: '573_8', value: 411 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 573', () => {
    const payload: TestPayload = { id: '573_9', value: 297 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 573', () => {
    const payload: TestPayload = { id: '573_10', value: 41 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 573', async () => {
    const payload: TestPayload = { id: '573_11', value: 301 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 573', async () => {
    const payload: TestPayload = { id: '573_12', value: 76 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
