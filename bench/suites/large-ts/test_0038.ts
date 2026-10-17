import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 38', () => {
  it('async TS test 0 of file 38', async () => {
    const payload: TestPayload = { id: '38_0', value: 143 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 38', () => {
    const payload: TestPayload = { id: '38_1', value: 498 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 38', async () => {
    const payload: TestPayload = { id: '38_2', value: 123 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 38', () => {
    const payload: TestPayload = { id: '38_3', value: 103 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 38', () => {
    const payload: TestPayload = { id: '38_4', value: 447 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 38', async () => {
    const payload: TestPayload = { id: '38_5', value: 321 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 38', () => {
    const payload: TestPayload = { id: '38_6', value: 376 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 38', () => {
    const payload: TestPayload = { id: '38_7', value: 288 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 38', async () => {
    const payload: TestPayload = { id: '38_8', value: 296 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 38', () => {
    const payload: TestPayload = { id: '38_9', value: 244 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 38', async () => {
    const payload: TestPayload = { id: '38_10', value: 244 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 38', async () => {
    const payload: TestPayload = { id: '38_11', value: 108 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 38', async () => {
    const payload: TestPayload = { id: '38_12', value: 405 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
