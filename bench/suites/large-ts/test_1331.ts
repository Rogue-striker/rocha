import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1331', () => {
  it('sync TS test 0 of file 1331', () => {
    const payload: TestPayload = { id: '1331_0', value: 294 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_1', value: 270 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_2', value: 320 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_3', value: 339 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1331', () => {
    const payload: TestPayload = { id: '1331_4', value: 280 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1331', () => {
    const payload: TestPayload = { id: '1331_5', value: 496 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1331', () => {
    const payload: TestPayload = { id: '1331_6', value: 377 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_7', value: 395 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_8', value: 40 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1331', () => {
    const payload: TestPayload = { id: '1331_9', value: 81 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_10', value: 288 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_11', value: 176 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1331', () => {
    const payload: TestPayload = { id: '1331_12', value: 391 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1331', async () => {
    const payload: TestPayload = { id: '1331_13', value: 309 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
