import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1427', () => {
  it('sync TS test 0 of file 1427', () => {
    const payload: TestPayload = { id: '1427_0', value: 250 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_1', value: 367 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_2', value: 228 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1427', () => {
    const payload: TestPayload = { id: '1427_3', value: 281 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_4', value: 493 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_5', value: 100 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_6', value: 467 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1427', () => {
    const payload: TestPayload = { id: '1427_7', value: 322 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_8', value: 164 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_9', value: 250 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1427', () => {
    const payload: TestPayload = { id: '1427_10', value: 493 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1427', () => {
    const payload: TestPayload = { id: '1427_11', value: 92 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1427', async () => {
    const payload: TestPayload = { id: '1427_12', value: 188 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1427', () => {
    const payload: TestPayload = { id: '1427_13', value: 176 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
