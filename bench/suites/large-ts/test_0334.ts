import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 334', () => {
  it('async TS test 0 of file 334', async () => {
    const payload: TestPayload = { id: '334_0', value: 53 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 334', () => {
    const payload: TestPayload = { id: '334_1', value: 127 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 334', async () => {
    const payload: TestPayload = { id: '334_2', value: 477 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 334', async () => {
    const payload: TestPayload = { id: '334_3', value: 129 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 334', async () => {
    const payload: TestPayload = { id: '334_4', value: 256 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 334', async () => {
    const payload: TestPayload = { id: '334_5', value: 217 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 334', async () => {
    const payload: TestPayload = { id: '334_6', value: 102 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 334', async () => {
    const payload: TestPayload = { id: '334_7', value: 135 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 334', async () => {
    const payload: TestPayload = { id: '334_8', value: 171 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 334', () => {
    const payload: TestPayload = { id: '334_9', value: 26 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 334', () => {
    const payload: TestPayload = { id: '334_10', value: 247 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 334', async () => {
    const payload: TestPayload = { id: '334_11', value: 370 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 334', () => {
    const payload: TestPayload = { id: '334_12', value: 255 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
