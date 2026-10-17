import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1230', () => {
  it('sync TS test 0 of file 1230', () => {
    const payload: TestPayload = { id: '1230_0', value: 89 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1230', () => {
    const payload: TestPayload = { id: '1230_1', value: 101 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1230', () => {
    const payload: TestPayload = { id: '1230_2', value: 49 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1230', async () => {
    const payload: TestPayload = { id: '1230_3', value: 244 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1230', () => {
    const payload: TestPayload = { id: '1230_4', value: 296 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1230', () => {
    const payload: TestPayload = { id: '1230_5', value: 144 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1230', async () => {
    const payload: TestPayload = { id: '1230_6', value: 158 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1230', async () => {
    const payload: TestPayload = { id: '1230_7', value: 200 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1230', async () => {
    const payload: TestPayload = { id: '1230_8', value: 249 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1230', () => {
    const payload: TestPayload = { id: '1230_9', value: 53 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1230', () => {
    const payload: TestPayload = { id: '1230_10', value: 117 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1230', async () => {
    const payload: TestPayload = { id: '1230_11', value: 18 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1230', () => {
    const payload: TestPayload = { id: '1230_12', value: 47 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1230', async () => {
    const payload: TestPayload = { id: '1230_13', value: 245 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
