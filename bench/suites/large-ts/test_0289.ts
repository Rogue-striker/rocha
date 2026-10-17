import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 289', () => {
  it('async TS test 0 of file 289', async () => {
    const payload: TestPayload = { id: '289_0', value: 28 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 289', async () => {
    const payload: TestPayload = { id: '289_1', value: 288 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 289', async () => {
    const payload: TestPayload = { id: '289_2', value: 190 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 289', async () => {
    const payload: TestPayload = { id: '289_3', value: 211 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 289', () => {
    const payload: TestPayload = { id: '289_4', value: 281 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 289', async () => {
    const payload: TestPayload = { id: '289_5', value: 386 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 289', () => {
    const payload: TestPayload = { id: '289_6', value: 284 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 289', () => {
    const payload: TestPayload = { id: '289_7', value: 228 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 289', async () => {
    const payload: TestPayload = { id: '289_8', value: 142 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 289', async () => {
    const payload: TestPayload = { id: '289_9', value: 272 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 289', () => {
    const payload: TestPayload = { id: '289_10', value: 374 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 289', () => {
    const payload: TestPayload = { id: '289_11', value: 285 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 289', () => {
    const payload: TestPayload = { id: '289_12', value: 322 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
