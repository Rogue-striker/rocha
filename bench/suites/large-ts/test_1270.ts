import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1270', () => {
  it('sync TS test 0 of file 1270', () => {
    const payload: TestPayload = { id: '1270_0', value: 372 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1270', async () => {
    const payload: TestPayload = { id: '1270_1', value: 4 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1270', () => {
    const payload: TestPayload = { id: '1270_2', value: 463 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1270', async () => {
    const payload: TestPayload = { id: '1270_3', value: 373 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1270', async () => {
    const payload: TestPayload = { id: '1270_4', value: 357 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1270', () => {
    const payload: TestPayload = { id: '1270_5', value: 460 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1270', () => {
    const payload: TestPayload = { id: '1270_6', value: 348 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1270', () => {
    const payload: TestPayload = { id: '1270_7', value: 331 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1270', () => {
    const payload: TestPayload = { id: '1270_8', value: 60 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1270', () => {
    const payload: TestPayload = { id: '1270_9', value: 310 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1270', () => {
    const payload: TestPayload = { id: '1270_10', value: 217 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1270', async () => {
    const payload: TestPayload = { id: '1270_11', value: 187 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1270', async () => {
    const payload: TestPayload = { id: '1270_12', value: 223 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1270', async () => {
    const payload: TestPayload = { id: '1270_13', value: 119 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
