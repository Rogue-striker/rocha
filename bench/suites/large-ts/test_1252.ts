import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1252', () => {
  it('sync TS test 0 of file 1252', () => {
    const payload: TestPayload = { id: '1252_0', value: 340 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_1', value: 136 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_2', value: 57 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_3', value: 10 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1252', () => {
    const payload: TestPayload = { id: '1252_4', value: 266 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_5', value: 124 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_6', value: 216 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_7', value: 30 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1252', () => {
    const payload: TestPayload = { id: '1252_8', value: 128 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_9', value: 185 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1252', () => {
    const payload: TestPayload = { id: '1252_10', value: 176 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1252', () => {
    const payload: TestPayload = { id: '1252_11', value: 277 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1252', () => {
    const payload: TestPayload = { id: '1252_12', value: 312 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1252', async () => {
    const payload: TestPayload = { id: '1252_13', value: 145 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
