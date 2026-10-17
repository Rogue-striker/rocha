import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1102', () => {
  it('async TS test 0 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_0', value: 486 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1102', () => {
    const payload: TestPayload = { id: '1102_1', value: 408 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1102', () => {
    const payload: TestPayload = { id: '1102_2', value: 277 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_3', value: 310 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1102', () => {
    const payload: TestPayload = { id: '1102_4', value: 156 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_5', value: 362 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_6', value: 282 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_7', value: 342 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_8', value: 93 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_9', value: 344 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_10', value: 262 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1102', async () => {
    const payload: TestPayload = { id: '1102_11', value: 55 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1102', () => {
    const payload: TestPayload = { id: '1102_12', value: 160 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1102', () => {
    const payload: TestPayload = { id: '1102_13', value: 178 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
