import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1152', () => {
  it('async TS test 0 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_0', value: 376 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_1', value: 184 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1152', () => {
    const payload: TestPayload = { id: '1152_2', value: 246 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_3', value: 110 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1152', () => {
    const payload: TestPayload = { id: '1152_4', value: 462 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_5', value: 382 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_6', value: 151 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_7', value: 324 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1152', () => {
    const payload: TestPayload = { id: '1152_8', value: 297 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_9', value: 470 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1152', () => {
    const payload: TestPayload = { id: '1152_10', value: 50 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_11', value: 260 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1152', async () => {
    const payload: TestPayload = { id: '1152_12', value: 307 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1152', () => {
    const payload: TestPayload = { id: '1152_13', value: 290 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
