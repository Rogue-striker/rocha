import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 739', () => {
  it('async TS test 0 of file 739', async () => {
    const payload: TestPayload = { id: '739_0', value: 383 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 739', () => {
    const payload: TestPayload = { id: '739_1', value: 201 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 739', async () => {
    const payload: TestPayload = { id: '739_2', value: 90 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 739', () => {
    const payload: TestPayload = { id: '739_3', value: 190 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 739', async () => {
    const payload: TestPayload = { id: '739_4', value: 120 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 739', async () => {
    const payload: TestPayload = { id: '739_5', value: 66 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 739', async () => {
    const payload: TestPayload = { id: '739_6', value: 128 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 739', async () => {
    const payload: TestPayload = { id: '739_7', value: 219 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 739', async () => {
    const payload: TestPayload = { id: '739_8', value: 29 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 739', () => {
    const payload: TestPayload = { id: '739_9', value: 398 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 739', async () => {
    const payload: TestPayload = { id: '739_10', value: 136 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 739', async () => {
    const payload: TestPayload = { id: '739_11', value: 24 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 739', () => {
    const payload: TestPayload = { id: '739_12', value: 315 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
