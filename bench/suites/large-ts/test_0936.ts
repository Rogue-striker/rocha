import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 936', () => {
  it('async TS test 0 of file 936', async () => {
    const payload: TestPayload = { id: '936_0', value: 448 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 936', async () => {
    const payload: TestPayload = { id: '936_1', value: 400 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 936', async () => {
    const payload: TestPayload = { id: '936_2', value: 129 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 936', () => {
    const payload: TestPayload = { id: '936_3', value: 174 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 936', () => {
    const payload: TestPayload = { id: '936_4', value: 461 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 936', async () => {
    const payload: TestPayload = { id: '936_5', value: 497 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 936', async () => {
    const payload: TestPayload = { id: '936_6', value: 427 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 936', async () => {
    const payload: TestPayload = { id: '936_7', value: 9 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 936', () => {
    const payload: TestPayload = { id: '936_8', value: 70 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 936', () => {
    const payload: TestPayload = { id: '936_9', value: 340 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 936', () => {
    const payload: TestPayload = { id: '936_10', value: 286 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 936', async () => {
    const payload: TestPayload = { id: '936_11', value: 279 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 936', () => {
    const payload: TestPayload = { id: '936_12', value: 24 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
