import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1192', () => {
  it('sync TS test 0 of file 1192', () => {
    const payload: TestPayload = { id: '1192_0', value: 146 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1192', () => {
    const payload: TestPayload = { id: '1192_1', value: 20 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1192', async () => {
    const payload: TestPayload = { id: '1192_2', value: 29 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1192', async () => {
    const payload: TestPayload = { id: '1192_3', value: 66 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1192', () => {
    const payload: TestPayload = { id: '1192_4', value: 272 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1192', () => {
    const payload: TestPayload = { id: '1192_5', value: 252 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1192', async () => {
    const payload: TestPayload = { id: '1192_6', value: 124 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1192', async () => {
    const payload: TestPayload = { id: '1192_7', value: 260 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1192', async () => {
    const payload: TestPayload = { id: '1192_8', value: 305 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1192', () => {
    const payload: TestPayload = { id: '1192_9', value: 418 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1192', () => {
    const payload: TestPayload = { id: '1192_10', value: 363 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1192', async () => {
    const payload: TestPayload = { id: '1192_11', value: 487 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1192', () => {
    const payload: TestPayload = { id: '1192_12', value: 440 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1192', () => {
    const payload: TestPayload = { id: '1192_13', value: 154 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
