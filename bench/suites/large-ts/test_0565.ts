import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 565', () => {
  it('async TS test 0 of file 565', async () => {
    const payload: TestPayload = { id: '565_0', value: 111 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 565', async () => {
    const payload: TestPayload = { id: '565_1', value: 315 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 565', async () => {
    const payload: TestPayload = { id: '565_2', value: 206 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 565', () => {
    const payload: TestPayload = { id: '565_3', value: 425 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 565', async () => {
    const payload: TestPayload = { id: '565_4', value: 169 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 565', async () => {
    const payload: TestPayload = { id: '565_5', value: 291 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 565', async () => {
    const payload: TestPayload = { id: '565_6', value: 445 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 565', () => {
    const payload: TestPayload = { id: '565_7', value: 497 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 565', async () => {
    const payload: TestPayload = { id: '565_8', value: 203 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 565', async () => {
    const payload: TestPayload = { id: '565_9', value: 182 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 565', () => {
    const payload: TestPayload = { id: '565_10', value: 228 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 565', async () => {
    const payload: TestPayload = { id: '565_11', value: 456 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 565', () => {
    const payload: TestPayload = { id: '565_12', value: 342 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
