import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 428', () => {
  it('async TS test 0 of file 428', async () => {
    const payload: TestPayload = { id: '428_0', value: 157 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 428', async () => {
    const payload: TestPayload = { id: '428_1', value: 408 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 428', async () => {
    const payload: TestPayload = { id: '428_2', value: 105 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 428', async () => {
    const payload: TestPayload = { id: '428_3', value: 278 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 428', () => {
    const payload: TestPayload = { id: '428_4', value: 130 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 428', () => {
    const payload: TestPayload = { id: '428_5', value: 215 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 428', async () => {
    const payload: TestPayload = { id: '428_6', value: 152 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 428', async () => {
    const payload: TestPayload = { id: '428_7', value: 66 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 428', async () => {
    const payload: TestPayload = { id: '428_8', value: 326 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 428', async () => {
    const payload: TestPayload = { id: '428_9', value: 447 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 428', async () => {
    const payload: TestPayload = { id: '428_10', value: 373 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 428', () => {
    const payload: TestPayload = { id: '428_11', value: 166 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 428', () => {
    const payload: TestPayload = { id: '428_12', value: 427 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
