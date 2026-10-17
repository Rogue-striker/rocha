import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1239', () => {
  it('async TS test 0 of file 1239', async () => {
    const payload: TestPayload = { id: '1239_0', value: 151 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1239', () => {
    const payload: TestPayload = { id: '1239_1', value: 131 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1239', () => {
    const payload: TestPayload = { id: '1239_2', value: 107 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1239', async () => {
    const payload: TestPayload = { id: '1239_3', value: 488 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1239', () => {
    const payload: TestPayload = { id: '1239_4', value: 324 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1239', async () => {
    const payload: TestPayload = { id: '1239_5', value: 178 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1239', () => {
    const payload: TestPayload = { id: '1239_6', value: 414 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1239', async () => {
    const payload: TestPayload = { id: '1239_7', value: 442 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1239', async () => {
    const payload: TestPayload = { id: '1239_8', value: 217 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1239', () => {
    const payload: TestPayload = { id: '1239_9', value: 220 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1239', () => {
    const payload: TestPayload = { id: '1239_10', value: 465 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1239', () => {
    const payload: TestPayload = { id: '1239_11', value: 480 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1239', () => {
    const payload: TestPayload = { id: '1239_12', value: 432 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1239', () => {
    const payload: TestPayload = { id: '1239_13', value: 21 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
