import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1299', () => {
  it('async TS test 0 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_0', value: 141 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_1', value: 443 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_2', value: 445 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_3', value: 498 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_4', value: 74 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1299', () => {
    const payload: TestPayload = { id: '1299_5', value: 215 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_6', value: 78 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1299', () => {
    const payload: TestPayload = { id: '1299_7', value: 174 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_8', value: 369 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_9', value: 121 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1299', () => {
    const payload: TestPayload = { id: '1299_10', value: 212 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1299', async () => {
    const payload: TestPayload = { id: '1299_11', value: 112 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1299', () => {
    const payload: TestPayload = { id: '1299_12', value: 295 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1299', () => {
    const payload: TestPayload = { id: '1299_13', value: 294 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
