import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1087', () => {
  it('async TS test 0 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_0', value: 336 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1087', () => {
    const payload: TestPayload = { id: '1087_1', value: 338 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_2', value: 89 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_3', value: 245 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_4', value: 456 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_5', value: 466 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1087', () => {
    const payload: TestPayload = { id: '1087_6', value: 49 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_7', value: 195 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_8', value: 97 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1087', () => {
    const payload: TestPayload = { id: '1087_9', value: 155 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1087', () => {
    const payload: TestPayload = { id: '1087_10', value: 28 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_11', value: 325 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1087', async () => {
    const payload: TestPayload = { id: '1087_12', value: 297 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1087', () => {
    const payload: TestPayload = { id: '1087_13', value: 176 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
