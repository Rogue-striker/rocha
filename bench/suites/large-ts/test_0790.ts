import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 790', () => {
  it('async TS test 0 of file 790', async () => {
    const payload: TestPayload = { id: '790_0', value: 350 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 790', () => {
    const payload: TestPayload = { id: '790_1', value: 370 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 790', () => {
    const payload: TestPayload = { id: '790_2', value: 156 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 790', () => {
    const payload: TestPayload = { id: '790_3', value: 7 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 790', async () => {
    const payload: TestPayload = { id: '790_4', value: 134 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 790', async () => {
    const payload: TestPayload = { id: '790_5', value: 414 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 790', async () => {
    const payload: TestPayload = { id: '790_6', value: 224 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 790', () => {
    const payload: TestPayload = { id: '790_7', value: 155 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 790', async () => {
    const payload: TestPayload = { id: '790_8', value: 390 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 790', () => {
    const payload: TestPayload = { id: '790_9', value: 447 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 790', () => {
    const payload: TestPayload = { id: '790_10', value: 225 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 790', () => {
    const payload: TestPayload = { id: '790_11', value: 5 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 790', () => {
    const payload: TestPayload = { id: '790_12', value: 245 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
