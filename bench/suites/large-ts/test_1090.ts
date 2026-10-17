import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1090', () => {
  it('sync TS test 0 of file 1090', () => {
    const payload: TestPayload = { id: '1090_0', value: 346 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1090', () => {
    const payload: TestPayload = { id: '1090_1', value: 182 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1090', async () => {
    const payload: TestPayload = { id: '1090_2', value: 300 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1090', () => {
    const payload: TestPayload = { id: '1090_3', value: 357 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1090', async () => {
    const payload: TestPayload = { id: '1090_4', value: 64 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1090', () => {
    const payload: TestPayload = { id: '1090_5', value: 393 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1090', async () => {
    const payload: TestPayload = { id: '1090_6', value: 61 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1090', () => {
    const payload: TestPayload = { id: '1090_7', value: 100 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1090', () => {
    const payload: TestPayload = { id: '1090_8', value: 164 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1090', () => {
    const payload: TestPayload = { id: '1090_9', value: 422 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1090', () => {
    const payload: TestPayload = { id: '1090_10', value: 202 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1090', () => {
    const payload: TestPayload = { id: '1090_11', value: 96 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1090', async () => {
    const payload: TestPayload = { id: '1090_12', value: 220 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1090', async () => {
    const payload: TestPayload = { id: '1090_13', value: 17 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
