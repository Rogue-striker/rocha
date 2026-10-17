import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1228', () => {
  it('async TS test 0 of file 1228', async () => {
    const payload: TestPayload = { id: '1228_0', value: 340 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1228', () => {
    const payload: TestPayload = { id: '1228_1', value: 81 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1228', () => {
    const payload: TestPayload = { id: '1228_2', value: 451 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1228', () => {
    const payload: TestPayload = { id: '1228_3', value: 18 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1228', async () => {
    const payload: TestPayload = { id: '1228_4', value: 402 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1228', async () => {
    const payload: TestPayload = { id: '1228_5', value: 56 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1228', async () => {
    const payload: TestPayload = { id: '1228_6', value: 294 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1228', () => {
    const payload: TestPayload = { id: '1228_7', value: 172 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1228', () => {
    const payload: TestPayload = { id: '1228_8', value: 331 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1228', async () => {
    const payload: TestPayload = { id: '1228_9', value: 38 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1228', () => {
    const payload: TestPayload = { id: '1228_10', value: 17 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1228', () => {
    const payload: TestPayload = { id: '1228_11', value: 138 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1228', () => {
    const payload: TestPayload = { id: '1228_12', value: 403 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1228', async () => {
    const payload: TestPayload = { id: '1228_13', value: 48 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
