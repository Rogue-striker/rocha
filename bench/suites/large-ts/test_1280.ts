import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1280', () => {
  it('async TS test 0 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_0', value: 140 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1280', () => {
    const payload: TestPayload = { id: '1280_1', value: 325 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_2', value: 413 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_3', value: 442 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_4', value: 271 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1280', () => {
    const payload: TestPayload = { id: '1280_5', value: 297 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_6', value: 185 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1280', () => {
    const payload: TestPayload = { id: '1280_7', value: 464 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_8', value: 367 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_9', value: 346 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_10', value: 9 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1280', async () => {
    const payload: TestPayload = { id: '1280_11', value: 99 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1280', () => {
    const payload: TestPayload = { id: '1280_12', value: 34 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1280', () => {
    const payload: TestPayload = { id: '1280_13', value: 372 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
