import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1457', () => {
  it('sync TS test 0 of file 1457', () => {
    const payload: TestPayload = { id: '1457_0', value: 279 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1457', () => {
    const payload: TestPayload = { id: '1457_1', value: 1 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1457', () => {
    const payload: TestPayload = { id: '1457_2', value: 131 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1457', () => {
    const payload: TestPayload = { id: '1457_3', value: 252 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1457', async () => {
    const payload: TestPayload = { id: '1457_4', value: 362 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1457', () => {
    const payload: TestPayload = { id: '1457_5', value: 295 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1457', () => {
    const payload: TestPayload = { id: '1457_6', value: 311 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1457', async () => {
    const payload: TestPayload = { id: '1457_7', value: 45 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1457', async () => {
    const payload: TestPayload = { id: '1457_8', value: 209 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1457', () => {
    const payload: TestPayload = { id: '1457_9', value: 134 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1457', async () => {
    const payload: TestPayload = { id: '1457_10', value: 179 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1457', () => {
    const payload: TestPayload = { id: '1457_11', value: 87 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1457', async () => {
    const payload: TestPayload = { id: '1457_12', value: 310 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1457', async () => {
    const payload: TestPayload = { id: '1457_13', value: 50 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
