import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1038', () => {
  it('async TS test 0 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_0', value: 115 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_1', value: 488 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_2', value: 59 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1038', () => {
    const payload: TestPayload = { id: '1038_3', value: 487 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1038', () => {
    const payload: TestPayload = { id: '1038_4', value: 382 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_5', value: 172 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_6', value: 323 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_7', value: 399 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_8', value: 369 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1038', () => {
    const payload: TestPayload = { id: '1038_9', value: 284 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_10', value: 426 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_11', value: 94 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1038', async () => {
    const payload: TestPayload = { id: '1038_12', value: 87 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1038', () => {
    const payload: TestPayload = { id: '1038_13', value: 59 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
