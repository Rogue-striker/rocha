import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 965', () => {
  it('async TS test 0 of file 965', async () => {
    const payload: TestPayload = { id: '965_0', value: 294 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 965', async () => {
    const payload: TestPayload = { id: '965_1', value: 65 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 965', () => {
    const payload: TestPayload = { id: '965_2', value: 9 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 965', async () => {
    const payload: TestPayload = { id: '965_3', value: 100 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 965', () => {
    const payload: TestPayload = { id: '965_4', value: 388 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 965', () => {
    const payload: TestPayload = { id: '965_5', value: 417 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 965', () => {
    const payload: TestPayload = { id: '965_6', value: 82 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 965', async () => {
    const payload: TestPayload = { id: '965_7', value: 242 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 965', () => {
    const payload: TestPayload = { id: '965_8', value: 196 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 965', async () => {
    const payload: TestPayload = { id: '965_9', value: 340 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 965', () => {
    const payload: TestPayload = { id: '965_10', value: 148 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 965', async () => {
    const payload: TestPayload = { id: '965_11', value: 29 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 965', () => {
    const payload: TestPayload = { id: '965_12', value: 424 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
