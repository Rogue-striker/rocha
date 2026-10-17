import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1262', () => {
  it('sync TS test 0 of file 1262', () => {
    const payload: TestPayload = { id: '1262_0', value: 312 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_1', value: 6 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1262', () => {
    const payload: TestPayload = { id: '1262_2', value: 50 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1262', () => {
    const payload: TestPayload = { id: '1262_3', value: 148 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1262', () => {
    const payload: TestPayload = { id: '1262_4', value: 275 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_5', value: 272 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_6', value: 350 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1262', () => {
    const payload: TestPayload = { id: '1262_7', value: 395 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1262', () => {
    const payload: TestPayload = { id: '1262_8', value: 258 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_9', value: 4 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_10', value: 233 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_11', value: 30 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1262', async () => {
    const payload: TestPayload = { id: '1262_12', value: 28 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1262', () => {
    const payload: TestPayload = { id: '1262_13', value: 448 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
