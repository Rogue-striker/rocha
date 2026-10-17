import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 738', () => {
  it('sync TS test 0 of file 738', () => {
    const payload: TestPayload = { id: '738_0', value: 253 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 738', async () => {
    const payload: TestPayload = { id: '738_1', value: 466 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 738', () => {
    const payload: TestPayload = { id: '738_2', value: 53 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 738', async () => {
    const payload: TestPayload = { id: '738_3', value: 457 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 738', () => {
    const payload: TestPayload = { id: '738_4', value: 20 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 738', () => {
    const payload: TestPayload = { id: '738_5', value: 44 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 738', async () => {
    const payload: TestPayload = { id: '738_6', value: 470 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 738', () => {
    const payload: TestPayload = { id: '738_7', value: 101 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 738', async () => {
    const payload: TestPayload = { id: '738_8', value: 76 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 738', () => {
    const payload: TestPayload = { id: '738_9', value: 301 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 738', () => {
    const payload: TestPayload = { id: '738_10', value: 383 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 738', async () => {
    const payload: TestPayload = { id: '738_11', value: 342 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 738', async () => {
    const payload: TestPayload = { id: '738_12', value: 269 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
