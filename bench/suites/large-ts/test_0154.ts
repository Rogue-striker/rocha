import assert from 'node:assert';
import { computeMetric14, type Model14 } from './src/helper_14.ts';
import { computeMetric17 } from './src/helper_17.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 154', () => {
  it('async TS test 0 of file 154', async () => {
    const payload: TestPayload = { id: '154_0', value: 310 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 154', () => {
    const payload: TestPayload = { id: '154_1', value: 44 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 154', () => {
    const payload: TestPayload = { id: '154_2', value: 221 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 154', async () => {
    const payload: TestPayload = { id: '154_3', value: 163 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 154', () => {
    const payload: TestPayload = { id: '154_4', value: 469 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 154', async () => {
    const payload: TestPayload = { id: '154_5', value: 249 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 154', async () => {
    const payload: TestPayload = { id: '154_6', value: 104 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 154', async () => {
    const payload: TestPayload = { id: '154_7', value: 25 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 154', () => {
    const payload: TestPayload = { id: '154_8', value: 241 };
    const res = computeMetric14(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 154', async () => {
    const payload: TestPayload = { id: '154_9', value: 159 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 154', async () => {
    const payload: TestPayload = { id: '154_10', value: 324 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 154', async () => {
    const payload: TestPayload = { id: '154_11', value: 474 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 154', async () => {
    const payload: TestPayload = { id: '154_12', value: 267 };
    const res1 = computeMetric14(payload.value);
    const res2 = computeMetric17(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
