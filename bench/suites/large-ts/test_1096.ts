import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1096', () => {
  it('async TS test 0 of file 1096', async () => {
    const payload: TestPayload = { id: '1096_0', value: 19 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1096', () => {
    const payload: TestPayload = { id: '1096_1', value: 248 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1096', () => {
    const payload: TestPayload = { id: '1096_2', value: 418 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1096', () => {
    const payload: TestPayload = { id: '1096_3', value: 267 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1096', () => {
    const payload: TestPayload = { id: '1096_4', value: 449 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1096', () => {
    const payload: TestPayload = { id: '1096_5', value: 277 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1096', async () => {
    const payload: TestPayload = { id: '1096_6', value: 348 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1096', async () => {
    const payload: TestPayload = { id: '1096_7', value: 51 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1096', async () => {
    const payload: TestPayload = { id: '1096_8', value: 192 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1096', async () => {
    const payload: TestPayload = { id: '1096_9', value: 464 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1096', () => {
    const payload: TestPayload = { id: '1096_10', value: 314 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1096', () => {
    const payload: TestPayload = { id: '1096_11', value: 225 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1096', () => {
    const payload: TestPayload = { id: '1096_12', value: 29 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1096', async () => {
    const payload: TestPayload = { id: '1096_13', value: 270 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
