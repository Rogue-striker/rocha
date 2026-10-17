import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 804', () => {
  it('sync TS test 0 of file 804', () => {
    const payload: TestPayload = { id: '804_0', value: 423 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 804', () => {
    const payload: TestPayload = { id: '804_1', value: 15 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 804', async () => {
    const payload: TestPayload = { id: '804_2', value: 0 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 804', () => {
    const payload: TestPayload = { id: '804_3', value: 417 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 804', () => {
    const payload: TestPayload = { id: '804_4', value: 476 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 804', async () => {
    const payload: TestPayload = { id: '804_5', value: 346 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 804', async () => {
    const payload: TestPayload = { id: '804_6', value: 428 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 804', () => {
    const payload: TestPayload = { id: '804_7', value: 194 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 804', () => {
    const payload: TestPayload = { id: '804_8', value: 222 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 804', () => {
    const payload: TestPayload = { id: '804_9', value: 441 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 804', async () => {
    const payload: TestPayload = { id: '804_10', value: 254 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 804', async () => {
    const payload: TestPayload = { id: '804_11', value: 443 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 804', async () => {
    const payload: TestPayload = { id: '804_12', value: 326 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
