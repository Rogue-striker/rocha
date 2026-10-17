import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1401', () => {
  it('sync TS test 0 of file 1401', () => {
    const payload: TestPayload = { id: '1401_0', value: 218 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1401', async () => {
    const payload: TestPayload = { id: '1401_1', value: 146 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1401', async () => {
    const payload: TestPayload = { id: '1401_2', value: 229 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1401', () => {
    const payload: TestPayload = { id: '1401_3', value: 478 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1401', () => {
    const payload: TestPayload = { id: '1401_4', value: 474 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1401', async () => {
    const payload: TestPayload = { id: '1401_5', value: 255 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1401', () => {
    const payload: TestPayload = { id: '1401_6', value: 78 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1401', () => {
    const payload: TestPayload = { id: '1401_7', value: 174 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1401', () => {
    const payload: TestPayload = { id: '1401_8', value: 442 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1401', async () => {
    const payload: TestPayload = { id: '1401_9', value: 286 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1401', () => {
    const payload: TestPayload = { id: '1401_10', value: 387 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1401', async () => {
    const payload: TestPayload = { id: '1401_11', value: 121 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1401', () => {
    const payload: TestPayload = { id: '1401_12', value: 355 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1401', async () => {
    const payload: TestPayload = { id: '1401_13', value: 275 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
