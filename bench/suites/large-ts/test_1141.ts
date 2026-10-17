import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1141', () => {
  it('async TS test 0 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_0', value: 116 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1141', () => {
    const payload: TestPayload = { id: '1141_1', value: 422 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1141', () => {
    const payload: TestPayload = { id: '1141_2', value: 278 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_3', value: 356 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1141', () => {
    const payload: TestPayload = { id: '1141_4', value: 499 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1141', () => {
    const payload: TestPayload = { id: '1141_5', value: 53 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_6', value: 126 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_7', value: 368 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_8', value: 341 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_9', value: 129 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1141', () => {
    const payload: TestPayload = { id: '1141_10', value: 425 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1141', () => {
    const payload: TestPayload = { id: '1141_11', value: 173 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1141', async () => {
    const payload: TestPayload = { id: '1141_12', value: 109 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1141', () => {
    const payload: TestPayload = { id: '1141_13', value: 433 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
