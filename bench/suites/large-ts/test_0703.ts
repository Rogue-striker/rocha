import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 703', () => {
  it('async TS test 0 of file 703', async () => {
    const payload: TestPayload = { id: '703_0', value: 416 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 703', () => {
    const payload: TestPayload = { id: '703_1', value: 61 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 703', async () => {
    const payload: TestPayload = { id: '703_2', value: 372 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 703', () => {
    const payload: TestPayload = { id: '703_3', value: 150 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 703', () => {
    const payload: TestPayload = { id: '703_4', value: 303 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 703', async () => {
    const payload: TestPayload = { id: '703_5', value: 282 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 703', () => {
    const payload: TestPayload = { id: '703_6', value: 222 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 703', () => {
    const payload: TestPayload = { id: '703_7', value: 223 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 703', async () => {
    const payload: TestPayload = { id: '703_8', value: 224 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 703', () => {
    const payload: TestPayload = { id: '703_9', value: 455 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 703', async () => {
    const payload: TestPayload = { id: '703_10', value: 358 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 703', async () => {
    const payload: TestPayload = { id: '703_11', value: 101 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 703', () => {
    const payload: TestPayload = { id: '703_12', value: 24 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
