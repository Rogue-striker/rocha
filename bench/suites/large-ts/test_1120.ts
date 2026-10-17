import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1120', () => {
  it('async TS test 0 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_0', value: 417 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_1', value: 268 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1120', () => {
    const payload: TestPayload = { id: '1120_2', value: 292 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_3', value: 362 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_4', value: 467 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_5', value: 191 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_6', value: 131 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1120', () => {
    const payload: TestPayload = { id: '1120_7', value: 448 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1120', () => {
    const payload: TestPayload = { id: '1120_8', value: 175 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1120', () => {
    const payload: TestPayload = { id: '1120_9', value: 405 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1120', () => {
    const payload: TestPayload = { id: '1120_10', value: 66 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1120', async () => {
    const payload: TestPayload = { id: '1120_11', value: 293 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1120', () => {
    const payload: TestPayload = { id: '1120_12', value: 256 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1120', () => {
    const payload: TestPayload = { id: '1120_13', value: 169 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
