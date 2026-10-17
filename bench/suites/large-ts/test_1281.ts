import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1281', () => {
  it('async TS test 0 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_0', value: 476 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_1', value: 258 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_2', value: 346 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1281', () => {
    const payload: TestPayload = { id: '1281_3', value: 371 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_4', value: 452 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1281', () => {
    const payload: TestPayload = { id: '1281_5', value: 271 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_6', value: 139 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_7', value: 427 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1281', () => {
    const payload: TestPayload = { id: '1281_8', value: 90 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1281', () => {
    const payload: TestPayload = { id: '1281_9', value: 342 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1281', () => {
    const payload: TestPayload = { id: '1281_10', value: 202 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_11', value: 112 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1281', () => {
    const payload: TestPayload = { id: '1281_12', value: 18 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1281', async () => {
    const payload: TestPayload = { id: '1281_13', value: 85 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
