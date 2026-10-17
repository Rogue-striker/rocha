import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 235', () => {
  it('sync TS test 0 of file 235', () => {
    const payload: TestPayload = { id: '235_0', value: 34 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 235', () => {
    const payload: TestPayload = { id: '235_1', value: 265 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 235', () => {
    const payload: TestPayload = { id: '235_2', value: 497 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 235', () => {
    const payload: TestPayload = { id: '235_3', value: 178 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 235', async () => {
    const payload: TestPayload = { id: '235_4', value: 169 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 235', () => {
    const payload: TestPayload = { id: '235_5', value: 18 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 235', () => {
    const payload: TestPayload = { id: '235_6', value: 274 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 235', async () => {
    const payload: TestPayload = { id: '235_7', value: 42 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 235', () => {
    const payload: TestPayload = { id: '235_8', value: 431 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 235', async () => {
    const payload: TestPayload = { id: '235_9', value: 485 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 235', () => {
    const payload: TestPayload = { id: '235_10', value: 221 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 235', () => {
    const payload: TestPayload = { id: '235_11', value: 229 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 235', async () => {
    const payload: TestPayload = { id: '235_12', value: 486 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
