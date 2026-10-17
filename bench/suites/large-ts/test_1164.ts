import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1164', () => {
  it('sync TS test 0 of file 1164', () => {
    const payload: TestPayload = { id: '1164_0', value: 69 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1164', () => {
    const payload: TestPayload = { id: '1164_1', value: 375 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1164', () => {
    const payload: TestPayload = { id: '1164_2', value: 262 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1164', async () => {
    const payload: TestPayload = { id: '1164_3', value: 489 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1164', async () => {
    const payload: TestPayload = { id: '1164_4', value: 388 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1164', async () => {
    const payload: TestPayload = { id: '1164_5', value: 241 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1164', () => {
    const payload: TestPayload = { id: '1164_6', value: 255 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1164', async () => {
    const payload: TestPayload = { id: '1164_7', value: 149 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1164', () => {
    const payload: TestPayload = { id: '1164_8', value: 357 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1164', () => {
    const payload: TestPayload = { id: '1164_9', value: 39 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1164', () => {
    const payload: TestPayload = { id: '1164_10', value: 136 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1164', () => {
    const payload: TestPayload = { id: '1164_11', value: 20 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1164', () => {
    const payload: TestPayload = { id: '1164_12', value: 262 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1164', () => {
    const payload: TestPayload = { id: '1164_13', value: 192 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
