import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1121', () => {
  it('async TS test 0 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_0', value: 344 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1121', () => {
    const payload: TestPayload = { id: '1121_1', value: 328 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_2', value: 491 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_3', value: 100 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_4', value: 11 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1121', () => {
    const payload: TestPayload = { id: '1121_5', value: 27 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1121', () => {
    const payload: TestPayload = { id: '1121_6', value: 410 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_7', value: 353 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_8', value: 228 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1121', () => {
    const payload: TestPayload = { id: '1121_9', value: 109 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1121', () => {
    const payload: TestPayload = { id: '1121_10', value: 154 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_11', value: 438 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1121', async () => {
    const payload: TestPayload = { id: '1121_12', value: 475 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1121', () => {
    const payload: TestPayload = { id: '1121_13', value: 158 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
