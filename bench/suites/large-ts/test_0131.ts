import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 131', () => {
  it('sync TS test 0 of file 131', () => {
    const payload: TestPayload = { id: '131_0', value: 239 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 131', async () => {
    const payload: TestPayload = { id: '131_1', value: 74 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 131', async () => {
    const payload: TestPayload = { id: '131_2', value: 191 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 131', () => {
    const payload: TestPayload = { id: '131_3', value: 103 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 131', () => {
    const payload: TestPayload = { id: '131_4', value: 459 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 131', () => {
    const payload: TestPayload = { id: '131_5', value: 217 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 131', async () => {
    const payload: TestPayload = { id: '131_6', value: 244 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 131', async () => {
    const payload: TestPayload = { id: '131_7', value: 353 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 131', async () => {
    const payload: TestPayload = { id: '131_8', value: 450 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 131', async () => {
    const payload: TestPayload = { id: '131_9', value: 183 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 131', async () => {
    const payload: TestPayload = { id: '131_10', value: 478 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 131', () => {
    const payload: TestPayload = { id: '131_11', value: 156 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 131', () => {
    const payload: TestPayload = { id: '131_12', value: 290 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
