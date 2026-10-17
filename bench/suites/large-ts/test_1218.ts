import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1218', () => {
  it('sync TS test 0 of file 1218', () => {
    const payload: TestPayload = { id: '1218_0', value: 393 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1218', () => {
    const payload: TestPayload = { id: '1218_1', value: 55 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1218', () => {
    const payload: TestPayload = { id: '1218_2', value: 415 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_3', value: 47 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1218', () => {
    const payload: TestPayload = { id: '1218_4', value: 126 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_5', value: 466 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_6', value: 35 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1218', () => {
    const payload: TestPayload = { id: '1218_7', value: 173 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_8', value: 287 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_9', value: 49 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_10', value: 469 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1218', () => {
    const payload: TestPayload = { id: '1218_11', value: 457 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_12', value: 17 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1218', async () => {
    const payload: TestPayload = { id: '1218_13', value: 110 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
