import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 394', () => {
  it('sync TS test 0 of file 394', () => {
    const payload: TestPayload = { id: '394_0', value: 440 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 394', async () => {
    const payload: TestPayload = { id: '394_1', value: 295 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 394', () => {
    const payload: TestPayload = { id: '394_2', value: 439 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 394', () => {
    const payload: TestPayload = { id: '394_3', value: 324 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 394', async () => {
    const payload: TestPayload = { id: '394_4', value: 55 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 394', () => {
    const payload: TestPayload = { id: '394_5', value: 317 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 394', async () => {
    const payload: TestPayload = { id: '394_6', value: 360 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 394', () => {
    const payload: TestPayload = { id: '394_7', value: 299 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 394', async () => {
    const payload: TestPayload = { id: '394_8', value: 37 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 394', async () => {
    const payload: TestPayload = { id: '394_9', value: 463 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 394', async () => {
    const payload: TestPayload = { id: '394_10', value: 480 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 394', () => {
    const payload: TestPayload = { id: '394_11', value: 105 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 394', () => {
    const payload: TestPayload = { id: '394_12', value: 361 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
