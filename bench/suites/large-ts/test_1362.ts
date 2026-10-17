import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1362', () => {
  it('async TS test 0 of file 1362', async () => {
    const payload: TestPayload = { id: '1362_0', value: 233 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1362', () => {
    const payload: TestPayload = { id: '1362_1', value: 168 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1362', async () => {
    const payload: TestPayload = { id: '1362_2', value: 443 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1362', () => {
    const payload: TestPayload = { id: '1362_3', value: 247 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1362', async () => {
    const payload: TestPayload = { id: '1362_4', value: 95 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1362', async () => {
    const payload: TestPayload = { id: '1362_5', value: 49 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1362', () => {
    const payload: TestPayload = { id: '1362_6', value: 356 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1362', () => {
    const payload: TestPayload = { id: '1362_7', value: 173 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1362', async () => {
    const payload: TestPayload = { id: '1362_8', value: 242 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1362', () => {
    const payload: TestPayload = { id: '1362_9', value: 321 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1362', () => {
    const payload: TestPayload = { id: '1362_10', value: 89 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1362', async () => {
    const payload: TestPayload = { id: '1362_11', value: 145 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1362', () => {
    const payload: TestPayload = { id: '1362_12', value: 37 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1362', () => {
    const payload: TestPayload = { id: '1362_13', value: 221 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
