import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1364', () => {
  it('async TS test 0 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_0', value: 91 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_1', value: 371 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1364', () => {
    const payload: TestPayload = { id: '1364_2', value: 358 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1364', () => {
    const payload: TestPayload = { id: '1364_3', value: 494 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_4', value: 18 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1364', () => {
    const payload: TestPayload = { id: '1364_5', value: 483 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1364', () => {
    const payload: TestPayload = { id: '1364_6', value: 285 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1364', () => {
    const payload: TestPayload = { id: '1364_7', value: 415 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1364', () => {
    const payload: TestPayload = { id: '1364_8', value: 193 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_9', value: 217 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_10', value: 272 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_11', value: 53 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1364', () => {
    const payload: TestPayload = { id: '1364_12', value: 121 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1364', async () => {
    const payload: TestPayload = { id: '1364_13', value: 213 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
