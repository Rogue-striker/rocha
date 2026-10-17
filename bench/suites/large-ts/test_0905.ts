import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 905', () => {
  it('sync TS test 0 of file 905', () => {
    const payload: TestPayload = { id: '905_0', value: 147 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 905', () => {
    const payload: TestPayload = { id: '905_1', value: 251 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 905', () => {
    const payload: TestPayload = { id: '905_2', value: 40 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 905', async () => {
    const payload: TestPayload = { id: '905_3', value: 352 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 905', async () => {
    const payload: TestPayload = { id: '905_4', value: 296 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 905', () => {
    const payload: TestPayload = { id: '905_5', value: 332 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 905', () => {
    const payload: TestPayload = { id: '905_6', value: 185 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 905', () => {
    const payload: TestPayload = { id: '905_7', value: 269 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 905', async () => {
    const payload: TestPayload = { id: '905_8', value: 90 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 905', async () => {
    const payload: TestPayload = { id: '905_9', value: 409 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 905', async () => {
    const payload: TestPayload = { id: '905_10', value: 222 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 905', async () => {
    const payload: TestPayload = { id: '905_11', value: 422 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 905', async () => {
    const payload: TestPayload = { id: '905_12', value: 271 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
