import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 638', () => {
  it('async TS test 0 of file 638', async () => {
    const payload: TestPayload = { id: '638_0', value: 393 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 638', () => {
    const payload: TestPayload = { id: '638_1', value: 402 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 638', () => {
    const payload: TestPayload = { id: '638_2', value: 403 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 638', async () => {
    const payload: TestPayload = { id: '638_3', value: 411 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 638', () => {
    const payload: TestPayload = { id: '638_4', value: 453 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 638', () => {
    const payload: TestPayload = { id: '638_5', value: 66 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 638', () => {
    const payload: TestPayload = { id: '638_6', value: 257 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 638', () => {
    const payload: TestPayload = { id: '638_7', value: 47 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 638', async () => {
    const payload: TestPayload = { id: '638_8', value: 260 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 638', () => {
    const payload: TestPayload = { id: '638_9', value: 213 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 638', () => {
    const payload: TestPayload = { id: '638_10', value: 96 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 638', () => {
    const payload: TestPayload = { id: '638_11', value: 16 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 638', () => {
    const payload: TestPayload = { id: '638_12', value: 40 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
