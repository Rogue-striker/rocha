import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 336', () => {
  it('async TS test 0 of file 336', async () => {
    const payload: TestPayload = { id: '336_0', value: 96 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 336', async () => {
    const payload: TestPayload = { id: '336_1', value: 305 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 336', () => {
    const payload: TestPayload = { id: '336_2', value: 234 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 336', async () => {
    const payload: TestPayload = { id: '336_3', value: 329 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 336', async () => {
    const payload: TestPayload = { id: '336_4', value: 450 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 336', async () => {
    const payload: TestPayload = { id: '336_5', value: 417 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 336', async () => {
    const payload: TestPayload = { id: '336_6', value: 177 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 336', async () => {
    const payload: TestPayload = { id: '336_7', value: 56 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 336', () => {
    const payload: TestPayload = { id: '336_8', value: 282 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 336', () => {
    const payload: TestPayload = { id: '336_9', value: 154 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 336', async () => {
    const payload: TestPayload = { id: '336_10', value: 320 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 336', async () => {
    const payload: TestPayload = { id: '336_11', value: 309 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 336', () => {
    const payload: TestPayload = { id: '336_12', value: 418 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
