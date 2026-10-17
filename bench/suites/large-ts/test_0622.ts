import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 622', () => {
  it('sync TS test 0 of file 622', () => {
    const payload: TestPayload = { id: '622_0', value: 257 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 622', async () => {
    const payload: TestPayload = { id: '622_1', value: 95 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 622', () => {
    const payload: TestPayload = { id: '622_2', value: 402 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 622', () => {
    const payload: TestPayload = { id: '622_3', value: 465 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 622', () => {
    const payload: TestPayload = { id: '622_4', value: 281 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 622', () => {
    const payload: TestPayload = { id: '622_5', value: 282 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 622', () => {
    const payload: TestPayload = { id: '622_6', value: 42 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 622', async () => {
    const payload: TestPayload = { id: '622_7', value: 357 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 622', async () => {
    const payload: TestPayload = { id: '622_8', value: 388 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 622', async () => {
    const payload: TestPayload = { id: '622_9', value: 490 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 622', () => {
    const payload: TestPayload = { id: '622_10', value: 30 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 622', () => {
    const payload: TestPayload = { id: '622_11', value: 226 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 622', async () => {
    const payload: TestPayload = { id: '622_12', value: 106 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
