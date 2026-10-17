import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1369', () => {
  it('async TS test 0 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_0', value: 56 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1369', () => {
    const payload: TestPayload = { id: '1369_1', value: 346 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_2', value: 310 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1369', () => {
    const payload: TestPayload = { id: '1369_3', value: 446 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_4', value: 389 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1369', () => {
    const payload: TestPayload = { id: '1369_5', value: 287 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1369', () => {
    const payload: TestPayload = { id: '1369_6', value: 169 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_7', value: 297 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_8', value: 50 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_9', value: 62 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1369', () => {
    const payload: TestPayload = { id: '1369_10', value: 380 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_11', value: 14 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1369', async () => {
    const payload: TestPayload = { id: '1369_12', value: 222 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1369', () => {
    const payload: TestPayload = { id: '1369_13', value: 138 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
