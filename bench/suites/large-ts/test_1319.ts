import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1319', () => {
  it('async TS test 0 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_0', value: 119 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_1', value: 307 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_2', value: 136 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_3', value: 284 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1319', () => {
    const payload: TestPayload = { id: '1319_4', value: 328 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1319', () => {
    const payload: TestPayload = { id: '1319_5', value: 52 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_6', value: 231 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1319', () => {
    const payload: TestPayload = { id: '1319_7', value: 361 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_8', value: 153 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1319', async () => {
    const payload: TestPayload = { id: '1319_9', value: 45 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1319', () => {
    const payload: TestPayload = { id: '1319_10', value: 300 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1319', () => {
    const payload: TestPayload = { id: '1319_11', value: 341 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1319', () => {
    const payload: TestPayload = { id: '1319_12', value: 394 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1319', () => {
    const payload: TestPayload = { id: '1319_13', value: 409 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
