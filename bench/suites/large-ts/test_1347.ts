import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1347', () => {
  it('sync TS test 0 of file 1347', () => {
    const payload: TestPayload = { id: '1347_0', value: 224 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1347', () => {
    const payload: TestPayload = { id: '1347_1', value: 167 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1347', () => {
    const payload: TestPayload = { id: '1347_2', value: 268 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1347', () => {
    const payload: TestPayload = { id: '1347_3', value: 353 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1347', () => {
    const payload: TestPayload = { id: '1347_4', value: 184 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1347', async () => {
    const payload: TestPayload = { id: '1347_5', value: 82 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1347', () => {
    const payload: TestPayload = { id: '1347_6', value: 97 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1347', () => {
    const payload: TestPayload = { id: '1347_7', value: 104 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1347', () => {
    const payload: TestPayload = { id: '1347_8', value: 437 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1347', async () => {
    const payload: TestPayload = { id: '1347_9', value: 218 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1347', async () => {
    const payload: TestPayload = { id: '1347_10', value: 53 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1347', () => {
    const payload: TestPayload = { id: '1347_11', value: 184 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1347', () => {
    const payload: TestPayload = { id: '1347_12', value: 124 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1347', async () => {
    const payload: TestPayload = { id: '1347_13', value: 6 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
