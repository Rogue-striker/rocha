import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 261', () => {
  it('async TS test 0 of file 261', async () => {
    const payload: TestPayload = { id: '261_0', value: 259 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 261', async () => {
    const payload: TestPayload = { id: '261_1', value: 474 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 261', async () => {
    const payload: TestPayload = { id: '261_2', value: 46 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 261', () => {
    const payload: TestPayload = { id: '261_3', value: 195 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 261', async () => {
    const payload: TestPayload = { id: '261_4', value: 139 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 261', async () => {
    const payload: TestPayload = { id: '261_5', value: 304 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 261', () => {
    const payload: TestPayload = { id: '261_6', value: 127 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 261', () => {
    const payload: TestPayload = { id: '261_7', value: 357 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 261', () => {
    const payload: TestPayload = { id: '261_8', value: 322 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 261', async () => {
    const payload: TestPayload = { id: '261_9', value: 315 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 261', async () => {
    const payload: TestPayload = { id: '261_10', value: 191 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 261', () => {
    const payload: TestPayload = { id: '261_11', value: 140 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 261', () => {
    const payload: TestPayload = { id: '261_12', value: 197 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
