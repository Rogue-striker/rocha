import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 952', () => {
  it('async TS test 0 of file 952', async () => {
    const payload: TestPayload = { id: '952_0', value: 289 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 952', async () => {
    const payload: TestPayload = { id: '952_1', value: 397 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 952', async () => {
    const payload: TestPayload = { id: '952_2', value: 12 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 952', async () => {
    const payload: TestPayload = { id: '952_3', value: 52 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 952', () => {
    const payload: TestPayload = { id: '952_4', value: 349 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 952', () => {
    const payload: TestPayload = { id: '952_5', value: 220 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 952', () => {
    const payload: TestPayload = { id: '952_6', value: 164 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 952', () => {
    const payload: TestPayload = { id: '952_7', value: 132 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 952', () => {
    const payload: TestPayload = { id: '952_8', value: 214 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 952', async () => {
    const payload: TestPayload = { id: '952_9', value: 180 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 952', async () => {
    const payload: TestPayload = { id: '952_10', value: 110 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 952', async () => {
    const payload: TestPayload = { id: '952_11', value: 159 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 952', async () => {
    const payload: TestPayload = { id: '952_12', value: 88 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
