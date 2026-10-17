import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 732', () => {
  it('sync TS test 0 of file 732', () => {
    const payload: TestPayload = { id: '732_0', value: 34 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 732', () => {
    const payload: TestPayload = { id: '732_1', value: 176 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 732', () => {
    const payload: TestPayload = { id: '732_2', value: 165 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 732', () => {
    const payload: TestPayload = { id: '732_3', value: 137 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 732', () => {
    const payload: TestPayload = { id: '732_4', value: 371 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 732', async () => {
    const payload: TestPayload = { id: '732_5', value: 471 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 732', () => {
    const payload: TestPayload = { id: '732_6', value: 156 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 732', async () => {
    const payload: TestPayload = { id: '732_7', value: 382 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 732', () => {
    const payload: TestPayload = { id: '732_8', value: 499 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 732', () => {
    const payload: TestPayload = { id: '732_9', value: 118 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 732', () => {
    const payload: TestPayload = { id: '732_10', value: 137 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 732', () => {
    const payload: TestPayload = { id: '732_11', value: 495 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 732', () => {
    const payload: TestPayload = { id: '732_12', value: 231 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
