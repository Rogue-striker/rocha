import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 755', () => {
  it('async TS test 0 of file 755', async () => {
    const payload: TestPayload = { id: '755_0', value: 355 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 755', async () => {
    const payload: TestPayload = { id: '755_1', value: 66 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 755', async () => {
    const payload: TestPayload = { id: '755_2', value: 265 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 755', () => {
    const payload: TestPayload = { id: '755_3', value: 222 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 755', () => {
    const payload: TestPayload = { id: '755_4', value: 4 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 755', async () => {
    const payload: TestPayload = { id: '755_5', value: 72 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 755', async () => {
    const payload: TestPayload = { id: '755_6', value: 58 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 755', async () => {
    const payload: TestPayload = { id: '755_7', value: 94 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 755', async () => {
    const payload: TestPayload = { id: '755_8', value: 472 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 755', async () => {
    const payload: TestPayload = { id: '755_9', value: 247 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 755', async () => {
    const payload: TestPayload = { id: '755_10', value: 253 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 755', async () => {
    const payload: TestPayload = { id: '755_11', value: 281 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 755', () => {
    const payload: TestPayload = { id: '755_12', value: 106 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
