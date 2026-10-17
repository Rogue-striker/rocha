import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1215', () => {
  it('async TS test 0 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_0', value: 136 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_1', value: 30 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_2', value: 473 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_3', value: 345 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_4', value: 245 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_5', value: 448 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1215', () => {
    const payload: TestPayload = { id: '1215_6', value: 370 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_7', value: 461 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1215', () => {
    const payload: TestPayload = { id: '1215_8', value: 321 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_9', value: 6 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1215', () => {
    const payload: TestPayload = { id: '1215_10', value: 86 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1215', () => {
    const payload: TestPayload = { id: '1215_11', value: 170 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1215', () => {
    const payload: TestPayload = { id: '1215_12', value: 94 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1215', async () => {
    const payload: TestPayload = { id: '1215_13', value: 202 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
