import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1125', () => {
  it('async TS test 0 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_0', value: 227 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_1', value: 84 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1125', () => {
    const payload: TestPayload = { id: '1125_2', value: 491 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1125', () => {
    const payload: TestPayload = { id: '1125_3', value: 464 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_4', value: 280 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1125', () => {
    const payload: TestPayload = { id: '1125_5', value: 278 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_6', value: 241 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_7', value: 145 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_8', value: 417 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1125', () => {
    const payload: TestPayload = { id: '1125_9', value: 229 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1125', () => {
    const payload: TestPayload = { id: '1125_10', value: 409 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_11', value: 456 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1125', () => {
    const payload: TestPayload = { id: '1125_12', value: 70 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1125', async () => {
    const payload: TestPayload = { id: '1125_13', value: 498 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
