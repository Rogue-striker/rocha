import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1408', () => {
  it('async TS test 0 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_0', value: 412 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_1', value: 187 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_2', value: 393 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_3', value: 24 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1408', () => {
    const payload: TestPayload = { id: '1408_4', value: 348 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_5', value: 367 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1408', () => {
    const payload: TestPayload = { id: '1408_6', value: 53 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_7', value: 471 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1408', () => {
    const payload: TestPayload = { id: '1408_8', value: 3 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1408', () => {
    const payload: TestPayload = { id: '1408_9', value: 365 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1408', () => {
    const payload: TestPayload = { id: '1408_10', value: 19 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_11', value: 125 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_12', value: 329 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1408', async () => {
    const payload: TestPayload = { id: '1408_13', value: 438 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
