import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1255', () => {
  it('async TS test 0 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_0', value: 261 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_1', value: 291 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_2', value: 93 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_3', value: 246 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_4', value: 178 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1255', () => {
    const payload: TestPayload = { id: '1255_5', value: 185 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_6', value: 117 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_7', value: 132 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_8', value: 10 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_9', value: 34 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1255', async () => {
    const payload: TestPayload = { id: '1255_10', value: 379 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1255', () => {
    const payload: TestPayload = { id: '1255_11', value: 313 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1255', () => {
    const payload: TestPayload = { id: '1255_12', value: 84 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1255', () => {
    const payload: TestPayload = { id: '1255_13', value: 55 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
