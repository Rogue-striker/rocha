import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 641', () => {
  it('sync TS test 0 of file 641', () => {
    const payload: TestPayload = { id: '641_0', value: 292 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 641', async () => {
    const payload: TestPayload = { id: '641_1', value: 468 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 641', () => {
    const payload: TestPayload = { id: '641_2', value: 21 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 641', async () => {
    const payload: TestPayload = { id: '641_3', value: 44 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 641', () => {
    const payload: TestPayload = { id: '641_4', value: 152 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 641', () => {
    const payload: TestPayload = { id: '641_5', value: 333 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 641', () => {
    const payload: TestPayload = { id: '641_6', value: 378 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 641', () => {
    const payload: TestPayload = { id: '641_7', value: 439 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 641', () => {
    const payload: TestPayload = { id: '641_8', value: 284 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 641', () => {
    const payload: TestPayload = { id: '641_9', value: 205 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 641', async () => {
    const payload: TestPayload = { id: '641_10', value: 107 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 641', () => {
    const payload: TestPayload = { id: '641_11', value: 9 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 641', () => {
    const payload: TestPayload = { id: '641_12', value: 142 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
