import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1283', () => {
  it('sync TS test 0 of file 1283', () => {
    const payload: TestPayload = { id: '1283_0', value: 10 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1283', () => {
    const payload: TestPayload = { id: '1283_1', value: 418 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1283', async () => {
    const payload: TestPayload = { id: '1283_2', value: 91 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1283', async () => {
    const payload: TestPayload = { id: '1283_3', value: 252 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1283', () => {
    const payload: TestPayload = { id: '1283_4', value: 425 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1283', () => {
    const payload: TestPayload = { id: '1283_5', value: 194 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1283', async () => {
    const payload: TestPayload = { id: '1283_6', value: 459 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1283', async () => {
    const payload: TestPayload = { id: '1283_7', value: 81 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1283', () => {
    const payload: TestPayload = { id: '1283_8', value: 486 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1283', async () => {
    const payload: TestPayload = { id: '1283_9', value: 462 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1283', async () => {
    const payload: TestPayload = { id: '1283_10', value: 103 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1283', () => {
    const payload: TestPayload = { id: '1283_11', value: 130 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1283', () => {
    const payload: TestPayload = { id: '1283_12', value: 169 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1283', () => {
    const payload: TestPayload = { id: '1283_13', value: 212 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
