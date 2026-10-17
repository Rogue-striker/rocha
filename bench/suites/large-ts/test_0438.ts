import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 438', () => {
  it('sync TS test 0 of file 438', () => {
    const payload: TestPayload = { id: '438_0', value: 227 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 438', async () => {
    const payload: TestPayload = { id: '438_1', value: 237 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 438', () => {
    const payload: TestPayload = { id: '438_2', value: 427 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 438', () => {
    const payload: TestPayload = { id: '438_3', value: 414 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 438', () => {
    const payload: TestPayload = { id: '438_4', value: 159 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 438', async () => {
    const payload: TestPayload = { id: '438_5', value: 370 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 438', async () => {
    const payload: TestPayload = { id: '438_6', value: 421 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 438', async () => {
    const payload: TestPayload = { id: '438_7', value: 325 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 438', () => {
    const payload: TestPayload = { id: '438_8', value: 237 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 438', () => {
    const payload: TestPayload = { id: '438_9', value: 263 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 438', () => {
    const payload: TestPayload = { id: '438_10', value: 359 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 438', () => {
    const payload: TestPayload = { id: '438_11', value: 425 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 438', () => {
    const payload: TestPayload = { id: '438_12', value: 378 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
