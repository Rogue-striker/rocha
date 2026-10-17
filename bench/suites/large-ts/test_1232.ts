import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1232', () => {
  it('async TS test 0 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_0', value: 270 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_1', value: 268 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_2', value: 332 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1232', () => {
    const payload: TestPayload = { id: '1232_3', value: 415 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_4', value: 245 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1232', () => {
    const payload: TestPayload = { id: '1232_5', value: 217 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_6', value: 288 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1232', () => {
    const payload: TestPayload = { id: '1232_7', value: 144 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1232', () => {
    const payload: TestPayload = { id: '1232_8', value: 83 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1232', () => {
    const payload: TestPayload = { id: '1232_9', value: 5 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_10', value: 444 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1232', () => {
    const payload: TestPayload = { id: '1232_11', value: 63 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_12', value: 207 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1232', async () => {
    const payload: TestPayload = { id: '1232_13', value: 29 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
