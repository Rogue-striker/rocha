import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 762', () => {
  it('sync TS test 0 of file 762', () => {
    const payload: TestPayload = { id: '762_0', value: 339 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 762', async () => {
    const payload: TestPayload = { id: '762_1', value: 486 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 762', () => {
    const payload: TestPayload = { id: '762_2', value: 163 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 762', () => {
    const payload: TestPayload = { id: '762_3', value: 397 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 762', async () => {
    const payload: TestPayload = { id: '762_4', value: 27 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 762', () => {
    const payload: TestPayload = { id: '762_5', value: 207 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 762', () => {
    const payload: TestPayload = { id: '762_6', value: 332 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 762', async () => {
    const payload: TestPayload = { id: '762_7', value: 133 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 762', async () => {
    const payload: TestPayload = { id: '762_8', value: 12 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 762', async () => {
    const payload: TestPayload = { id: '762_9', value: 246 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 762', async () => {
    const payload: TestPayload = { id: '762_10', value: 492 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 762', async () => {
    const payload: TestPayload = { id: '762_11', value: 293 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 762', async () => {
    const payload: TestPayload = { id: '762_12', value: 62 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
