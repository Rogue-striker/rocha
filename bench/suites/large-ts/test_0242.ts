import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 242', () => {
  it('async TS test 0 of file 242', async () => {
    const payload: TestPayload = { id: '242_0', value: 112 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 242', () => {
    const payload: TestPayload = { id: '242_1', value: 204 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 242', async () => {
    const payload: TestPayload = { id: '242_2', value: 408 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 242', async () => {
    const payload: TestPayload = { id: '242_3', value: 200 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 242', async () => {
    const payload: TestPayload = { id: '242_4', value: 387 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 242', () => {
    const payload: TestPayload = { id: '242_5', value: 180 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 242', () => {
    const payload: TestPayload = { id: '242_6', value: 267 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 242', () => {
    const payload: TestPayload = { id: '242_7', value: 245 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 242', () => {
    const payload: TestPayload = { id: '242_8', value: 62 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 242', async () => {
    const payload: TestPayload = { id: '242_9', value: 56 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 242', async () => {
    const payload: TestPayload = { id: '242_10', value: 232 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 242', async () => {
    const payload: TestPayload = { id: '242_11', value: 380 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 242', async () => {
    const payload: TestPayload = { id: '242_12', value: 464 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
