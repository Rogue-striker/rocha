import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1181', () => {
  it('async TS test 0 of file 1181', async () => {
    const payload: TestPayload = { id: '1181_0', value: 161 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1181', () => {
    const payload: TestPayload = { id: '1181_1', value: 345 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1181', () => {
    const payload: TestPayload = { id: '1181_2', value: 70 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1181', () => {
    const payload: TestPayload = { id: '1181_3', value: 239 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1181', () => {
    const payload: TestPayload = { id: '1181_4', value: 140 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1181', () => {
    const payload: TestPayload = { id: '1181_5', value: 142 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1181', async () => {
    const payload: TestPayload = { id: '1181_6', value: 164 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1181', () => {
    const payload: TestPayload = { id: '1181_7', value: 183 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1181', () => {
    const payload: TestPayload = { id: '1181_8', value: 424 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1181', () => {
    const payload: TestPayload = { id: '1181_9', value: 113 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1181', async () => {
    const payload: TestPayload = { id: '1181_10', value: 485 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1181', () => {
    const payload: TestPayload = { id: '1181_11', value: 198 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1181', async () => {
    const payload: TestPayload = { id: '1181_12', value: 294 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1181', async () => {
    const payload: TestPayload = { id: '1181_13', value: 108 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
