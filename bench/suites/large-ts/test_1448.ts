import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1448', () => {
  it('sync TS test 0 of file 1448', () => {
    const payload: TestPayload = { id: '1448_0', value: 280 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_1', value: 493 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1448', () => {
    const payload: TestPayload = { id: '1448_2', value: 436 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_3', value: 2 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1448', () => {
    const payload: TestPayload = { id: '1448_4', value: 480 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_5', value: 296 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1448', () => {
    const payload: TestPayload = { id: '1448_6', value: 23 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1448', () => {
    const payload: TestPayload = { id: '1448_7', value: 79 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1448', () => {
    const payload: TestPayload = { id: '1448_8', value: 178 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_9', value: 69 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_10', value: 108 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_11', value: 239 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1448', () => {
    const payload: TestPayload = { id: '1448_12', value: 426 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1448', async () => {
    const payload: TestPayload = { id: '1448_13', value: 329 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
