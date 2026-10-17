import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 0', () => {
  it('async TS test 0 of file 0', async () => {
    const payload: TestPayload = { id: '0_0', value: 224 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 0', async () => {
    const payload: TestPayload = { id: '0_1', value: 334 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 0', () => {
    const payload: TestPayload = { id: '0_2', value: 263 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 0', () => {
    const payload: TestPayload = { id: '0_3', value: 312 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 0', async () => {
    const payload: TestPayload = { id: '0_4', value: 236 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 0', () => {
    const payload: TestPayload = { id: '0_5', value: 441 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 0', async () => {
    const payload: TestPayload = { id: '0_6', value: 153 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 0', () => {
    const payload: TestPayload = { id: '0_7', value: 250 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 0', async () => {
    const payload: TestPayload = { id: '0_8', value: 305 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 0', () => {
    const payload: TestPayload = { id: '0_9', value: 235 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 0', async () => {
    const payload: TestPayload = { id: '0_10', value: 25 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 0', async () => {
    const payload: TestPayload = { id: '0_11', value: 15 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 0', () => {
    const payload: TestPayload = { id: '0_12', value: 30 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
