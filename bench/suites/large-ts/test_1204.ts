import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1204', () => {
  it('async TS test 0 of file 1204', async () => {
    const payload: TestPayload = { id: '1204_0', value: 490 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1204', () => {
    const payload: TestPayload = { id: '1204_1', value: 7 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1204', () => {
    const payload: TestPayload = { id: '1204_2', value: 250 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1204', async () => {
    const payload: TestPayload = { id: '1204_3', value: 15 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1204', () => {
    const payload: TestPayload = { id: '1204_4', value: 383 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1204', () => {
    const payload: TestPayload = { id: '1204_5', value: 255 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1204', () => {
    const payload: TestPayload = { id: '1204_6', value: 369 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1204', () => {
    const payload: TestPayload = { id: '1204_7', value: 470 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1204', async () => {
    const payload: TestPayload = { id: '1204_8', value: 467 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1204', async () => {
    const payload: TestPayload = { id: '1204_9', value: 174 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1204', async () => {
    const payload: TestPayload = { id: '1204_10', value: 421 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1204', async () => {
    const payload: TestPayload = { id: '1204_11', value: 59 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1204', () => {
    const payload: TestPayload = { id: '1204_12', value: 484 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1204', () => {
    const payload: TestPayload = { id: '1204_13', value: 193 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
