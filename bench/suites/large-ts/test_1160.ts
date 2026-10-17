import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1160', () => {
  it('async TS test 0 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_0', value: 138 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_1', value: 180 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_2', value: 467 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_3', value: 425 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_4', value: 76 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1160', () => {
    const payload: TestPayload = { id: '1160_5', value: 126 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1160', () => {
    const payload: TestPayload = { id: '1160_6', value: 68 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_7', value: 244 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_8', value: 167 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1160', () => {
    const payload: TestPayload = { id: '1160_9', value: 273 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_10', value: 477 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_11', value: 364 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1160', async () => {
    const payload: TestPayload = { id: '1160_12', value: 241 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1160', () => {
    const payload: TestPayload = { id: '1160_13', value: 374 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
