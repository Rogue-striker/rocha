import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 378', () => {
  it('async TS test 0 of file 378', async () => {
    const payload: TestPayload = { id: '378_0', value: 273 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 378', () => {
    const payload: TestPayload = { id: '378_1', value: 262 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 378', () => {
    const payload: TestPayload = { id: '378_2', value: 215 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 378', async () => {
    const payload: TestPayload = { id: '378_3', value: 310 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 378', async () => {
    const payload: TestPayload = { id: '378_4', value: 394 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 378', () => {
    const payload: TestPayload = { id: '378_5', value: 410 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 378', () => {
    const payload: TestPayload = { id: '378_6', value: 225 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 378', () => {
    const payload: TestPayload = { id: '378_7', value: 150 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 378', () => {
    const payload: TestPayload = { id: '378_8', value: 74 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 378', () => {
    const payload: TestPayload = { id: '378_9', value: 459 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 378', () => {
    const payload: TestPayload = { id: '378_10', value: 2 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 378', () => {
    const payload: TestPayload = { id: '378_11', value: 481 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 378', async () => {
    const payload: TestPayload = { id: '378_12', value: 182 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
