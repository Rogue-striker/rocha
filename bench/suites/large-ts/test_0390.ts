import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 390', () => {
  it('sync TS test 0 of file 390', () => {
    const payload: TestPayload = { id: '390_0', value: 241 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 390', async () => {
    const payload: TestPayload = { id: '390_1', value: 365 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 390', async () => {
    const payload: TestPayload = { id: '390_2', value: 451 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 390', async () => {
    const payload: TestPayload = { id: '390_3', value: 19 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 390', () => {
    const payload: TestPayload = { id: '390_4', value: 64 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 390', async () => {
    const payload: TestPayload = { id: '390_5', value: 173 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 390', () => {
    const payload: TestPayload = { id: '390_6', value: 66 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 390', async () => {
    const payload: TestPayload = { id: '390_7', value: 175 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 390', async () => {
    const payload: TestPayload = { id: '390_8', value: 53 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 390', () => {
    const payload: TestPayload = { id: '390_9', value: 498 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 390', () => {
    const payload: TestPayload = { id: '390_10', value: 422 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 390', async () => {
    const payload: TestPayload = { id: '390_11', value: 463 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 390', async () => {
    const payload: TestPayload = { id: '390_12', value: 417 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
