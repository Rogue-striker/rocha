import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1260', () => {
  it('sync TS test 0 of file 1260', () => {
    const payload: TestPayload = { id: '1260_0', value: 341 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1260', () => {
    const payload: TestPayload = { id: '1260_1', value: 273 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1260', () => {
    const payload: TestPayload = { id: '1260_2', value: 372 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_3', value: 108 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_4', value: 127 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_5', value: 247 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_6', value: 310 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1260', () => {
    const payload: TestPayload = { id: '1260_7', value: 54 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1260', () => {
    const payload: TestPayload = { id: '1260_8', value: 144 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_9', value: 295 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_10', value: 230 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1260', () => {
    const payload: TestPayload = { id: '1260_11', value: 186 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1260', async () => {
    const payload: TestPayload = { id: '1260_12', value: 335 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1260', () => {
    const payload: TestPayload = { id: '1260_13', value: 15 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
