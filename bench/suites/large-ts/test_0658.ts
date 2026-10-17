import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 658', () => {
  it('sync TS test 0 of file 658', () => {
    const payload: TestPayload = { id: '658_0', value: 204 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 658', () => {
    const payload: TestPayload = { id: '658_1', value: 366 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 658', () => {
    const payload: TestPayload = { id: '658_2', value: 351 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 658', async () => {
    const payload: TestPayload = { id: '658_3', value: 393 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 658', () => {
    const payload: TestPayload = { id: '658_4', value: 422 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 658', () => {
    const payload: TestPayload = { id: '658_5', value: 241 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 658', () => {
    const payload: TestPayload = { id: '658_6', value: 330 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 658', async () => {
    const payload: TestPayload = { id: '658_7', value: 202 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 658', () => {
    const payload: TestPayload = { id: '658_8', value: 292 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 658', () => {
    const payload: TestPayload = { id: '658_9', value: 212 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 658', async () => {
    const payload: TestPayload = { id: '658_10', value: 48 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 658', async () => {
    const payload: TestPayload = { id: '658_11', value: 232 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 658', async () => {
    const payload: TestPayload = { id: '658_12', value: 465 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
