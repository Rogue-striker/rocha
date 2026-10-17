import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1339', () => {
  it('sync TS test 0 of file 1339', () => {
    const payload: TestPayload = { id: '1339_0', value: 14 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1339', () => {
    const payload: TestPayload = { id: '1339_1', value: 267 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1339', async () => {
    const payload: TestPayload = { id: '1339_2', value: 480 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1339', () => {
    const payload: TestPayload = { id: '1339_3', value: 391 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1339', async () => {
    const payload: TestPayload = { id: '1339_4', value: 485 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1339', () => {
    const payload: TestPayload = { id: '1339_5', value: 341 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1339', () => {
    const payload: TestPayload = { id: '1339_6', value: 475 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1339', () => {
    const payload: TestPayload = { id: '1339_7', value: 344 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1339', async () => {
    const payload: TestPayload = { id: '1339_8', value: 376 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1339', async () => {
    const payload: TestPayload = { id: '1339_9', value: 359 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1339', () => {
    const payload: TestPayload = { id: '1339_10', value: 440 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1339', () => {
    const payload: TestPayload = { id: '1339_11', value: 332 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1339', () => {
    const payload: TestPayload = { id: '1339_12', value: 493 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1339', () => {
    const payload: TestPayload = { id: '1339_13', value: 366 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
