import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 262', () => {
  it('sync TS test 0 of file 262', () => {
    const payload: TestPayload = { id: '262_0', value: 227 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 262', () => {
    const payload: TestPayload = { id: '262_1', value: 359 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 262', async () => {
    const payload: TestPayload = { id: '262_2', value: 284 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 262', () => {
    const payload: TestPayload = { id: '262_3', value: 263 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 262', () => {
    const payload: TestPayload = { id: '262_4', value: 377 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 262', async () => {
    const payload: TestPayload = { id: '262_5', value: 20 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 262', () => {
    const payload: TestPayload = { id: '262_6', value: 229 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 262', async () => {
    const payload: TestPayload = { id: '262_7', value: 263 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 262', async () => {
    const payload: TestPayload = { id: '262_8', value: 423 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 262', () => {
    const payload: TestPayload = { id: '262_9', value: 460 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 262', async () => {
    const payload: TestPayload = { id: '262_10', value: 300 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 262', async () => {
    const payload: TestPayload = { id: '262_11', value: 307 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 262', () => {
    const payload: TestPayload = { id: '262_12', value: 162 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
