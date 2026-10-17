import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1405', () => {
  it('async TS test 0 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_0', value: 373 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1405', () => {
    const payload: TestPayload = { id: '1405_1', value: 336 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_2', value: 122 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_3', value: 312 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_4', value: 498 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_5', value: 151 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_6', value: 309 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1405', () => {
    const payload: TestPayload = { id: '1405_7', value: 236 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_8', value: 482 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_9', value: 193 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_10', value: 274 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1405', () => {
    const payload: TestPayload = { id: '1405_11', value: 137 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1405', async () => {
    const payload: TestPayload = { id: '1405_12', value: 386 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1405', () => {
    const payload: TestPayload = { id: '1405_13', value: 183 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
