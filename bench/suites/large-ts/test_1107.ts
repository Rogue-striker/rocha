import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1107', () => {
  it('async TS test 0 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_0', value: 232 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_1', value: 292 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_2', value: 85 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1107', () => {
    const payload: TestPayload = { id: '1107_3', value: 248 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1107', () => {
    const payload: TestPayload = { id: '1107_4', value: 381 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1107', () => {
    const payload: TestPayload = { id: '1107_5', value: 130 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_6', value: 353 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1107', () => {
    const payload: TestPayload = { id: '1107_7', value: 146 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_8', value: 205 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_9', value: 484 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_10', value: 313 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1107', async () => {
    const payload: TestPayload = { id: '1107_11', value: 252 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1107', () => {
    const payload: TestPayload = { id: '1107_12', value: 209 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1107', () => {
    const payload: TestPayload = { id: '1107_13', value: 385 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
