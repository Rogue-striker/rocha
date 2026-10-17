import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1498', () => {
  it('sync TS test 0 of file 1498', () => {
    const payload: TestPayload = { id: '1498_0', value: 266 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1498', () => {
    const payload: TestPayload = { id: '1498_1', value: 270 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1498', async () => {
    const payload: TestPayload = { id: '1498_2', value: 343 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1498', () => {
    const payload: TestPayload = { id: '1498_3', value: 270 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1498', async () => {
    const payload: TestPayload = { id: '1498_4', value: 431 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1498', () => {
    const payload: TestPayload = { id: '1498_5', value: 330 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1498', () => {
    const payload: TestPayload = { id: '1498_6', value: 401 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1498', () => {
    const payload: TestPayload = { id: '1498_7', value: 212 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1498', () => {
    const payload: TestPayload = { id: '1498_8', value: 113 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1498', async () => {
    const payload: TestPayload = { id: '1498_9', value: 386 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1498', () => {
    const payload: TestPayload = { id: '1498_10', value: 309 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1498', () => {
    const payload: TestPayload = { id: '1498_11', value: 198 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1498', async () => {
    const payload: TestPayload = { id: '1498_12', value: 280 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1498', async () => {
    const payload: TestPayload = { id: '1498_13', value: 334 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
