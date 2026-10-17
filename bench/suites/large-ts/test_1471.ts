import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1471', () => {
  it('sync TS test 0 of file 1471', () => {
    const payload: TestPayload = { id: '1471_0', value: 245 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1471', async () => {
    const payload: TestPayload = { id: '1471_1', value: 178 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1471', () => {
    const payload: TestPayload = { id: '1471_2', value: 341 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1471', async () => {
    const payload: TestPayload = { id: '1471_3', value: 151 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1471', () => {
    const payload: TestPayload = { id: '1471_4', value: 247 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1471', async () => {
    const payload: TestPayload = { id: '1471_5', value: 224 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1471', async () => {
    const payload: TestPayload = { id: '1471_6', value: 447 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1471', () => {
    const payload: TestPayload = { id: '1471_7', value: 365 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1471', async () => {
    const payload: TestPayload = { id: '1471_8', value: 339 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1471', () => {
    const payload: TestPayload = { id: '1471_9', value: 330 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1471', () => {
    const payload: TestPayload = { id: '1471_10', value: 333 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1471', async () => {
    const payload: TestPayload = { id: '1471_11', value: 45 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1471', () => {
    const payload: TestPayload = { id: '1471_12', value: 160 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1471', () => {
    const payload: TestPayload = { id: '1471_13', value: 392 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
