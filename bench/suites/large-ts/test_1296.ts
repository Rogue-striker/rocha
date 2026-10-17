import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1296', () => {
  it('async TS test 0 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_0', value: 411 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_1', value: 331 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1296', () => {
    const payload: TestPayload = { id: '1296_2', value: 387 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_3', value: 186 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1296', () => {
    const payload: TestPayload = { id: '1296_4', value: 497 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_5', value: 32 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1296', () => {
    const payload: TestPayload = { id: '1296_6', value: 391 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_7', value: 208 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1296', () => {
    const payload: TestPayload = { id: '1296_8', value: 0 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1296', () => {
    const payload: TestPayload = { id: '1296_9', value: 439 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1296', () => {
    const payload: TestPayload = { id: '1296_10', value: 440 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1296', () => {
    const payload: TestPayload = { id: '1296_11', value: 284 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_12', value: 185 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1296', async () => {
    const payload: TestPayload = { id: '1296_13', value: 154 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
