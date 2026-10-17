import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1196', () => {
  it('sync TS test 0 of file 1196', () => {
    const payload: TestPayload = { id: '1196_0', value: 227 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1196', () => {
    const payload: TestPayload = { id: '1196_1', value: 435 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1196', () => {
    const payload: TestPayload = { id: '1196_2', value: 409 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_3', value: 301 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_4', value: 485 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_5', value: 313 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_6', value: 42 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1196', () => {
    const payload: TestPayload = { id: '1196_7', value: 164 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_8', value: 316 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_9', value: 406 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1196', () => {
    const payload: TestPayload = { id: '1196_10', value: 367 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_11', value: 416 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1196', () => {
    const payload: TestPayload = { id: '1196_12', value: 68 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1196', async () => {
    const payload: TestPayload = { id: '1196_13', value: 43 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
