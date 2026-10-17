import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 299', () => {
  it('sync TS test 0 of file 299', () => {
    const payload: TestPayload = { id: '299_0', value: 287 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 299', () => {
    const payload: TestPayload = { id: '299_1', value: 73 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 299', async () => {
    const payload: TestPayload = { id: '299_2', value: 142 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 299', () => {
    const payload: TestPayload = { id: '299_3', value: 31 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 299', () => {
    const payload: TestPayload = { id: '299_4', value: 333 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 299', () => {
    const payload: TestPayload = { id: '299_5', value: 43 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 299', () => {
    const payload: TestPayload = { id: '299_6', value: 303 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 299', async () => {
    const payload: TestPayload = { id: '299_7', value: 358 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 299', async () => {
    const payload: TestPayload = { id: '299_8', value: 380 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 299', async () => {
    const payload: TestPayload = { id: '299_9', value: 135 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 299', async () => {
    const payload: TestPayload = { id: '299_10', value: 194 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 299', () => {
    const payload: TestPayload = { id: '299_11', value: 323 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 299', async () => {
    const payload: TestPayload = { id: '299_12', value: 348 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
