import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1244', () => {
  it('async TS test 0 of file 1244', async () => {
    const payload: TestPayload = { id: '1244_0', value: 142 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1244', async () => {
    const payload: TestPayload = { id: '1244_1', value: 212 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1244', () => {
    const payload: TestPayload = { id: '1244_2', value: 281 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1244', async () => {
    const payload: TestPayload = { id: '1244_3', value: 170 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1244', () => {
    const payload: TestPayload = { id: '1244_4', value: 298 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1244', () => {
    const payload: TestPayload = { id: '1244_5', value: 202 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1244', () => {
    const payload: TestPayload = { id: '1244_6', value: 212 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1244', () => {
    const payload: TestPayload = { id: '1244_7', value: 31 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1244', () => {
    const payload: TestPayload = { id: '1244_8', value: 222 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1244', () => {
    const payload: TestPayload = { id: '1244_9', value: 419 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1244', () => {
    const payload: TestPayload = { id: '1244_10', value: 282 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1244', () => {
    const payload: TestPayload = { id: '1244_11', value: 382 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1244', async () => {
    const payload: TestPayload = { id: '1244_12', value: 486 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1244', () => {
    const payload: TestPayload = { id: '1244_13', value: 353 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
