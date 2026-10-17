import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 937', () => {
  it('async TS test 0 of file 937', async () => {
    const payload: TestPayload = { id: '937_0', value: 393 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 937', async () => {
    const payload: TestPayload = { id: '937_1', value: 452 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 937', () => {
    const payload: TestPayload = { id: '937_2', value: 234 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 937', async () => {
    const payload: TestPayload = { id: '937_3', value: 422 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 937', async () => {
    const payload: TestPayload = { id: '937_4', value: 288 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 937', async () => {
    const payload: TestPayload = { id: '937_5', value: 169 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 937', async () => {
    const payload: TestPayload = { id: '937_6', value: 190 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 937', () => {
    const payload: TestPayload = { id: '937_7', value: 409 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 937', () => {
    const payload: TestPayload = { id: '937_8', value: 435 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 937', async () => {
    const payload: TestPayload = { id: '937_9', value: 484 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 937', () => {
    const payload: TestPayload = { id: '937_10', value: 440 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 937', () => {
    const payload: TestPayload = { id: '937_11', value: 110 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 937', async () => {
    const payload: TestPayload = { id: '937_12', value: 194 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
