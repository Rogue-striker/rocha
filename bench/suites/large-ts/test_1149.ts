import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1149', () => {
  it('async TS test 0 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_0', value: 488 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_1', value: 490 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_2', value: 97 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_3', value: 55 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1149', () => {
    const payload: TestPayload = { id: '1149_4', value: 472 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1149', () => {
    const payload: TestPayload = { id: '1149_5', value: 182 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1149', () => {
    const payload: TestPayload = { id: '1149_6', value: 8 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_7', value: 467 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_8', value: 192 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_9', value: 68 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1149', () => {
    const payload: TestPayload = { id: '1149_10', value: 324 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_11', value: 448 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1149', () => {
    const payload: TestPayload = { id: '1149_12', value: 334 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1149', async () => {
    const payload: TestPayload = { id: '1149_13', value: 7 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
