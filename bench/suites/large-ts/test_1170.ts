import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1170', () => {
  it('sync TS test 0 of file 1170', () => {
    const payload: TestPayload = { id: '1170_0', value: 177 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1170', async () => {
    const payload: TestPayload = { id: '1170_1', value: 229 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1170', async () => {
    const payload: TestPayload = { id: '1170_2', value: 204 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1170', async () => {
    const payload: TestPayload = { id: '1170_3', value: 18 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1170', async () => {
    const payload: TestPayload = { id: '1170_4', value: 223 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1170', () => {
    const payload: TestPayload = { id: '1170_5', value: 307 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1170', () => {
    const payload: TestPayload = { id: '1170_6', value: 276 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1170', () => {
    const payload: TestPayload = { id: '1170_7', value: 293 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1170', () => {
    const payload: TestPayload = { id: '1170_8', value: 161 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1170', async () => {
    const payload: TestPayload = { id: '1170_9', value: 74 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1170', () => {
    const payload: TestPayload = { id: '1170_10', value: 430 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1170', async () => {
    const payload: TestPayload = { id: '1170_11', value: 78 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1170', () => {
    const payload: TestPayload = { id: '1170_12', value: 162 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1170', () => {
    const payload: TestPayload = { id: '1170_13', value: 449 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
