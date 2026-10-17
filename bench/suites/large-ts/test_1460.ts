import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1460', () => {
  it('sync TS test 0 of file 1460', () => {
    const payload: TestPayload = { id: '1460_0', value: 170 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_1', value: 75 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_2', value: 210 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1460', () => {
    const payload: TestPayload = { id: '1460_3', value: 408 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_4', value: 349 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1460', () => {
    const payload: TestPayload = { id: '1460_5', value: 280 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_6', value: 22 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_7', value: 347 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1460', () => {
    const payload: TestPayload = { id: '1460_8', value: 302 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_9', value: 95 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_10', value: 129 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1460', () => {
    const payload: TestPayload = { id: '1460_11', value: 46 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_12', value: 229 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1460', async () => {
    const payload: TestPayload = { id: '1460_13', value: 101 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
