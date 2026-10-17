import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1001', () => {
  it('async TS test 0 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_0', value: 183 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1001', () => {
    const payload: TestPayload = { id: '1001_1', value: 350 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_2', value: 134 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1001', () => {
    const payload: TestPayload = { id: '1001_3', value: 460 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1001', () => {
    const payload: TestPayload = { id: '1001_4', value: 170 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_5', value: 80 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_6', value: 226 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_7', value: 272 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1001', () => {
    const payload: TestPayload = { id: '1001_8', value: 295 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_9', value: 12 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1001', () => {
    const payload: TestPayload = { id: '1001_10', value: 459 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1001', () => {
    const payload: TestPayload = { id: '1001_11', value: 322 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1001', async () => {
    const payload: TestPayload = { id: '1001_12', value: 426 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1001', () => {
    const payload: TestPayload = { id: '1001_13', value: 92 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
