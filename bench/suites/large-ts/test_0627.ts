import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 627', () => {
  it('async TS test 0 of file 627', async () => {
    const payload: TestPayload = { id: '627_0', value: 213 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 627', () => {
    const payload: TestPayload = { id: '627_1', value: 265 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 627', () => {
    const payload: TestPayload = { id: '627_2', value: 420 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 627', () => {
    const payload: TestPayload = { id: '627_3', value: 489 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 627', () => {
    const payload: TestPayload = { id: '627_4', value: 339 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 627', async () => {
    const payload: TestPayload = { id: '627_5', value: 61 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 627', async () => {
    const payload: TestPayload = { id: '627_6', value: 419 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 627', async () => {
    const payload: TestPayload = { id: '627_7', value: 197 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 627', async () => {
    const payload: TestPayload = { id: '627_8', value: 378 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 627', () => {
    const payload: TestPayload = { id: '627_9', value: 49 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 627', async () => {
    const payload: TestPayload = { id: '627_10', value: 381 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 627', async () => {
    const payload: TestPayload = { id: '627_11', value: 299 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 627', () => {
    const payload: TestPayload = { id: '627_12', value: 119 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
