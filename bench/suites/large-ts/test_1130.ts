import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1130', () => {
  it('async TS test 0 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_0', value: 126 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_1', value: 351 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_2', value: 203 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_3', value: 436 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1130', () => {
    const payload: TestPayload = { id: '1130_4', value: 315 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_5', value: 231 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1130', () => {
    const payload: TestPayload = { id: '1130_6', value: 143 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_7', value: 350 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_8', value: 13 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_9', value: 407 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1130', () => {
    const payload: TestPayload = { id: '1130_10', value: 0 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_11', value: 342 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1130', () => {
    const payload: TestPayload = { id: '1130_12', value: 13 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1130', async () => {
    const payload: TestPayload = { id: '1130_13', value: 463 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
