import assert from 'node:assert';
import { computeMetric11, type Model11 } from './src/helper_11.ts';
import { computeMetric14 } from './src/helper_14.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1391', () => {
  it('async TS test 0 of file 1391', async () => {
    const payload: TestPayload = { id: '1391_0', value: 252 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1391', () => {
    const payload: TestPayload = { id: '1391_1', value: 303 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1391', () => {
    const payload: TestPayload = { id: '1391_2', value: 463 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1391', () => {
    const payload: TestPayload = { id: '1391_3', value: 116 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1391', () => {
    const payload: TestPayload = { id: '1391_4', value: 494 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1391', () => {
    const payload: TestPayload = { id: '1391_5', value: 414 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1391', () => {
    const payload: TestPayload = { id: '1391_6', value: 330 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1391', async () => {
    const payload: TestPayload = { id: '1391_7', value: 65 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1391', () => {
    const payload: TestPayload = { id: '1391_8', value: 448 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1391', async () => {
    const payload: TestPayload = { id: '1391_9', value: 497 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1391', async () => {
    const payload: TestPayload = { id: '1391_10', value: 310 };
    const res1 = computeMetric11(payload.value);
    const res2 = computeMetric14(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1391', () => {
    const payload: TestPayload = { id: '1391_11', value: 497 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1391', () => {
    const payload: TestPayload = { id: '1391_12', value: 345 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1391', () => {
    const payload: TestPayload = { id: '1391_13', value: 125 };
    const res = computeMetric11(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
