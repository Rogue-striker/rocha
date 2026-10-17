import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 475', () => {
  it('async TS test 0 of file 475', async () => {
    const payload: TestPayload = { id: '475_0', value: 19 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 475', () => {
    const payload: TestPayload = { id: '475_1', value: 347 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 475', () => {
    const payload: TestPayload = { id: '475_2', value: 94 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 475', async () => {
    const payload: TestPayload = { id: '475_3', value: 379 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 475', () => {
    const payload: TestPayload = { id: '475_4', value: 438 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 475', async () => {
    const payload: TestPayload = { id: '475_5', value: 208 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 475', async () => {
    const payload: TestPayload = { id: '475_6', value: 204 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 475', () => {
    const payload: TestPayload = { id: '475_7', value: 382 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 475', () => {
    const payload: TestPayload = { id: '475_8', value: 179 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 475', () => {
    const payload: TestPayload = { id: '475_9', value: 117 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 475', async () => {
    const payload: TestPayload = { id: '475_10', value: 37 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 475', () => {
    const payload: TestPayload = { id: '475_11', value: 87 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 475', () => {
    const payload: TestPayload = { id: '475_12', value: 391 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
