import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 822', () => {
  it('sync TS test 0 of file 822', () => {
    const payload: TestPayload = { id: '822_0', value: 224 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 822', async () => {
    const payload: TestPayload = { id: '822_1', value: 0 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 822', () => {
    const payload: TestPayload = { id: '822_2', value: 320 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 822', async () => {
    const payload: TestPayload = { id: '822_3', value: 467 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 822', async () => {
    const payload: TestPayload = { id: '822_4', value: 456 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 822', async () => {
    const payload: TestPayload = { id: '822_5', value: 293 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 822', () => {
    const payload: TestPayload = { id: '822_6', value: 290 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 822', () => {
    const payload: TestPayload = { id: '822_7', value: 330 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 822', async () => {
    const payload: TestPayload = { id: '822_8', value: 491 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 822', () => {
    const payload: TestPayload = { id: '822_9', value: 286 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 822', async () => {
    const payload: TestPayload = { id: '822_10', value: 351 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 822', () => {
    const payload: TestPayload = { id: '822_11', value: 58 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 822', () => {
    const payload: TestPayload = { id: '822_12', value: 174 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
