import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1040', () => {
  it('async TS test 0 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_0', value: 386 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_1', value: 231 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_2', value: 151 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_3', value: 149 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_4', value: 370 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1040', () => {
    const payload: TestPayload = { id: '1040_5', value: 44 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1040', () => {
    const payload: TestPayload = { id: '1040_6', value: 326 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1040', () => {
    const payload: TestPayload = { id: '1040_7', value: 179 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_8', value: 187 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_9', value: 259 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1040', () => {
    const payload: TestPayload = { id: '1040_10', value: 473 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_11', value: 377 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1040', () => {
    const payload: TestPayload = { id: '1040_12', value: 23 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1040', async () => {
    const payload: TestPayload = { id: '1040_13', value: 128 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
