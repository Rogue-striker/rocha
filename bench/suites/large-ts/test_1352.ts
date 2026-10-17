import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1352', () => {
  it('async TS test 0 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_0', value: 299 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_1', value: 135 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1352', () => {
    const payload: TestPayload = { id: '1352_2', value: 401 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_3', value: 200 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_4', value: 376 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_5', value: 37 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1352', () => {
    const payload: TestPayload = { id: '1352_6', value: 90 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1352', () => {
    const payload: TestPayload = { id: '1352_7', value: 350 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_8', value: 364 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_9', value: 412 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1352', () => {
    const payload: TestPayload = { id: '1352_10', value: 422 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1352', () => {
    const payload: TestPayload = { id: '1352_11', value: 223 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_12', value: 313 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1352', async () => {
    const payload: TestPayload = { id: '1352_13', value: 139 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
