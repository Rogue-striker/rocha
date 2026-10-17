import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1104', () => {
  it('async TS test 0 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_0', value: 80 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_1', value: 414 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1104', () => {
    const payload: TestPayload = { id: '1104_2', value: 107 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1104', () => {
    const payload: TestPayload = { id: '1104_3', value: 443 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1104', () => {
    const payload: TestPayload = { id: '1104_4', value: 142 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_5', value: 185 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_6', value: 234 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_7', value: 163 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1104', () => {
    const payload: TestPayload = { id: '1104_8', value: 408 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_9', value: 62 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_10', value: 214 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1104', () => {
    const payload: TestPayload = { id: '1104_11', value: 33 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1104', async () => {
    const payload: TestPayload = { id: '1104_12', value: 205 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1104', () => {
    const payload: TestPayload = { id: '1104_13', value: 414 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
