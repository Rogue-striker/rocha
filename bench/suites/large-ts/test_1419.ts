import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1419', () => {
  it('sync TS test 0 of file 1419', () => {
    const payload: TestPayload = { id: '1419_0', value: 40 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_1', value: 394 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_2', value: 77 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1419', () => {
    const payload: TestPayload = { id: '1419_3', value: 496 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1419', () => {
    const payload: TestPayload = { id: '1419_4', value: 281 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_5', value: 126 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_6', value: 343 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_7', value: 476 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1419', () => {
    const payload: TestPayload = { id: '1419_8', value: 494 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1419', () => {
    const payload: TestPayload = { id: '1419_9', value: 405 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1419', () => {
    const payload: TestPayload = { id: '1419_10', value: 176 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1419', () => {
    const payload: TestPayload = { id: '1419_11', value: 433 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_12', value: 223 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1419', async () => {
    const payload: TestPayload = { id: '1419_13', value: 222 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
