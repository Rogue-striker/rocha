import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 171', () => {
  it('async TS test 0 of file 171', async () => {
    const payload: TestPayload = { id: '171_0', value: 103 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 171', () => {
    const payload: TestPayload = { id: '171_1', value: 377 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 171', () => {
    const payload: TestPayload = { id: '171_2', value: 313 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 171', () => {
    const payload: TestPayload = { id: '171_3', value: 454 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 171', () => {
    const payload: TestPayload = { id: '171_4', value: 401 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 171', () => {
    const payload: TestPayload = { id: '171_5', value: 130 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 171', async () => {
    const payload: TestPayload = { id: '171_6', value: 106 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 171', async () => {
    const payload: TestPayload = { id: '171_7', value: 27 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 171', () => {
    const payload: TestPayload = { id: '171_8', value: 415 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 171', () => {
    const payload: TestPayload = { id: '171_9', value: 170 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 171', () => {
    const payload: TestPayload = { id: '171_10', value: 231 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 171', async () => {
    const payload: TestPayload = { id: '171_11', value: 266 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 171', async () => {
    const payload: TestPayload = { id: '171_12', value: 265 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
