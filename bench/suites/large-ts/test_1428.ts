import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1428', () => {
  it('sync TS test 0 of file 1428', () => {
    const payload: TestPayload = { id: '1428_0', value: 40 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1428', () => {
    const payload: TestPayload = { id: '1428_1', value: 225 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1428', () => {
    const payload: TestPayload = { id: '1428_2', value: 64 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1428', () => {
    const payload: TestPayload = { id: '1428_3', value: 218 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1428', async () => {
    const payload: TestPayload = { id: '1428_4', value: 2 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1428', () => {
    const payload: TestPayload = { id: '1428_5', value: 441 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1428', async () => {
    const payload: TestPayload = { id: '1428_6', value: 455 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1428', async () => {
    const payload: TestPayload = { id: '1428_7', value: 49 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1428', async () => {
    const payload: TestPayload = { id: '1428_8', value: 371 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1428', () => {
    const payload: TestPayload = { id: '1428_9', value: 332 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1428', () => {
    const payload: TestPayload = { id: '1428_10', value: 298 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1428', () => {
    const payload: TestPayload = { id: '1428_11', value: 435 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1428', () => {
    const payload: TestPayload = { id: '1428_12', value: 139 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1428', () => {
    const payload: TestPayload = { id: '1428_13', value: 184 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
