import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1396', () => {
  it('sync TS test 0 of file 1396', () => {
    const payload: TestPayload = { id: '1396_0', value: 433 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_1', value: 326 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_2', value: 282 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1396', () => {
    const payload: TestPayload = { id: '1396_3', value: 377 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_4', value: 471 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_5', value: 123 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_6', value: 207 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_7', value: 150 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1396', () => {
    const payload: TestPayload = { id: '1396_8', value: 46 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1396', async () => {
    const payload: TestPayload = { id: '1396_9', value: 264 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1396', () => {
    const payload: TestPayload = { id: '1396_10', value: 144 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1396', () => {
    const payload: TestPayload = { id: '1396_11', value: 480 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1396', () => {
    const payload: TestPayload = { id: '1396_12', value: 498 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1396', () => {
    const payload: TestPayload = { id: '1396_13', value: 343 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
