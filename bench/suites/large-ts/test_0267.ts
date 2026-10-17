import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 267', () => {
  it('async TS test 0 of file 267', async () => {
    const payload: TestPayload = { id: '267_0', value: 238 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 267', async () => {
    const payload: TestPayload = { id: '267_1', value: 83 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 267', async () => {
    const payload: TestPayload = { id: '267_2', value: 187 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 267', () => {
    const payload: TestPayload = { id: '267_3', value: 302 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 267', () => {
    const payload: TestPayload = { id: '267_4', value: 245 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 267', () => {
    const payload: TestPayload = { id: '267_5', value: 328 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 267', async () => {
    const payload: TestPayload = { id: '267_6', value: 270 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 267', async () => {
    const payload: TestPayload = { id: '267_7', value: 113 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 267', () => {
    const payload: TestPayload = { id: '267_8', value: 47 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 267', () => {
    const payload: TestPayload = { id: '267_9', value: 429 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 267', () => {
    const payload: TestPayload = { id: '267_10', value: 275 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 267', async () => {
    const payload: TestPayload = { id: '267_11', value: 433 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 267', async () => {
    const payload: TestPayload = { id: '267_12', value: 214 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
