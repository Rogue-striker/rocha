import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1171', () => {
  it('async TS test 0 of file 1171', async () => {
    const payload: TestPayload = { id: '1171_0', value: 412 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1171', () => {
    const payload: TestPayload = { id: '1171_1', value: 388 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1171', async () => {
    const payload: TestPayload = { id: '1171_2', value: 357 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1171', () => {
    const payload: TestPayload = { id: '1171_3', value: 348 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1171', async () => {
    const payload: TestPayload = { id: '1171_4', value: 154 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1171', () => {
    const payload: TestPayload = { id: '1171_5', value: 366 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1171', () => {
    const payload: TestPayload = { id: '1171_6', value: 44 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1171', () => {
    const payload: TestPayload = { id: '1171_7', value: 99 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1171', () => {
    const payload: TestPayload = { id: '1171_8', value: 46 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1171', async () => {
    const payload: TestPayload = { id: '1171_9', value: 143 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1171', () => {
    const payload: TestPayload = { id: '1171_10', value: 478 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1171', async () => {
    const payload: TestPayload = { id: '1171_11', value: 491 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1171', () => {
    const payload: TestPayload = { id: '1171_12', value: 28 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1171', () => {
    const payload: TestPayload = { id: '1171_13', value: 484 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
