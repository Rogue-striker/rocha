import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1486', () => {
  it('async TS test 0 of file 1486', async () => {
    const payload: TestPayload = { id: '1486_0', value: 88 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1486', async () => {
    const payload: TestPayload = { id: '1486_1', value: 256 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1486', () => {
    const payload: TestPayload = { id: '1486_2', value: 68 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1486', async () => {
    const payload: TestPayload = { id: '1486_3', value: 413 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1486', () => {
    const payload: TestPayload = { id: '1486_4', value: 449 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1486', () => {
    const payload: TestPayload = { id: '1486_5', value: 115 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1486', () => {
    const payload: TestPayload = { id: '1486_6', value: 458 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1486', () => {
    const payload: TestPayload = { id: '1486_7', value: 205 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1486', () => {
    const payload: TestPayload = { id: '1486_8', value: 277 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1486', () => {
    const payload: TestPayload = { id: '1486_9', value: 168 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1486', () => {
    const payload: TestPayload = { id: '1486_10', value: 99 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1486', async () => {
    const payload: TestPayload = { id: '1486_11', value: 76 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1486', () => {
    const payload: TestPayload = { id: '1486_12', value: 445 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1486', () => {
    const payload: TestPayload = { id: '1486_13', value: 278 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
