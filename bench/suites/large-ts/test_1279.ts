import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1279', () => {
  it('sync TS test 0 of file 1279', () => {
    const payload: TestPayload = { id: '1279_0', value: 494 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_1', value: 453 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1279', () => {
    const payload: TestPayload = { id: '1279_2', value: 128 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_3', value: 188 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_4', value: 47 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_5', value: 342 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1279', () => {
    const payload: TestPayload = { id: '1279_6', value: 49 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1279', () => {
    const payload: TestPayload = { id: '1279_7', value: 368 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1279', () => {
    const payload: TestPayload = { id: '1279_8', value: 278 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_9', value: 480 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_10', value: 165 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1279', () => {
    const payload: TestPayload = { id: '1279_11', value: 54 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1279', async () => {
    const payload: TestPayload = { id: '1279_12', value: 234 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1279', () => {
    const payload: TestPayload = { id: '1279_13', value: 128 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
