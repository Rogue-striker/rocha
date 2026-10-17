import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1150', () => {
  it('async TS test 0 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_0', value: 179 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_1', value: 132 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1150', () => {
    const payload: TestPayload = { id: '1150_2', value: 170 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1150', () => {
    const payload: TestPayload = { id: '1150_3', value: 478 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_4', value: 174 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1150', () => {
    const payload: TestPayload = { id: '1150_5', value: 183 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_6', value: 350 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1150', () => {
    const payload: TestPayload = { id: '1150_7', value: 98 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_8', value: 340 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1150', () => {
    const payload: TestPayload = { id: '1150_9', value: 341 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1150', () => {
    const payload: TestPayload = { id: '1150_10', value: 376 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1150', () => {
    const payload: TestPayload = { id: '1150_11', value: 340 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_12', value: 252 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1150', async () => {
    const payload: TestPayload = { id: '1150_13', value: 225 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
