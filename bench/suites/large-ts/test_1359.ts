import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1359', () => {
  it('sync TS test 0 of file 1359', () => {
    const payload: TestPayload = { id: '1359_0', value: 381 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1359', () => {
    const payload: TestPayload = { id: '1359_1', value: 247 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1359', () => {
    const payload: TestPayload = { id: '1359_2', value: 231 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1359', () => {
    const payload: TestPayload = { id: '1359_3', value: 142 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1359', async () => {
    const payload: TestPayload = { id: '1359_4', value: 424 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1359', async () => {
    const payload: TestPayload = { id: '1359_5', value: 27 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1359', () => {
    const payload: TestPayload = { id: '1359_6', value: 172 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1359', async () => {
    const payload: TestPayload = { id: '1359_7', value: 462 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1359', async () => {
    const payload: TestPayload = { id: '1359_8', value: 270 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1359', () => {
    const payload: TestPayload = { id: '1359_9', value: 225 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1359', () => {
    const payload: TestPayload = { id: '1359_10', value: 448 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1359', async () => {
    const payload: TestPayload = { id: '1359_11', value: 123 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1359', () => {
    const payload: TestPayload = { id: '1359_12', value: 403 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1359', async () => {
    const payload: TestPayload = { id: '1359_13', value: 73 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
