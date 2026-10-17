import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 697', () => {
  it('sync TS test 0 of file 697', () => {
    const payload: TestPayload = { id: '697_0', value: 25 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 697', () => {
    const payload: TestPayload = { id: '697_1', value: 473 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 697', async () => {
    const payload: TestPayload = { id: '697_2', value: 32 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 697', async () => {
    const payload: TestPayload = { id: '697_3', value: 257 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 697', () => {
    const payload: TestPayload = { id: '697_4', value: 429 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 697', () => {
    const payload: TestPayload = { id: '697_5', value: 255 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 697', async () => {
    const payload: TestPayload = { id: '697_6', value: 147 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 697', () => {
    const payload: TestPayload = { id: '697_7', value: 107 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 697', async () => {
    const payload: TestPayload = { id: '697_8', value: 493 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 697', () => {
    const payload: TestPayload = { id: '697_9', value: 7 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 697', async () => {
    const payload: TestPayload = { id: '697_10', value: 180 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 697', () => {
    const payload: TestPayload = { id: '697_11', value: 435 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 697', () => {
    const payload: TestPayload = { id: '697_12', value: 262 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
