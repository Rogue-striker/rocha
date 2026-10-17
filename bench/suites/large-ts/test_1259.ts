import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1259', () => {
  it('async TS test 0 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_0', value: 386 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1259', () => {
    const payload: TestPayload = { id: '1259_1', value: 311 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1259', () => {
    const payload: TestPayload = { id: '1259_2', value: 45 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1259', () => {
    const payload: TestPayload = { id: '1259_3', value: 383 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1259', () => {
    const payload: TestPayload = { id: '1259_4', value: 364 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_5', value: 496 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_6', value: 282 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_7', value: 60 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1259', () => {
    const payload: TestPayload = { id: '1259_8', value: 256 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_9', value: 383 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_10', value: 403 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1259', () => {
    const payload: TestPayload = { id: '1259_11', value: 251 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_12', value: 325 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1259', async () => {
    const payload: TestPayload = { id: '1259_13', value: 480 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
