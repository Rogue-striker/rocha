import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 396', () => {
  it('async TS test 0 of file 396', async () => {
    const payload: TestPayload = { id: '396_0', value: 190 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 396', () => {
    const payload: TestPayload = { id: '396_1', value: 423 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 396', () => {
    const payload: TestPayload = { id: '396_2', value: 165 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 396', async () => {
    const payload: TestPayload = { id: '396_3', value: 283 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 396', async () => {
    const payload: TestPayload = { id: '396_4', value: 388 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 396', async () => {
    const payload: TestPayload = { id: '396_5', value: 173 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 396', () => {
    const payload: TestPayload = { id: '396_6', value: 415 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 396', () => {
    const payload: TestPayload = { id: '396_7', value: 240 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 396', async () => {
    const payload: TestPayload = { id: '396_8', value: 134 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 396', async () => {
    const payload: TestPayload = { id: '396_9', value: 104 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 396', async () => {
    const payload: TestPayload = { id: '396_10', value: 162 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 396', () => {
    const payload: TestPayload = { id: '396_11', value: 160 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 396', () => {
    const payload: TestPayload = { id: '396_12', value: 273 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
