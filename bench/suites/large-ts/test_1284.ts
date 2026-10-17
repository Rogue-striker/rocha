import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1284', () => {
  it('sync TS test 0 of file 1284', () => {
    const payload: TestPayload = { id: '1284_0', value: 457 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1284', () => {
    const payload: TestPayload = { id: '1284_1', value: 378 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1284', async () => {
    const payload: TestPayload = { id: '1284_2', value: 352 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1284', () => {
    const payload: TestPayload = { id: '1284_3', value: 273 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1284', () => {
    const payload: TestPayload = { id: '1284_4', value: 298 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1284', async () => {
    const payload: TestPayload = { id: '1284_5', value: 79 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1284', () => {
    const payload: TestPayload = { id: '1284_6', value: 420 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1284', () => {
    const payload: TestPayload = { id: '1284_7', value: 484 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1284', async () => {
    const payload: TestPayload = { id: '1284_8', value: 144 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1284', () => {
    const payload: TestPayload = { id: '1284_9', value: 19 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1284', () => {
    const payload: TestPayload = { id: '1284_10', value: 205 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1284', async () => {
    const payload: TestPayload = { id: '1284_11', value: 155 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1284', async () => {
    const payload: TestPayload = { id: '1284_12', value: 272 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1284', async () => {
    const payload: TestPayload = { id: '1284_13', value: 24 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
