import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1148', () => {
  it('sync TS test 0 of file 1148', () => {
    const payload: TestPayload = { id: '1148_0', value: 180 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1148', () => {
    const payload: TestPayload = { id: '1148_1', value: 141 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1148', async () => {
    const payload: TestPayload = { id: '1148_2', value: 295 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1148', async () => {
    const payload: TestPayload = { id: '1148_3', value: 498 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1148', async () => {
    const payload: TestPayload = { id: '1148_4', value: 87 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1148', () => {
    const payload: TestPayload = { id: '1148_5', value: 308 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1148', () => {
    const payload: TestPayload = { id: '1148_6', value: 276 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1148', async () => {
    const payload: TestPayload = { id: '1148_7', value: 311 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1148', async () => {
    const payload: TestPayload = { id: '1148_8', value: 364 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1148', () => {
    const payload: TestPayload = { id: '1148_9', value: 415 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1148', () => {
    const payload: TestPayload = { id: '1148_10', value: 193 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1148', () => {
    const payload: TestPayload = { id: '1148_11', value: 265 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1148', () => {
    const payload: TestPayload = { id: '1148_12', value: 402 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1148', async () => {
    const payload: TestPayload = { id: '1148_13', value: 407 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
