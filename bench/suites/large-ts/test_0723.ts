import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 723', () => {
  it('sync TS test 0 of file 723', () => {
    const payload: TestPayload = { id: '723_0', value: 340 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 723', () => {
    const payload: TestPayload = { id: '723_1', value: 439 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 723', () => {
    const payload: TestPayload = { id: '723_2', value: 154 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 723', async () => {
    const payload: TestPayload = { id: '723_3', value: 275 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 723', () => {
    const payload: TestPayload = { id: '723_4', value: 202 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 723', () => {
    const payload: TestPayload = { id: '723_5', value: 13 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 723', async () => {
    const payload: TestPayload = { id: '723_6', value: 403 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 723', () => {
    const payload: TestPayload = { id: '723_7', value: 425 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 723', () => {
    const payload: TestPayload = { id: '723_8', value: 253 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 723', () => {
    const payload: TestPayload = { id: '723_9', value: 229 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 723', async () => {
    const payload: TestPayload = { id: '723_10', value: 452 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 723', async () => {
    const payload: TestPayload = { id: '723_11', value: 377 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 723', async () => {
    const payload: TestPayload = { id: '723_12', value: 61 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
