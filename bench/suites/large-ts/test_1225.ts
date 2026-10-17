import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1225', () => {
  it('sync TS test 0 of file 1225', () => {
    const payload: TestPayload = { id: '1225_0', value: 235 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1225', async () => {
    const payload: TestPayload = { id: '1225_1', value: 153 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1225', () => {
    const payload: TestPayload = { id: '1225_2', value: 286 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1225', async () => {
    const payload: TestPayload = { id: '1225_3', value: 7 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1225', () => {
    const payload: TestPayload = { id: '1225_4', value: 3 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1225', () => {
    const payload: TestPayload = { id: '1225_5', value: 84 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1225', () => {
    const payload: TestPayload = { id: '1225_6', value: 89 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1225', async () => {
    const payload: TestPayload = { id: '1225_7', value: 498 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1225', () => {
    const payload: TestPayload = { id: '1225_8', value: 462 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1225', () => {
    const payload: TestPayload = { id: '1225_9', value: 374 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1225', () => {
    const payload: TestPayload = { id: '1225_10', value: 365 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1225', () => {
    const payload: TestPayload = { id: '1225_11', value: 491 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1225', async () => {
    const payload: TestPayload = { id: '1225_12', value: 229 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1225', () => {
    const payload: TestPayload = { id: '1225_13', value: 41 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
