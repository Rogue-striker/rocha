import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1023', () => {
  it('async TS test 0 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_0', value: 4 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1023', () => {
    const payload: TestPayload = { id: '1023_1', value: 275 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1023', () => {
    const payload: TestPayload = { id: '1023_2', value: 444 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1023', () => {
    const payload: TestPayload = { id: '1023_3', value: 370 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_4', value: 200 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1023', () => {
    const payload: TestPayload = { id: '1023_5', value: 131 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1023', () => {
    const payload: TestPayload = { id: '1023_6', value: 87 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1023', () => {
    const payload: TestPayload = { id: '1023_7', value: 351 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_8', value: 389 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_9', value: 149 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_10', value: 427 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_11', value: 375 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1023', async () => {
    const payload: TestPayload = { id: '1023_12', value: 270 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1023', () => {
    const payload: TestPayload = { id: '1023_13', value: 311 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
