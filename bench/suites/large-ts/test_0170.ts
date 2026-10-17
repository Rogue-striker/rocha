import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 170', () => {
  it('async TS test 0 of file 170', async () => {
    const payload: TestPayload = { id: '170_0', value: 330 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 170', () => {
    const payload: TestPayload = { id: '170_1', value: 77 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 170', async () => {
    const payload: TestPayload = { id: '170_2', value: 349 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 170', () => {
    const payload: TestPayload = { id: '170_3', value: 75 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 170', async () => {
    const payload: TestPayload = { id: '170_4', value: 467 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 170', async () => {
    const payload: TestPayload = { id: '170_5', value: 498 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 170', () => {
    const payload: TestPayload = { id: '170_6', value: 236 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 170', () => {
    const payload: TestPayload = { id: '170_7', value: 117 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 170', () => {
    const payload: TestPayload = { id: '170_8', value: 274 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 170', () => {
    const payload: TestPayload = { id: '170_9', value: 230 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 170', async () => {
    const payload: TestPayload = { id: '170_10', value: 233 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 170', async () => {
    const payload: TestPayload = { id: '170_11', value: 355 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 170', async () => {
    const payload: TestPayload = { id: '170_12', value: 479 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
