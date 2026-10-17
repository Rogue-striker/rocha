import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1006', () => {
  it('async TS test 0 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_0', value: 115 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1006', () => {
    const payload: TestPayload = { id: '1006_1', value: 40 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_2', value: 413 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1006', () => {
    const payload: TestPayload = { id: '1006_3', value: 477 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1006', () => {
    const payload: TestPayload = { id: '1006_4', value: 142 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_5', value: 282 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_6', value: 47 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_7', value: 211 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_8', value: 99 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_9', value: 424 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1006', () => {
    const payload: TestPayload = { id: '1006_10', value: 290 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_11', value: 29 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_12', value: 374 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1006', async () => {
    const payload: TestPayload = { id: '1006_13', value: 461 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
