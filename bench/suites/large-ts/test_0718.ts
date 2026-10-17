import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 718', () => {
  it('async TS test 0 of file 718', async () => {
    const payload: TestPayload = { id: '718_0', value: 371 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 718', () => {
    const payload: TestPayload = { id: '718_1', value: 103 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 718', async () => {
    const payload: TestPayload = { id: '718_2', value: 136 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 718', async () => {
    const payload: TestPayload = { id: '718_3', value: 443 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 718', async () => {
    const payload: TestPayload = { id: '718_4', value: 430 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 718', async () => {
    const payload: TestPayload = { id: '718_5', value: 25 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 718', () => {
    const payload: TestPayload = { id: '718_6', value: 174 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 718', () => {
    const payload: TestPayload = { id: '718_7', value: 198 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 718', () => {
    const payload: TestPayload = { id: '718_8', value: 367 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 718', () => {
    const payload: TestPayload = { id: '718_9', value: 135 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 718', () => {
    const payload: TestPayload = { id: '718_10', value: 6 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 718', async () => {
    const payload: TestPayload = { id: '718_11', value: 135 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 718', async () => {
    const payload: TestPayload = { id: '718_12', value: 404 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
