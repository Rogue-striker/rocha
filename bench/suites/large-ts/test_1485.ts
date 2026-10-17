import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1485', () => {
  it('async TS test 0 of file 1485', async () => {
    const payload: TestPayload = { id: '1485_0', value: 110 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1485', () => {
    const payload: TestPayload = { id: '1485_1', value: 297 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1485', () => {
    const payload: TestPayload = { id: '1485_2', value: 205 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1485', () => {
    const payload: TestPayload = { id: '1485_3', value: 207 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1485', async () => {
    const payload: TestPayload = { id: '1485_4', value: 307 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1485', async () => {
    const payload: TestPayload = { id: '1485_5', value: 285 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1485', async () => {
    const payload: TestPayload = { id: '1485_6', value: 417 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1485', () => {
    const payload: TestPayload = { id: '1485_7', value: 400 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1485', async () => {
    const payload: TestPayload = { id: '1485_8', value: 30 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1485', () => {
    const payload: TestPayload = { id: '1485_9', value: 18 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1485', async () => {
    const payload: TestPayload = { id: '1485_10', value: 170 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1485', () => {
    const payload: TestPayload = { id: '1485_11', value: 418 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1485', () => {
    const payload: TestPayload = { id: '1485_12', value: 36 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1485', () => {
    const payload: TestPayload = { id: '1485_13', value: 116 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
