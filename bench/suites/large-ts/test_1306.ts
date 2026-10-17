import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1306', () => {
  it('sync TS test 0 of file 1306', () => {
    const payload: TestPayload = { id: '1306_0', value: 216 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1306', () => {
    const payload: TestPayload = { id: '1306_1', value: 435 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1306', () => {
    const payload: TestPayload = { id: '1306_2', value: 376 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1306', async () => {
    const payload: TestPayload = { id: '1306_3', value: 174 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1306', () => {
    const payload: TestPayload = { id: '1306_4', value: 177 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1306', async () => {
    const payload: TestPayload = { id: '1306_5', value: 66 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1306', () => {
    const payload: TestPayload = { id: '1306_6', value: 215 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1306', () => {
    const payload: TestPayload = { id: '1306_7', value: 260 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1306', () => {
    const payload: TestPayload = { id: '1306_8', value: 464 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1306', () => {
    const payload: TestPayload = { id: '1306_9', value: 452 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1306', () => {
    const payload: TestPayload = { id: '1306_10', value: 63 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1306', async () => {
    const payload: TestPayload = { id: '1306_11', value: 2 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1306', async () => {
    const payload: TestPayload = { id: '1306_12', value: 461 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1306', () => {
    const payload: TestPayload = { id: '1306_13', value: 28 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
