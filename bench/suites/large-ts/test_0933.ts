import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 933', () => {
  it('sync TS test 0 of file 933', () => {
    const payload: TestPayload = { id: '933_0', value: 282 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 933', () => {
    const payload: TestPayload = { id: '933_1', value: 14 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 933', async () => {
    const payload: TestPayload = { id: '933_2', value: 241 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 933', async () => {
    const payload: TestPayload = { id: '933_3', value: 423 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 933', async () => {
    const payload: TestPayload = { id: '933_4', value: 200 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 933', async () => {
    const payload: TestPayload = { id: '933_5', value: 0 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 933', () => {
    const payload: TestPayload = { id: '933_6', value: 71 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 933', async () => {
    const payload: TestPayload = { id: '933_7', value: 480 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 933', async () => {
    const payload: TestPayload = { id: '933_8', value: 388 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 933', () => {
    const payload: TestPayload = { id: '933_9', value: 254 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 933', async () => {
    const payload: TestPayload = { id: '933_10', value: 336 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 933', () => {
    const payload: TestPayload = { id: '933_11', value: 108 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 933', () => {
    const payload: TestPayload = { id: '933_12', value: 33 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
