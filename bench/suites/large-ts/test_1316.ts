import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1316', () => {
  it('sync TS test 0 of file 1316', () => {
    const payload: TestPayload = { id: '1316_0', value: 443 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1316', () => {
    const payload: TestPayload = { id: '1316_1', value: 99 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_2', value: 13 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1316', () => {
    const payload: TestPayload = { id: '1316_3', value: 487 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_4', value: 150 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1316', () => {
    const payload: TestPayload = { id: '1316_5', value: 264 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_6', value: 308 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1316', () => {
    const payload: TestPayload = { id: '1316_7', value: 49 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1316', () => {
    const payload: TestPayload = { id: '1316_8', value: 42 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_9', value: 236 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_10', value: 223 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_11', value: 125 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1316', async () => {
    const payload: TestPayload = { id: '1316_12', value: 0 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1316', () => {
    const payload: TestPayload = { id: '1316_13', value: 56 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
