import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1105', () => {
  it('sync TS test 0 of file 1105', () => {
    const payload: TestPayload = { id: '1105_0', value: 149 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1105', () => {
    const payload: TestPayload = { id: '1105_1', value: 335 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1105', () => {
    const payload: TestPayload = { id: '1105_2', value: 87 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1105', () => {
    const payload: TestPayload = { id: '1105_3', value: 129 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1105', async () => {
    const payload: TestPayload = { id: '1105_4', value: 29 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1105', () => {
    const payload: TestPayload = { id: '1105_5', value: 187 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1105', async () => {
    const payload: TestPayload = { id: '1105_6', value: 129 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1105', async () => {
    const payload: TestPayload = { id: '1105_7', value: 417 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1105', () => {
    const payload: TestPayload = { id: '1105_8', value: 498 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1105', async () => {
    const payload: TestPayload = { id: '1105_9', value: 410 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1105', () => {
    const payload: TestPayload = { id: '1105_10', value: 194 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1105', async () => {
    const payload: TestPayload = { id: '1105_11', value: 282 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1105', () => {
    const payload: TestPayload = { id: '1105_12', value: 21 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1105', async () => {
    const payload: TestPayload = { id: '1105_13', value: 247 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
