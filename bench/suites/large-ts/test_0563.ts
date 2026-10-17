import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 563', () => {
  it('async TS test 0 of file 563', async () => {
    const payload: TestPayload = { id: '563_0', value: 52 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 563', () => {
    const payload: TestPayload = { id: '563_1', value: 364 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 563', async () => {
    const payload: TestPayload = { id: '563_2', value: 465 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 563', async () => {
    const payload: TestPayload = { id: '563_3', value: 495 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 563', async () => {
    const payload: TestPayload = { id: '563_4', value: 473 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 563', async () => {
    const payload: TestPayload = { id: '563_5', value: 479 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 563', () => {
    const payload: TestPayload = { id: '563_6', value: 51 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 563', async () => {
    const payload: TestPayload = { id: '563_7', value: 381 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 563', () => {
    const payload: TestPayload = { id: '563_8', value: 487 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 563', async () => {
    const payload: TestPayload = { id: '563_9', value: 108 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 563', async () => {
    const payload: TestPayload = { id: '563_10', value: 138 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 563', () => {
    const payload: TestPayload = { id: '563_11', value: 322 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 563', () => {
    const payload: TestPayload = { id: '563_12', value: 7 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
