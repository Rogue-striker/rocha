import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1146', () => {
  it('async TS test 0 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_0', value: 214 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1146', () => {
    const payload: TestPayload = { id: '1146_1', value: 204 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1146', () => {
    const payload: TestPayload = { id: '1146_2', value: 460 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_3', value: 322 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_4', value: 337 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1146', () => {
    const payload: TestPayload = { id: '1146_5', value: 109 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_6', value: 238 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1146', () => {
    const payload: TestPayload = { id: '1146_7', value: 159 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_8', value: 188 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1146', () => {
    const payload: TestPayload = { id: '1146_9', value: 182 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1146', () => {
    const payload: TestPayload = { id: '1146_10', value: 395 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_11', value: 109 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1146', () => {
    const payload: TestPayload = { id: '1146_12', value: 451 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1146', async () => {
    const payload: TestPayload = { id: '1146_13', value: 194 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
