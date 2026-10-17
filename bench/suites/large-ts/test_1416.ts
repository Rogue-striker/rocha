import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1416', () => {
  it('async TS test 0 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_0', value: 96 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1416', () => {
    const payload: TestPayload = { id: '1416_1', value: 5 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_2', value: 56 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_3', value: 98 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_4', value: 226 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1416', () => {
    const payload: TestPayload = { id: '1416_5', value: 360 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_6', value: 377 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_7', value: 239 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1416', () => {
    const payload: TestPayload = { id: '1416_8', value: 479 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1416', () => {
    const payload: TestPayload = { id: '1416_9', value: 474 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1416', () => {
    const payload: TestPayload = { id: '1416_10', value: 420 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1416', () => {
    const payload: TestPayload = { id: '1416_11', value: 491 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1416', async () => {
    const payload: TestPayload = { id: '1416_12', value: 23 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1416', () => {
    const payload: TestPayload = { id: '1416_13', value: 265 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
