import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1191', () => {
  it('async TS test 0 of file 1191', async () => {
    const payload: TestPayload = { id: '1191_0', value: 476 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1191', () => {
    const payload: TestPayload = { id: '1191_1', value: 111 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1191', () => {
    const payload: TestPayload = { id: '1191_2', value: 87 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1191', () => {
    const payload: TestPayload = { id: '1191_3', value: 38 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1191', () => {
    const payload: TestPayload = { id: '1191_4', value: 332 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1191', () => {
    const payload: TestPayload = { id: '1191_5', value: 169 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1191', () => {
    const payload: TestPayload = { id: '1191_6', value: 452 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1191', async () => {
    const payload: TestPayload = { id: '1191_7', value: 462 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1191', () => {
    const payload: TestPayload = { id: '1191_8', value: 3 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1191', () => {
    const payload: TestPayload = { id: '1191_9', value: 231 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1191', async () => {
    const payload: TestPayload = { id: '1191_10', value: 94 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1191', () => {
    const payload: TestPayload = { id: '1191_11', value: 425 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1191', async () => {
    const payload: TestPayload = { id: '1191_12', value: 168 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1191', () => {
    const payload: TestPayload = { id: '1191_13', value: 261 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
