import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1336', () => {
  it('async TS test 0 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_0', value: 209 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_1', value: 311 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_2', value: 336 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_3', value: 441 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_4', value: 118 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_5', value: 55 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_6', value: 433 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_7', value: 314 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1336', () => {
    const payload: TestPayload = { id: '1336_8', value: 182 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1336', () => {
    const payload: TestPayload = { id: '1336_9', value: 45 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1336', async () => {
    const payload: TestPayload = { id: '1336_10', value: 84 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1336', () => {
    const payload: TestPayload = { id: '1336_11', value: 431 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1336', () => {
    const payload: TestPayload = { id: '1336_12', value: 347 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1336', () => {
    const payload: TestPayload = { id: '1336_13', value: 321 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
