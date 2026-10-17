import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1183', () => {
  it('async TS test 0 of file 1183', async () => {
    const payload: TestPayload = { id: '1183_0', value: 236 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1183', () => {
    const payload: TestPayload = { id: '1183_1', value: 448 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1183', () => {
    const payload: TestPayload = { id: '1183_2', value: 51 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1183', async () => {
    const payload: TestPayload = { id: '1183_3', value: 272 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1183', () => {
    const payload: TestPayload = { id: '1183_4', value: 333 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1183', () => {
    const payload: TestPayload = { id: '1183_5', value: 339 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1183', () => {
    const payload: TestPayload = { id: '1183_6', value: 104 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1183', async () => {
    const payload: TestPayload = { id: '1183_7', value: 106 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1183', () => {
    const payload: TestPayload = { id: '1183_8', value: 478 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1183', () => {
    const payload: TestPayload = { id: '1183_9', value: 29 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1183', () => {
    const payload: TestPayload = { id: '1183_10', value: 93 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1183', () => {
    const payload: TestPayload = { id: '1183_11', value: 40 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1183', () => {
    const payload: TestPayload = { id: '1183_12', value: 227 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1183', async () => {
    const payload: TestPayload = { id: '1183_13', value: 325 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
