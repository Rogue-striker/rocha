import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1346', () => {
  it('sync TS test 0 of file 1346', () => {
    const payload: TestPayload = { id: '1346_0', value: 320 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1346', async () => {
    const payload: TestPayload = { id: '1346_1', value: 91 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1346', async () => {
    const payload: TestPayload = { id: '1346_2', value: 170 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1346', async () => {
    const payload: TestPayload = { id: '1346_3', value: 346 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1346', () => {
    const payload: TestPayload = { id: '1346_4', value: 427 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1346', () => {
    const payload: TestPayload = { id: '1346_5', value: 47 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1346', () => {
    const payload: TestPayload = { id: '1346_6', value: 23 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1346', async () => {
    const payload: TestPayload = { id: '1346_7', value: 26 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1346', () => {
    const payload: TestPayload = { id: '1346_8', value: 165 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1346', () => {
    const payload: TestPayload = { id: '1346_9', value: 65 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1346', () => {
    const payload: TestPayload = { id: '1346_10', value: 310 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1346', async () => {
    const payload: TestPayload = { id: '1346_11', value: 374 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1346', () => {
    const payload: TestPayload = { id: '1346_12', value: 390 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1346', () => {
    const payload: TestPayload = { id: '1346_13', value: 306 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
