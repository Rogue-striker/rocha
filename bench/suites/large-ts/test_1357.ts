import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1357', () => {
  it('sync TS test 0 of file 1357', () => {
    const payload: TestPayload = { id: '1357_0', value: 157 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_1', value: 161 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_2', value: 105 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_3', value: 418 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_4', value: 450 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1357', () => {
    const payload: TestPayload = { id: '1357_5', value: 420 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1357', () => {
    const payload: TestPayload = { id: '1357_6', value: 461 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_7', value: 480 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_8', value: 389 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1357', () => {
    const payload: TestPayload = { id: '1357_9', value: 450 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1357', async () => {
    const payload: TestPayload = { id: '1357_10', value: 84 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1357', () => {
    const payload: TestPayload = { id: '1357_11', value: 461 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1357', () => {
    const payload: TestPayload = { id: '1357_12', value: 239 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1357', () => {
    const payload: TestPayload = { id: '1357_13', value: 105 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
