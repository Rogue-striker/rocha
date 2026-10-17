import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 357', () => {
  it('async TS test 0 of file 357', async () => {
    const payload: TestPayload = { id: '357_0', value: 260 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 357', async () => {
    const payload: TestPayload = { id: '357_1', value: 374 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 357', async () => {
    const payload: TestPayload = { id: '357_2', value: 393 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 357', async () => {
    const payload: TestPayload = { id: '357_3', value: 48 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 357', () => {
    const payload: TestPayload = { id: '357_4', value: 332 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 357', async () => {
    const payload: TestPayload = { id: '357_5', value: 375 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 357', async () => {
    const payload: TestPayload = { id: '357_6', value: 462 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 357', () => {
    const payload: TestPayload = { id: '357_7', value: 359 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 357', async () => {
    const payload: TestPayload = { id: '357_8', value: 483 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 357', async () => {
    const payload: TestPayload = { id: '357_9', value: 128 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 357', async () => {
    const payload: TestPayload = { id: '357_10', value: 424 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 357', async () => {
    const payload: TestPayload = { id: '357_11', value: 57 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 357', () => {
    const payload: TestPayload = { id: '357_12', value: 10 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
