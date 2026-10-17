import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 742', () => {
  it('sync TS test 0 of file 742', () => {
    const payload: TestPayload = { id: '742_0', value: 407 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 742', async () => {
    const payload: TestPayload = { id: '742_1', value: 104 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 742', async () => {
    const payload: TestPayload = { id: '742_2', value: 409 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 742', () => {
    const payload: TestPayload = { id: '742_3', value: 284 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 742', () => {
    const payload: TestPayload = { id: '742_4', value: 467 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 742', async () => {
    const payload: TestPayload = { id: '742_5', value: 433 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 742', () => {
    const payload: TestPayload = { id: '742_6', value: 422 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 742', () => {
    const payload: TestPayload = { id: '742_7', value: 382 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 742', () => {
    const payload: TestPayload = { id: '742_8', value: 339 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 742', async () => {
    const payload: TestPayload = { id: '742_9', value: 153 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 742', async () => {
    const payload: TestPayload = { id: '742_10', value: 479 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 742', () => {
    const payload: TestPayload = { id: '742_11', value: 54 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 742', async () => {
    const payload: TestPayload = { id: '742_12', value: 240 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
