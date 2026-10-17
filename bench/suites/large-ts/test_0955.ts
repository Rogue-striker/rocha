import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 955', () => {
  it('sync TS test 0 of file 955', () => {
    const payload: TestPayload = { id: '955_0', value: 380 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 955', async () => {
    const payload: TestPayload = { id: '955_1', value: 467 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 955', () => {
    const payload: TestPayload = { id: '955_2', value: 139 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 955', () => {
    const payload: TestPayload = { id: '955_3', value: 247 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 955', async () => {
    const payload: TestPayload = { id: '955_4', value: 467 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 955', async () => {
    const payload: TestPayload = { id: '955_5', value: 98 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 955', async () => {
    const payload: TestPayload = { id: '955_6', value: 60 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 955', () => {
    const payload: TestPayload = { id: '955_7', value: 134 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 955', () => {
    const payload: TestPayload = { id: '955_8', value: 441 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 955', () => {
    const payload: TestPayload = { id: '955_9', value: 128 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 955', () => {
    const payload: TestPayload = { id: '955_10', value: 301 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 955', async () => {
    const payload: TestPayload = { id: '955_11', value: 73 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 955', async () => {
    const payload: TestPayload = { id: '955_12', value: 237 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
