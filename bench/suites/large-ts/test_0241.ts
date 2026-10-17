import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 241', () => {
  it('sync TS test 0 of file 241', () => {
    const payload: TestPayload = { id: '241_0', value: 207 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 241', async () => {
    const payload: TestPayload = { id: '241_1', value: 5 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 241', async () => {
    const payload: TestPayload = { id: '241_2', value: 92 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 241', async () => {
    const payload: TestPayload = { id: '241_3', value: 294 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 241', async () => {
    const payload: TestPayload = { id: '241_4', value: 475 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 241', () => {
    const payload: TestPayload = { id: '241_5', value: 176 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 241', () => {
    const payload: TestPayload = { id: '241_6', value: 303 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 241', async () => {
    const payload: TestPayload = { id: '241_7', value: 305 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 241', async () => {
    const payload: TestPayload = { id: '241_8', value: 393 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 241', async () => {
    const payload: TestPayload = { id: '241_9', value: 330 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 241', async () => {
    const payload: TestPayload = { id: '241_10', value: 169 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 241', () => {
    const payload: TestPayload = { id: '241_11', value: 46 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 241', async () => {
    const payload: TestPayload = { id: '241_12', value: 11 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
