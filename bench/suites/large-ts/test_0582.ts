import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 582', () => {
  it('async TS test 0 of file 582', async () => {
    const payload: TestPayload = { id: '582_0', value: 192 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 582', () => {
    const payload: TestPayload = { id: '582_1', value: 174 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 582', async () => {
    const payload: TestPayload = { id: '582_2', value: 384 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 582', () => {
    const payload: TestPayload = { id: '582_3', value: 459 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 582', async () => {
    const payload: TestPayload = { id: '582_4', value: 95 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 582', () => {
    const payload: TestPayload = { id: '582_5', value: 421 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 582', () => {
    const payload: TestPayload = { id: '582_6', value: 1 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 582', async () => {
    const payload: TestPayload = { id: '582_7', value: 340 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 582', () => {
    const payload: TestPayload = { id: '582_8', value: 214 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 582', async () => {
    const payload: TestPayload = { id: '582_9', value: 321 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 582', async () => {
    const payload: TestPayload = { id: '582_10', value: 317 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 582', async () => {
    const payload: TestPayload = { id: '582_11', value: 232 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 582', () => {
    const payload: TestPayload = { id: '582_12', value: 468 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
