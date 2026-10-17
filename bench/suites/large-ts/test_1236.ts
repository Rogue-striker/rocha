import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1236', () => {
  it('sync TS test 0 of file 1236', () => {
    const payload: TestPayload = { id: '1236_0', value: 179 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1236', () => {
    const payload: TestPayload = { id: '1236_1', value: 23 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_2', value: 360 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1236', () => {
    const payload: TestPayload = { id: '1236_3', value: 497 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_4', value: 197 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1236', () => {
    const payload: TestPayload = { id: '1236_5', value: 436 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1236', () => {
    const payload: TestPayload = { id: '1236_6', value: 356 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_7', value: 407 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1236', () => {
    const payload: TestPayload = { id: '1236_8', value: 325 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_9', value: 454 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_10', value: 24 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1236', () => {
    const payload: TestPayload = { id: '1236_11', value: 363 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_12', value: 238 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1236', async () => {
    const payload: TestPayload = { id: '1236_13', value: 394 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
