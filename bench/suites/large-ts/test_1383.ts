import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1383', () => {
  it('sync TS test 0 of file 1383', () => {
    const payload: TestPayload = { id: '1383_0', value: 103 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1383', () => {
    const payload: TestPayload = { id: '1383_1', value: 274 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1383', async () => {
    const payload: TestPayload = { id: '1383_2', value: 204 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1383', () => {
    const payload: TestPayload = { id: '1383_3', value: 419 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1383', async () => {
    const payload: TestPayload = { id: '1383_4', value: 136 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1383', async () => {
    const payload: TestPayload = { id: '1383_5', value: 185 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1383', async () => {
    const payload: TestPayload = { id: '1383_6', value: 329 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1383', () => {
    const payload: TestPayload = { id: '1383_7', value: 342 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1383', () => {
    const payload: TestPayload = { id: '1383_8', value: 277 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1383', () => {
    const payload: TestPayload = { id: '1383_9', value: 235 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1383', () => {
    const payload: TestPayload = { id: '1383_10', value: 305 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1383', async () => {
    const payload: TestPayload = { id: '1383_11', value: 311 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1383', () => {
    const payload: TestPayload = { id: '1383_12', value: 327 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1383', async () => {
    const payload: TestPayload = { id: '1383_13', value: 102 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
