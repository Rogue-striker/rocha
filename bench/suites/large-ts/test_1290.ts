import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1290', () => {
  it('sync TS test 0 of file 1290', () => {
    const payload: TestPayload = { id: '1290_0', value: 330 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_1', value: 396 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_2', value: 165 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1290', () => {
    const payload: TestPayload = { id: '1290_3', value: 375 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_4', value: 8 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_5', value: 137 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1290', () => {
    const payload: TestPayload = { id: '1290_6', value: 497 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_7', value: 348 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1290', () => {
    const payload: TestPayload = { id: '1290_8', value: 168 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_9', value: 85 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_10', value: 464 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_11', value: 440 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1290', async () => {
    const payload: TestPayload = { id: '1290_12', value: 324 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1290', () => {
    const payload: TestPayload = { id: '1290_13', value: 321 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
