import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1258', () => {
  it('async TS test 0 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_0', value: 369 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_1', value: 213 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1258', () => {
    const payload: TestPayload = { id: '1258_2', value: 418 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_3', value: 404 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1258', () => {
    const payload: TestPayload = { id: '1258_4', value: 22 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_5', value: 233 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1258', () => {
    const payload: TestPayload = { id: '1258_6', value: 264 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1258', () => {
    const payload: TestPayload = { id: '1258_7', value: 69 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1258', () => {
    const payload: TestPayload = { id: '1258_8', value: 298 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1258', () => {
    const payload: TestPayload = { id: '1258_9', value: 150 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1258', () => {
    const payload: TestPayload = { id: '1258_10', value: 421 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_11', value: 456 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_12', value: 253 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1258', async () => {
    const payload: TestPayload = { id: '1258_13', value: 130 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
