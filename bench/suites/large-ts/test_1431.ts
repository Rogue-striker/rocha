import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1431', () => {
  it('async TS test 0 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_0', value: 449 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1431', () => {
    const payload: TestPayload = { id: '1431_1', value: 158 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_2', value: 58 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_3', value: 458 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_4', value: 300 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1431', () => {
    const payload: TestPayload = { id: '1431_5', value: 226 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1431', () => {
    const payload: TestPayload = { id: '1431_6', value: 441 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_7', value: 326 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_8', value: 343 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_9', value: 182 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_10', value: 291 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_11', value: 412 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1431', async () => {
    const payload: TestPayload = { id: '1431_12', value: 330 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1431', () => {
    const payload: TestPayload = { id: '1431_13', value: 249 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
