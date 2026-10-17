import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 252', () => {
  it('sync TS test 0 of file 252', () => {
    const payload: TestPayload = { id: '252_0', value: 118 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 252', () => {
    const payload: TestPayload = { id: '252_1', value: 46 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 252', () => {
    const payload: TestPayload = { id: '252_2', value: 145 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 252', () => {
    const payload: TestPayload = { id: '252_3', value: 128 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 252', () => {
    const payload: TestPayload = { id: '252_4', value: 3 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 252', async () => {
    const payload: TestPayload = { id: '252_5', value: 25 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 252', async () => {
    const payload: TestPayload = { id: '252_6', value: 17 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 252', () => {
    const payload: TestPayload = { id: '252_7', value: 457 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 252', () => {
    const payload: TestPayload = { id: '252_8', value: 446 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 252', async () => {
    const payload: TestPayload = { id: '252_9', value: 391 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 252', () => {
    const payload: TestPayload = { id: '252_10', value: 37 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 252', () => {
    const payload: TestPayload = { id: '252_11', value: 245 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 252', async () => {
    const payload: TestPayload = { id: '252_12', value: 319 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
