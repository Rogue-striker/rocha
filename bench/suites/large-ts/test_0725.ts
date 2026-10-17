import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 725', () => {
  it('async TS test 0 of file 725', async () => {
    const payload: TestPayload = { id: '725_0', value: 201 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 725', () => {
    const payload: TestPayload = { id: '725_1', value: 227 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 725', async () => {
    const payload: TestPayload = { id: '725_2', value: 409 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 725', async () => {
    const payload: TestPayload = { id: '725_3', value: 367 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 725', async () => {
    const payload: TestPayload = { id: '725_4', value: 426 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 725', () => {
    const payload: TestPayload = { id: '725_5', value: 415 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 725', async () => {
    const payload: TestPayload = { id: '725_6', value: 118 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 725', () => {
    const payload: TestPayload = { id: '725_7', value: 324 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 725', () => {
    const payload: TestPayload = { id: '725_8', value: 54 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 725', async () => {
    const payload: TestPayload = { id: '725_9', value: 34 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 725', async () => {
    const payload: TestPayload = { id: '725_10', value: 236 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 725', () => {
    const payload: TestPayload = { id: '725_11', value: 362 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 725', async () => {
    const payload: TestPayload = { id: '725_12', value: 93 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
