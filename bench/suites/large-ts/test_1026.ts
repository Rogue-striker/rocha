import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1026', () => {
  it('async TS test 0 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_0', value: 330 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_1', value: 209 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1026', () => {
    const payload: TestPayload = { id: '1026_2', value: 122 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_3', value: 247 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_4', value: 319 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_5', value: 160 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1026', () => {
    const payload: TestPayload = { id: '1026_6', value: 24 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1026', () => {
    const payload: TestPayload = { id: '1026_7', value: 206 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1026', () => {
    const payload: TestPayload = { id: '1026_8', value: 279 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_9', value: 331 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1026', () => {
    const payload: TestPayload = { id: '1026_10', value: 309 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_11', value: 369 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1026', () => {
    const payload: TestPayload = { id: '1026_12', value: 181 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1026', async () => {
    const payload: TestPayload = { id: '1026_13', value: 206 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
