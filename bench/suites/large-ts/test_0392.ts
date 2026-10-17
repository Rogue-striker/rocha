import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 392', () => {
  it('async TS test 0 of file 392', async () => {
    const payload: TestPayload = { id: '392_0', value: 424 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 392', async () => {
    const payload: TestPayload = { id: '392_1', value: 403 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 392', () => {
    const payload: TestPayload = { id: '392_2', value: 356 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 392', () => {
    const payload: TestPayload = { id: '392_3', value: 426 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 392', async () => {
    const payload: TestPayload = { id: '392_4', value: 204 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 392', async () => {
    const payload: TestPayload = { id: '392_5', value: 10 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 392', () => {
    const payload: TestPayload = { id: '392_6', value: 128 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 392', async () => {
    const payload: TestPayload = { id: '392_7', value: 307 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 392', () => {
    const payload: TestPayload = { id: '392_8', value: 235 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 392', async () => {
    const payload: TestPayload = { id: '392_9', value: 168 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 392', async () => {
    const payload: TestPayload = { id: '392_10', value: 157 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 392', async () => {
    const payload: TestPayload = { id: '392_11', value: 43 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 392', async () => {
    const payload: TestPayload = { id: '392_12', value: 282 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
