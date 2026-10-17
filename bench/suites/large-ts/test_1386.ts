import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1386', () => {
  it('async TS test 0 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_0', value: 204 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_1', value: 156 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_2', value: 262 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_3', value: 413 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_4', value: 286 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1386', () => {
    const payload: TestPayload = { id: '1386_5', value: 455 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_6', value: 463 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1386', () => {
    const payload: TestPayload = { id: '1386_7', value: 133 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1386', () => {
    const payload: TestPayload = { id: '1386_8', value: 346 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1386', () => {
    const payload: TestPayload = { id: '1386_9', value: 447 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1386', () => {
    const payload: TestPayload = { id: '1386_10', value: 120 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1386', async () => {
    const payload: TestPayload = { id: '1386_11', value: 313 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1386', () => {
    const payload: TestPayload = { id: '1386_12', value: 289 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1386', () => {
    const payload: TestPayload = { id: '1386_13', value: 349 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
