import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1184', () => {
  it('sync TS test 0 of file 1184', () => {
    const payload: TestPayload = { id: '1184_0', value: 417 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_1', value: 224 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1184', () => {
    const payload: TestPayload = { id: '1184_2', value: 399 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_3', value: 6 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_4', value: 465 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1184', () => {
    const payload: TestPayload = { id: '1184_5', value: 491 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1184', () => {
    const payload: TestPayload = { id: '1184_6', value: 273 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1184', () => {
    const payload: TestPayload = { id: '1184_7', value: 450 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_8', value: 97 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_9', value: 191 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_10', value: 36 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_11', value: 12 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1184', async () => {
    const payload: TestPayload = { id: '1184_12', value: 41 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1184', () => {
    const payload: TestPayload = { id: '1184_13', value: 210 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
