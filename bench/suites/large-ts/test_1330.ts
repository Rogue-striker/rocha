import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1330', () => {
  it('sync TS test 0 of file 1330', () => {
    const payload: TestPayload = { id: '1330_0', value: 145 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_1', value: 323 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1330', () => {
    const payload: TestPayload = { id: '1330_2', value: 423 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_3', value: 83 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_4', value: 205 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_5', value: 201 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_6', value: 257 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_7', value: 386 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_8', value: 119 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1330', () => {
    const payload: TestPayload = { id: '1330_9', value: 247 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_10', value: 89 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1330', () => {
    const payload: TestPayload = { id: '1330_11', value: 23 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1330', () => {
    const payload: TestPayload = { id: '1330_12', value: 360 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1330', async () => {
    const payload: TestPayload = { id: '1330_13', value: 344 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
