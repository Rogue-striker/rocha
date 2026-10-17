import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1201', () => {
  it('async TS test 0 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_0', value: 358 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1201', () => {
    const payload: TestPayload = { id: '1201_1', value: 92 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1201', () => {
    const payload: TestPayload = { id: '1201_2', value: 238 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1201', () => {
    const payload: TestPayload = { id: '1201_3', value: 245 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_4', value: 105 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1201', () => {
    const payload: TestPayload = { id: '1201_5', value: 444 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_6', value: 262 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_7', value: 65 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_8', value: 382 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1201', () => {
    const payload: TestPayload = { id: '1201_9', value: 26 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_10', value: 498 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_11', value: 1 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1201', () => {
    const payload: TestPayload = { id: '1201_12', value: 126 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1201', async () => {
    const payload: TestPayload = { id: '1201_13', value: 195 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
