import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1132', () => {
  it('async TS test 0 of file 1132', async () => {
    const payload: TestPayload = { id: '1132_0', value: 15 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1132', async () => {
    const payload: TestPayload = { id: '1132_1', value: 344 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1132', () => {
    const payload: TestPayload = { id: '1132_2', value: 437 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1132', async () => {
    const payload: TestPayload = { id: '1132_3', value: 456 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1132', () => {
    const payload: TestPayload = { id: '1132_4', value: 229 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1132', async () => {
    const payload: TestPayload = { id: '1132_5', value: 99 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1132', () => {
    const payload: TestPayload = { id: '1132_6', value: 283 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1132', () => {
    const payload: TestPayload = { id: '1132_7', value: 467 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1132', () => {
    const payload: TestPayload = { id: '1132_8', value: 409 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1132', async () => {
    const payload: TestPayload = { id: '1132_9', value: 330 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1132', async () => {
    const payload: TestPayload = { id: '1132_10', value: 237 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1132', () => {
    const payload: TestPayload = { id: '1132_11', value: 215 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1132', () => {
    const payload: TestPayload = { id: '1132_12', value: 405 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1132', () => {
    const payload: TestPayload = { id: '1132_13', value: 276 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
