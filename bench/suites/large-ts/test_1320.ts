import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1320', () => {
  it('sync TS test 0 of file 1320', () => {
    const payload: TestPayload = { id: '1320_0', value: 130 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_1', value: 82 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_2', value: 110 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1320', () => {
    const payload: TestPayload = { id: '1320_3', value: 201 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1320', () => {
    const payload: TestPayload = { id: '1320_4', value: 21 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_5', value: 244 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_6', value: 396 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_7', value: 17 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1320', () => {
    const payload: TestPayload = { id: '1320_8', value: 275 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1320', () => {
    const payload: TestPayload = { id: '1320_9', value: 40 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_10', value: 144 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1320', () => {
    const payload: TestPayload = { id: '1320_11', value: 495 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_12', value: 112 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1320', async () => {
    const payload: TestPayload = { id: '1320_13', value: 215 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
