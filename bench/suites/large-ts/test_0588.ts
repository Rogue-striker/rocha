import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 588', () => {
  it('sync TS test 0 of file 588', () => {
    const payload: TestPayload = { id: '588_0', value: 198 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 588', async () => {
    const payload: TestPayload = { id: '588_1', value: 152 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 588', () => {
    const payload: TestPayload = { id: '588_2', value: 143 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 588', () => {
    const payload: TestPayload = { id: '588_3', value: 148 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 588', () => {
    const payload: TestPayload = { id: '588_4', value: 303 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 588', async () => {
    const payload: TestPayload = { id: '588_5', value: 258 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 588', () => {
    const payload: TestPayload = { id: '588_6', value: 432 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 588', async () => {
    const payload: TestPayload = { id: '588_7', value: 212 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 588', async () => {
    const payload: TestPayload = { id: '588_8', value: 268 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 588', async () => {
    const payload: TestPayload = { id: '588_9', value: 81 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 588', () => {
    const payload: TestPayload = { id: '588_10', value: 156 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 588', () => {
    const payload: TestPayload = { id: '588_11', value: 396 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 588', async () => {
    const payload: TestPayload = { id: '588_12', value: 307 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
