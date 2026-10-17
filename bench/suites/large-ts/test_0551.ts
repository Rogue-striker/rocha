import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 551', () => {
  it('sync TS test 0 of file 551', () => {
    const payload: TestPayload = { id: '551_0', value: 296 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 551', () => {
    const payload: TestPayload = { id: '551_1', value: 483 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 551', () => {
    const payload: TestPayload = { id: '551_2', value: 187 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 551', async () => {
    const payload: TestPayload = { id: '551_3', value: 37 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 551', () => {
    const payload: TestPayload = { id: '551_4', value: 140 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 551', async () => {
    const payload: TestPayload = { id: '551_5', value: 268 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 551', () => {
    const payload: TestPayload = { id: '551_6', value: 361 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 551', () => {
    const payload: TestPayload = { id: '551_7', value: 161 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 551', async () => {
    const payload: TestPayload = { id: '551_8', value: 217 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 551', async () => {
    const payload: TestPayload = { id: '551_9', value: 437 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 551', async () => {
    const payload: TestPayload = { id: '551_10', value: 65 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 551', async () => {
    const payload: TestPayload = { id: '551_11', value: 276 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 551', async () => {
    const payload: TestPayload = { id: '551_12', value: 279 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
