import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1036', () => {
  it('sync TS test 0 of file 1036', () => {
    const payload: TestPayload = { id: '1036_0', value: 286 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_1', value: 157 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_2', value: 476 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1036', () => {
    const payload: TestPayload = { id: '1036_3', value: 70 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_4', value: 317 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_5', value: 319 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1036', () => {
    const payload: TestPayload = { id: '1036_6', value: 65 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_7', value: 83 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1036', () => {
    const payload: TestPayload = { id: '1036_8', value: 108 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1036', () => {
    const payload: TestPayload = { id: '1036_9', value: 249 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1036', () => {
    const payload: TestPayload = { id: '1036_10', value: 279 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_11', value: 382 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_12', value: 259 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1036', async () => {
    const payload: TestPayload = { id: '1036_13', value: 340 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
