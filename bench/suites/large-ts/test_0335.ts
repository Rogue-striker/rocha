import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 335', () => {
  it('async TS test 0 of file 335', async () => {
    const payload: TestPayload = { id: '335_0', value: 335 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 335', async () => {
    const payload: TestPayload = { id: '335_1', value: 33 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 335', async () => {
    const payload: TestPayload = { id: '335_2', value: 475 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 335', async () => {
    const payload: TestPayload = { id: '335_3', value: 273 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 335', () => {
    const payload: TestPayload = { id: '335_4', value: 344 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 335', () => {
    const payload: TestPayload = { id: '335_5', value: 118 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 335', () => {
    const payload: TestPayload = { id: '335_6', value: 416 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 335', () => {
    const payload: TestPayload = { id: '335_7', value: 277 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 335', () => {
    const payload: TestPayload = { id: '335_8', value: 290 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 335', () => {
    const payload: TestPayload = { id: '335_9', value: 385 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 335', async () => {
    const payload: TestPayload = { id: '335_10', value: 130 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 335', () => {
    const payload: TestPayload = { id: '335_11', value: 495 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 335', () => {
    const payload: TestPayload = { id: '335_12', value: 264 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
