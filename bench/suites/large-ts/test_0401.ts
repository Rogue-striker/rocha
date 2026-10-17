import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 401', () => {
  it('async TS test 0 of file 401', async () => {
    const payload: TestPayload = { id: '401_0', value: 445 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 401', () => {
    const payload: TestPayload = { id: '401_1', value: 421 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 401', async () => {
    const payload: TestPayload = { id: '401_2', value: 497 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 401', () => {
    const payload: TestPayload = { id: '401_3', value: 22 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 401', () => {
    const payload: TestPayload = { id: '401_4', value: 362 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 401', async () => {
    const payload: TestPayload = { id: '401_5', value: 216 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 401', () => {
    const payload: TestPayload = { id: '401_6', value: 304 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 401', () => {
    const payload: TestPayload = { id: '401_7', value: 498 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 401', () => {
    const payload: TestPayload = { id: '401_8', value: 102 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 401', () => {
    const payload: TestPayload = { id: '401_9', value: 258 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 401', async () => {
    const payload: TestPayload = { id: '401_10', value: 208 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 401', () => {
    const payload: TestPayload = { id: '401_11', value: 429 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 401', async () => {
    const payload: TestPayload = { id: '401_12', value: 77 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
