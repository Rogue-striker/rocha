import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1037', () => {
  it('async TS test 0 of file 1037', async () => {
    const payload: TestPayload = { id: '1037_0', value: 373 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1037', () => {
    const payload: TestPayload = { id: '1037_1', value: 395 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1037', async () => {
    const payload: TestPayload = { id: '1037_2', value: 416 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1037', () => {
    const payload: TestPayload = { id: '1037_3', value: 205 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1037', async () => {
    const payload: TestPayload = { id: '1037_4', value: 454 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1037', () => {
    const payload: TestPayload = { id: '1037_5', value: 79 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1037', () => {
    const payload: TestPayload = { id: '1037_6', value: 41 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1037', () => {
    const payload: TestPayload = { id: '1037_7', value: 320 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1037', async () => {
    const payload: TestPayload = { id: '1037_8', value: 420 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1037', () => {
    const payload: TestPayload = { id: '1037_9', value: 349 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1037', () => {
    const payload: TestPayload = { id: '1037_10', value: 9 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1037', async () => {
    const payload: TestPayload = { id: '1037_11', value: 282 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1037', async () => {
    const payload: TestPayload = { id: '1037_12', value: 275 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1037', () => {
    const payload: TestPayload = { id: '1037_13', value: 6 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
