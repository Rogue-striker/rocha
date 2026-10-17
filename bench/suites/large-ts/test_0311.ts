import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 311', () => {
  it('sync TS test 0 of file 311', () => {
    const payload: TestPayload = { id: '311_0', value: 440 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 311', () => {
    const payload: TestPayload = { id: '311_1', value: 373 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 311', () => {
    const payload: TestPayload = { id: '311_2', value: 238 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 311', async () => {
    const payload: TestPayload = { id: '311_3', value: 413 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 311', async () => {
    const payload: TestPayload = { id: '311_4', value: 271 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 311', () => {
    const payload: TestPayload = { id: '311_5', value: 103 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 311', () => {
    const payload: TestPayload = { id: '311_6', value: 126 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 311', () => {
    const payload: TestPayload = { id: '311_7', value: 174 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 311', () => {
    const payload: TestPayload = { id: '311_8', value: 267 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 311', () => {
    const payload: TestPayload = { id: '311_9', value: 126 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 311', async () => {
    const payload: TestPayload = { id: '311_10', value: 311 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 311', async () => {
    const payload: TestPayload = { id: '311_11', value: 151 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 311', () => {
    const payload: TestPayload = { id: '311_12', value: 198 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
