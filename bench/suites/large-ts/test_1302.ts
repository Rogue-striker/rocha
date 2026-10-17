import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1302', () => {
  it('async TS test 0 of file 1302', async () => {
    const payload: TestPayload = { id: '1302_0', value: 96 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1302', async () => {
    const payload: TestPayload = { id: '1302_1', value: 394 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1302', () => {
    const payload: TestPayload = { id: '1302_2', value: 485 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1302', async () => {
    const payload: TestPayload = { id: '1302_3', value: 136 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1302', () => {
    const payload: TestPayload = { id: '1302_4', value: 259 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1302', async () => {
    const payload: TestPayload = { id: '1302_5', value: 302 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1302', async () => {
    const payload: TestPayload = { id: '1302_6', value: 153 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1302', () => {
    const payload: TestPayload = { id: '1302_7', value: 331 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1302', () => {
    const payload: TestPayload = { id: '1302_8', value: 223 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1302', () => {
    const payload: TestPayload = { id: '1302_9', value: 318 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1302', () => {
    const payload: TestPayload = { id: '1302_10', value: 232 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1302', () => {
    const payload: TestPayload = { id: '1302_11', value: 179 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1302', async () => {
    const payload: TestPayload = { id: '1302_12', value: 57 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1302', () => {
    const payload: TestPayload = { id: '1302_13', value: 445 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
