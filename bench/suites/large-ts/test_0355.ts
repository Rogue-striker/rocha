import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 355', () => {
  it('sync TS test 0 of file 355', () => {
    const payload: TestPayload = { id: '355_0', value: 141 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 355', () => {
    const payload: TestPayload = { id: '355_1', value: 284 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 355', async () => {
    const payload: TestPayload = { id: '355_2', value: 183 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 355', () => {
    const payload: TestPayload = { id: '355_3', value: 294 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 355', async () => {
    const payload: TestPayload = { id: '355_4', value: 478 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 355', () => {
    const payload: TestPayload = { id: '355_5', value: 453 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 355', () => {
    const payload: TestPayload = { id: '355_6', value: 152 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 355', async () => {
    const payload: TestPayload = { id: '355_7', value: 179 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 355', () => {
    const payload: TestPayload = { id: '355_8', value: 95 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 355', () => {
    const payload: TestPayload = { id: '355_9', value: 405 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 355', async () => {
    const payload: TestPayload = { id: '355_10', value: 207 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 355', async () => {
    const payload: TestPayload = { id: '355_11', value: 433 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 355', async () => {
    const payload: TestPayload = { id: '355_12', value: 72 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
