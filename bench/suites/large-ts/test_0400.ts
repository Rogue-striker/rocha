import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 400', () => {
  it('async TS test 0 of file 400', async () => {
    const payload: TestPayload = { id: '400_0', value: 411 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 400', async () => {
    const payload: TestPayload = { id: '400_1', value: 64 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 400', () => {
    const payload: TestPayload = { id: '400_2', value: 194 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 400', () => {
    const payload: TestPayload = { id: '400_3', value: 241 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 400', async () => {
    const payload: TestPayload = { id: '400_4', value: 392 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 400', async () => {
    const payload: TestPayload = { id: '400_5', value: 443 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 400', () => {
    const payload: TestPayload = { id: '400_6', value: 147 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 400', async () => {
    const payload: TestPayload = { id: '400_7', value: 15 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 400', async () => {
    const payload: TestPayload = { id: '400_8', value: 129 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 400', () => {
    const payload: TestPayload = { id: '400_9', value: 135 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 400', () => {
    const payload: TestPayload = { id: '400_10', value: 431 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 400', () => {
    const payload: TestPayload = { id: '400_11', value: 16 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 400', () => {
    const payload: TestPayload = { id: '400_12', value: 346 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
