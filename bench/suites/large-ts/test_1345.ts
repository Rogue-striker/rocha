import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1345', () => {
  it('sync TS test 0 of file 1345', () => {
    const payload: TestPayload = { id: '1345_0', value: 55 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_1', value: 71 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1345', () => {
    const payload: TestPayload = { id: '1345_2', value: 478 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1345', () => {
    const payload: TestPayload = { id: '1345_3', value: 354 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1345', () => {
    const payload: TestPayload = { id: '1345_4', value: 153 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1345', () => {
    const payload: TestPayload = { id: '1345_5', value: 310 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_6', value: 475 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_7', value: 422 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_8', value: 419 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_9', value: 116 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1345', () => {
    const payload: TestPayload = { id: '1345_10', value: 149 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_11', value: 296 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_12', value: 11 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1345', async () => {
    const payload: TestPayload = { id: '1345_13', value: 144 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
