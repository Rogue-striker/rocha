import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1479', () => {
  it('sync TS test 0 of file 1479', () => {
    const payload: TestPayload = { id: '1479_0', value: 449 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1479', () => {
    const payload: TestPayload = { id: '1479_1', value: 377 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1479', () => {
    const payload: TestPayload = { id: '1479_2', value: 168 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_3', value: 433 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_4', value: 86 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_5', value: 418 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_6', value: 349 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1479', () => {
    const payload: TestPayload = { id: '1479_7', value: 454 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1479', () => {
    const payload: TestPayload = { id: '1479_8', value: 437 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1479', () => {
    const payload: TestPayload = { id: '1479_9', value: 365 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_10', value: 76 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_11', value: 430 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1479', async () => {
    const payload: TestPayload = { id: '1479_12', value: 96 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1479', () => {
    const payload: TestPayload = { id: '1479_13', value: 355 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
