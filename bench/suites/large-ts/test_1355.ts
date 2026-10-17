import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1355', () => {
  it('async TS test 0 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_0', value: 497 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_1', value: 486 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_2', value: 475 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1355', () => {
    const payload: TestPayload = { id: '1355_3', value: 402 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1355', () => {
    const payload: TestPayload = { id: '1355_4', value: 439 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1355', () => {
    const payload: TestPayload = { id: '1355_5', value: 35 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_6', value: 327 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_7', value: 70 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1355', () => {
    const payload: TestPayload = { id: '1355_8', value: 391 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_9', value: 273 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_10', value: 118 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_11', value: 104 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1355', async () => {
    const payload: TestPayload = { id: '1355_12', value: 289 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1355', () => {
    const payload: TestPayload = { id: '1355_13', value: 192 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
