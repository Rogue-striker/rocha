import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1464', () => {
  it('async TS test 0 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_0', value: 109 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_1', value: 209 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_2', value: 220 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_3', value: 104 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_4', value: 283 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1464', () => {
    const payload: TestPayload = { id: '1464_5', value: 27 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1464', () => {
    const payload: TestPayload = { id: '1464_6', value: 303 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1464', () => {
    const payload: TestPayload = { id: '1464_7', value: 250 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_8', value: 428 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1464', () => {
    const payload: TestPayload = { id: '1464_9', value: 302 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1464', () => {
    const payload: TestPayload = { id: '1464_10', value: 346 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1464', () => {
    const payload: TestPayload = { id: '1464_11', value: 323 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1464', () => {
    const payload: TestPayload = { id: '1464_12', value: 272 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1464', async () => {
    const payload: TestPayload = { id: '1464_13', value: 258 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
