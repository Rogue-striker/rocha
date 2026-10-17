import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 190', () => {
  it('sync TS test 0 of file 190', () => {
    const payload: TestPayload = { id: '190_0', value: 245 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 190', () => {
    const payload: TestPayload = { id: '190_1', value: 103 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 190', async () => {
    const payload: TestPayload = { id: '190_2', value: 287 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 190', async () => {
    const payload: TestPayload = { id: '190_3', value: 299 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 190', () => {
    const payload: TestPayload = { id: '190_4', value: 474 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 190', () => {
    const payload: TestPayload = { id: '190_5', value: 365 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 190', () => {
    const payload: TestPayload = { id: '190_6', value: 187 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 190', async () => {
    const payload: TestPayload = { id: '190_7', value: 387 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 190', async () => {
    const payload: TestPayload = { id: '190_8', value: 12 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 190', async () => {
    const payload: TestPayload = { id: '190_9', value: 156 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 190', () => {
    const payload: TestPayload = { id: '190_10', value: 330 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 190', async () => {
    const payload: TestPayload = { id: '190_11', value: 136 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 190', async () => {
    const payload: TestPayload = { id: '190_12', value: 398 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
