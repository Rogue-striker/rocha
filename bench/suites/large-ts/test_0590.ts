import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 590', () => {
  it('async TS test 0 of file 590', async () => {
    const payload: TestPayload = { id: '590_0', value: 440 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 590', async () => {
    const payload: TestPayload = { id: '590_1', value: 204 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 590', () => {
    const payload: TestPayload = { id: '590_2', value: 269 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 590', () => {
    const payload: TestPayload = { id: '590_3', value: 168 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 590', () => {
    const payload: TestPayload = { id: '590_4', value: 107 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 590', async () => {
    const payload: TestPayload = { id: '590_5', value: 263 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 590', () => {
    const payload: TestPayload = { id: '590_6', value: 374 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 590', () => {
    const payload: TestPayload = { id: '590_7', value: 421 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 590', async () => {
    const payload: TestPayload = { id: '590_8', value: 263 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 590', () => {
    const payload: TestPayload = { id: '590_9', value: 53 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 590', async () => {
    const payload: TestPayload = { id: '590_10', value: 371 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 590', async () => {
    const payload: TestPayload = { id: '590_11', value: 300 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 590', () => {
    const payload: TestPayload = { id: '590_12', value: 119 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
