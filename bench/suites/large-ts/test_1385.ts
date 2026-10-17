import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1385', () => {
  it('async TS test 0 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_0', value: 47 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1385', () => {
    const payload: TestPayload = { id: '1385_1', value: 495 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1385', () => {
    const payload: TestPayload = { id: '1385_2', value: 450 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_3', value: 345 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1385', () => {
    const payload: TestPayload = { id: '1385_4', value: 417 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_5', value: 283 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1385', () => {
    const payload: TestPayload = { id: '1385_6', value: 296 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_7', value: 471 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_8', value: 7 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_9', value: 179 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_10', value: 245 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1385', () => {
    const payload: TestPayload = { id: '1385_11', value: 299 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1385', () => {
    const payload: TestPayload = { id: '1385_12', value: 298 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1385', async () => {
    const payload: TestPayload = { id: '1385_13', value: 472 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
