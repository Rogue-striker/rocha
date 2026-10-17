import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 830', () => {
  it('sync TS test 0 of file 830', () => {
    const payload: TestPayload = { id: '830_0', value: 111 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 830', () => {
    const payload: TestPayload = { id: '830_1', value: 38 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 830', () => {
    const payload: TestPayload = { id: '830_2', value: 459 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 830', async () => {
    const payload: TestPayload = { id: '830_3', value: 159 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 830', () => {
    const payload: TestPayload = { id: '830_4', value: 5 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 830', () => {
    const payload: TestPayload = { id: '830_5', value: 39 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 830', () => {
    const payload: TestPayload = { id: '830_6', value: 378 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 830', async () => {
    const payload: TestPayload = { id: '830_7', value: 454 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 830', () => {
    const payload: TestPayload = { id: '830_8', value: 11 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 830', () => {
    const payload: TestPayload = { id: '830_9', value: 205 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 830', () => {
    const payload: TestPayload = { id: '830_10', value: 48 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 830', () => {
    const payload: TestPayload = { id: '830_11', value: 196 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 830', () => {
    const payload: TestPayload = { id: '830_12', value: 322 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
