import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1082', () => {
  it('sync TS test 0 of file 1082', () => {
    const payload: TestPayload = { id: '1082_0', value: 144 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1082', () => {
    const payload: TestPayload = { id: '1082_1', value: 438 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1082', () => {
    const payload: TestPayload = { id: '1082_2', value: 381 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1082', () => {
    const payload: TestPayload = { id: '1082_3', value: 231 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1082', () => {
    const payload: TestPayload = { id: '1082_4', value: 98 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_5', value: 112 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_6', value: 49 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_7', value: 192 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_8', value: 90 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_9', value: 350 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1082', () => {
    const payload: TestPayload = { id: '1082_10', value: 93 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_11', value: 317 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_12', value: 163 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1082', async () => {
    const payload: TestPayload = { id: '1082_13', value: 414 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
