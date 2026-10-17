import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1367', () => {
  it('sync TS test 0 of file 1367', () => {
    const payload: TestPayload = { id: '1367_0', value: 397 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1367', () => {
    const payload: TestPayload = { id: '1367_1', value: 266 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1367', async () => {
    const payload: TestPayload = { id: '1367_2', value: 421 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1367', () => {
    const payload: TestPayload = { id: '1367_3', value: 114 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1367', () => {
    const payload: TestPayload = { id: '1367_4', value: 131 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1367', () => {
    const payload: TestPayload = { id: '1367_5', value: 361 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1367', () => {
    const payload: TestPayload = { id: '1367_6', value: 24 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1367', async () => {
    const payload: TestPayload = { id: '1367_7', value: 310 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1367', async () => {
    const payload: TestPayload = { id: '1367_8', value: 321 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1367', () => {
    const payload: TestPayload = { id: '1367_9', value: 146 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1367', async () => {
    const payload: TestPayload = { id: '1367_10', value: 491 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1367', async () => {
    const payload: TestPayload = { id: '1367_11', value: 229 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1367', async () => {
    const payload: TestPayload = { id: '1367_12', value: 317 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1367', () => {
    const payload: TestPayload = { id: '1367_13', value: 130 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
