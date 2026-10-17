import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1092', () => {
  it('sync TS test 0 of file 1092', () => {
    const payload: TestPayload = { id: '1092_0', value: 362 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1092', async () => {
    const payload: TestPayload = { id: '1092_1', value: 289 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1092', () => {
    const payload: TestPayload = { id: '1092_2', value: 421 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1092', () => {
    const payload: TestPayload = { id: '1092_3', value: 56 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1092', () => {
    const payload: TestPayload = { id: '1092_4', value: 164 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1092', async () => {
    const payload: TestPayload = { id: '1092_5', value: 237 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1092', () => {
    const payload: TestPayload = { id: '1092_6', value: 335 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1092', () => {
    const payload: TestPayload = { id: '1092_7', value: 231 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1092', () => {
    const payload: TestPayload = { id: '1092_8', value: 438 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1092', async () => {
    const payload: TestPayload = { id: '1092_9', value: 76 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1092', async () => {
    const payload: TestPayload = { id: '1092_10', value: 206 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1092', () => {
    const payload: TestPayload = { id: '1092_11', value: 418 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1092', async () => {
    const payload: TestPayload = { id: '1092_12', value: 307 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1092', () => {
    const payload: TestPayload = { id: '1092_13', value: 114 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
