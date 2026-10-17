import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 584', () => {
  it('async TS test 0 of file 584', async () => {
    const payload: TestPayload = { id: '584_0', value: 201 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 584', () => {
    const payload: TestPayload = { id: '584_1', value: 148 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 584', async () => {
    const payload: TestPayload = { id: '584_2', value: 8 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 584', async () => {
    const payload: TestPayload = { id: '584_3', value: 363 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 584', () => {
    const payload: TestPayload = { id: '584_4', value: 415 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 584', () => {
    const payload: TestPayload = { id: '584_5', value: 470 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 584', async () => {
    const payload: TestPayload = { id: '584_6', value: 225 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 584', () => {
    const payload: TestPayload = { id: '584_7', value: 362 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 584', () => {
    const payload: TestPayload = { id: '584_8', value: 324 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 584', () => {
    const payload: TestPayload = { id: '584_9', value: 316 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 584', async () => {
    const payload: TestPayload = { id: '584_10', value: 369 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 584', () => {
    const payload: TestPayload = { id: '584_11', value: 57 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 584', () => {
    const payload: TestPayload = { id: '584_12', value: 414 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
