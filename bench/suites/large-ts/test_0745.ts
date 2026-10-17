import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 745', () => {
  it('async TS test 0 of file 745', async () => {
    const payload: TestPayload = { id: '745_0', value: 199 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 745', async () => {
    const payload: TestPayload = { id: '745_1', value: 431 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 745', () => {
    const payload: TestPayload = { id: '745_2', value: 315 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 745', () => {
    const payload: TestPayload = { id: '745_3', value: 110 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 745', () => {
    const payload: TestPayload = { id: '745_4', value: 420 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 745', async () => {
    const payload: TestPayload = { id: '745_5', value: 184 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 745', () => {
    const payload: TestPayload = { id: '745_6', value: 157 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 745', () => {
    const payload: TestPayload = { id: '745_7', value: 256 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 745', () => {
    const payload: TestPayload = { id: '745_8', value: 410 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 745', () => {
    const payload: TestPayload = { id: '745_9', value: 162 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 745', () => {
    const payload: TestPayload = { id: '745_10', value: 26 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 745', async () => {
    const payload: TestPayload = { id: '745_11', value: 30 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 745', () => {
    const payload: TestPayload = { id: '745_12', value: 311 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
