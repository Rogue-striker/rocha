import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1394', () => {
  it('async TS test 0 of file 1394', async () => {
    const payload: TestPayload = { id: '1394_0', value: 147 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1394', () => {
    const payload: TestPayload = { id: '1394_1', value: 375 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1394', () => {
    const payload: TestPayload = { id: '1394_2', value: 275 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1394', () => {
    const payload: TestPayload = { id: '1394_3', value: 315 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1394', async () => {
    const payload: TestPayload = { id: '1394_4', value: 197 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1394', () => {
    const payload: TestPayload = { id: '1394_5', value: 100 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1394', () => {
    const payload: TestPayload = { id: '1394_6', value: 201 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1394', () => {
    const payload: TestPayload = { id: '1394_7', value: 111 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1394', () => {
    const payload: TestPayload = { id: '1394_8', value: 276 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1394', async () => {
    const payload: TestPayload = { id: '1394_9', value: 97 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1394', () => {
    const payload: TestPayload = { id: '1394_10', value: 120 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1394', async () => {
    const payload: TestPayload = { id: '1394_11', value: 223 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1394', () => {
    const payload: TestPayload = { id: '1394_12', value: 46 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1394', async () => {
    const payload: TestPayload = { id: '1394_13', value: 238 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
