import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 22', () => {
  it('async TS test 0 of file 22', async () => {
    const payload: TestPayload = { id: '22_0', value: 273 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 22', async () => {
    const payload: TestPayload = { id: '22_1', value: 448 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 22', async () => {
    const payload: TestPayload = { id: '22_2', value: 0 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 22', () => {
    const payload: TestPayload = { id: '22_3', value: 47 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 22', async () => {
    const payload: TestPayload = { id: '22_4', value: 0 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 22', () => {
    const payload: TestPayload = { id: '22_5', value: 261 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 22', () => {
    const payload: TestPayload = { id: '22_6', value: 372 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 22', async () => {
    const payload: TestPayload = { id: '22_7', value: 0 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 22', async () => {
    const payload: TestPayload = { id: '22_8', value: 412 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 22', () => {
    const payload: TestPayload = { id: '22_9', value: 99 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 22', async () => {
    const payload: TestPayload = { id: '22_10', value: 326 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 22', () => {
    const payload: TestPayload = { id: '22_11', value: 313 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 22', async () => {
    const payload: TestPayload = { id: '22_12', value: 425 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
