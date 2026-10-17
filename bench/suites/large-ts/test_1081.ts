import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1081', () => {
  it('async TS test 0 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_0', value: 350 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_1', value: 93 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1081', () => {
    const payload: TestPayload = { id: '1081_2', value: 181 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1081', () => {
    const payload: TestPayload = { id: '1081_3', value: 284 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_4', value: 429 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_5', value: 272 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_6', value: 26 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1081', () => {
    const payload: TestPayload = { id: '1081_7', value: 344 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_8', value: 465 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1081', () => {
    const payload: TestPayload = { id: '1081_9', value: 218 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_10', value: 378 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1081', () => {
    const payload: TestPayload = { id: '1081_11', value: 143 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1081', async () => {
    const payload: TestPayload = { id: '1081_12', value: 266 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1081', () => {
    const payload: TestPayload = { id: '1081_13', value: 249 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
