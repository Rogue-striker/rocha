import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 740', () => {
  it('sync TS test 0 of file 740', () => {
    const payload: TestPayload = { id: '740_0', value: 399 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 740', () => {
    const payload: TestPayload = { id: '740_1', value: 272 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 740', async () => {
    const payload: TestPayload = { id: '740_2', value: 437 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 740', async () => {
    const payload: TestPayload = { id: '740_3', value: 431 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 740', async () => {
    const payload: TestPayload = { id: '740_4', value: 262 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 740', () => {
    const payload: TestPayload = { id: '740_5', value: 403 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 740', () => {
    const payload: TestPayload = { id: '740_6', value: 140 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 740', () => {
    const payload: TestPayload = { id: '740_7', value: 344 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 740', async () => {
    const payload: TestPayload = { id: '740_8', value: 322 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 740', () => {
    const payload: TestPayload = { id: '740_9', value: 119 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 740', () => {
    const payload: TestPayload = { id: '740_10', value: 94 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 740', async () => {
    const payload: TestPayload = { id: '740_11', value: 266 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 740', () => {
    const payload: TestPayload = { id: '740_12', value: 128 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
