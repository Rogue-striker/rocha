import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 125', () => {
  it('sync TS test 0 of file 125', () => {
    const payload: TestPayload = { id: '125_0', value: 464 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 125', () => {
    const payload: TestPayload = { id: '125_1', value: 421 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 125', async () => {
    const payload: TestPayload = { id: '125_2', value: 150 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 125', () => {
    const payload: TestPayload = { id: '125_3', value: 93 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 125', () => {
    const payload: TestPayload = { id: '125_4', value: 300 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 125', () => {
    const payload: TestPayload = { id: '125_5', value: 121 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 125', async () => {
    const payload: TestPayload = { id: '125_6', value: 447 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 125', async () => {
    const payload: TestPayload = { id: '125_7', value: 124 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 125', () => {
    const payload: TestPayload = { id: '125_8', value: 391 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 125', async () => {
    const payload: TestPayload = { id: '125_9', value: 298 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 125', async () => {
    const payload: TestPayload = { id: '125_10', value: 328 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 125', async () => {
    const payload: TestPayload = { id: '125_11', value: 304 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 125', async () => {
    const payload: TestPayload = { id: '125_12', value: 301 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
