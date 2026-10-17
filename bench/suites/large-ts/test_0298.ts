import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 298', () => {
  it('async TS test 0 of file 298', async () => {
    const payload: TestPayload = { id: '298_0', value: 21 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 298', () => {
    const payload: TestPayload = { id: '298_1', value: 224 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 298', () => {
    const payload: TestPayload = { id: '298_2', value: 153 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 298', () => {
    const payload: TestPayload = { id: '298_3', value: 224 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 298', async () => {
    const payload: TestPayload = { id: '298_4', value: 372 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 298', async () => {
    const payload: TestPayload = { id: '298_5', value: 336 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 298', () => {
    const payload: TestPayload = { id: '298_6', value: 408 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 298', () => {
    const payload: TestPayload = { id: '298_7', value: 465 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 298', async () => {
    const payload: TestPayload = { id: '298_8', value: 125 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 298', async () => {
    const payload: TestPayload = { id: '298_9', value: 3 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 298', async () => {
    const payload: TestPayload = { id: '298_10', value: 223 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 298', async () => {
    const payload: TestPayload = { id: '298_11', value: 232 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 298', () => {
    const payload: TestPayload = { id: '298_12', value: 36 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
