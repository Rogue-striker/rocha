import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1116', () => {
  it('sync TS test 0 of file 1116', () => {
    const payload: TestPayload = { id: '1116_0', value: 36 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_1', value: 115 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1116', () => {
    const payload: TestPayload = { id: '1116_2', value: 358 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_3', value: 326 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1116', () => {
    const payload: TestPayload = { id: '1116_4', value: 42 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1116', () => {
    const payload: TestPayload = { id: '1116_5', value: 241 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1116', () => {
    const payload: TestPayload = { id: '1116_6', value: 160 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_7', value: 333 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1116', () => {
    const payload: TestPayload = { id: '1116_8', value: 296 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1116', () => {
    const payload: TestPayload = { id: '1116_9', value: 117 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_10', value: 301 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_11', value: 474 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_12', value: 6 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1116', async () => {
    const payload: TestPayload = { id: '1116_13', value: 477 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
