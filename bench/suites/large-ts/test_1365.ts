import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1365', () => {
  it('sync TS test 0 of file 1365', () => {
    const payload: TestPayload = { id: '1365_0', value: 40 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1365', () => {
    const payload: TestPayload = { id: '1365_1', value: 107 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1365', () => {
    const payload: TestPayload = { id: '1365_2', value: 17 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1365', async () => {
    const payload: TestPayload = { id: '1365_3', value: 123 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1365', () => {
    const payload: TestPayload = { id: '1365_4', value: 216 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1365', async () => {
    const payload: TestPayload = { id: '1365_5', value: 327 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1365', async () => {
    const payload: TestPayload = { id: '1365_6', value: 86 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1365', () => {
    const payload: TestPayload = { id: '1365_7', value: 371 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1365', () => {
    const payload: TestPayload = { id: '1365_8', value: 388 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1365', async () => {
    const payload: TestPayload = { id: '1365_9', value: 235 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1365', () => {
    const payload: TestPayload = { id: '1365_10', value: 354 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1365', () => {
    const payload: TestPayload = { id: '1365_11', value: 262 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1365', () => {
    const payload: TestPayload = { id: '1365_12', value: 92 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1365', () => {
    const payload: TestPayload = { id: '1365_13', value: 162 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
