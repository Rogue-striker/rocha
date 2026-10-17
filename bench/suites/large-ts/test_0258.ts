import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 258', () => {
  it('sync TS test 0 of file 258', () => {
    const payload: TestPayload = { id: '258_0', value: 316 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 258', () => {
    const payload: TestPayload = { id: '258_1', value: 319 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 258', async () => {
    const payload: TestPayload = { id: '258_2', value: 134 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 258', async () => {
    const payload: TestPayload = { id: '258_3', value: 317 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 258', async () => {
    const payload: TestPayload = { id: '258_4', value: 354 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 258', () => {
    const payload: TestPayload = { id: '258_5', value: 156 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 258', () => {
    const payload: TestPayload = { id: '258_6', value: 377 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 258', async () => {
    const payload: TestPayload = { id: '258_7', value: 312 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 258', async () => {
    const payload: TestPayload = { id: '258_8', value: 37 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 258', () => {
    const payload: TestPayload = { id: '258_9', value: 375 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 258', () => {
    const payload: TestPayload = { id: '258_10', value: 34 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 258', () => {
    const payload: TestPayload = { id: '258_11', value: 192 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 258', async () => {
    const payload: TestPayload = { id: '258_12', value: 478 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
