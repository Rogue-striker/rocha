import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 236', () => {
  it('async TS test 0 of file 236', async () => {
    const payload: TestPayload = { id: '236_0', value: 189 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 236', () => {
    const payload: TestPayload = { id: '236_1', value: 248 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 236', async () => {
    const payload: TestPayload = { id: '236_2', value: 87 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 236', () => {
    const payload: TestPayload = { id: '236_3', value: 133 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 236', () => {
    const payload: TestPayload = { id: '236_4', value: 354 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 236', () => {
    const payload: TestPayload = { id: '236_5', value: 42 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 236', async () => {
    const payload: TestPayload = { id: '236_6', value: 48 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 236', async () => {
    const payload: TestPayload = { id: '236_7', value: 296 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 236', async () => {
    const payload: TestPayload = { id: '236_8', value: 383 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 236', async () => {
    const payload: TestPayload = { id: '236_9', value: 319 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 236', async () => {
    const payload: TestPayload = { id: '236_10', value: 266 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 236', () => {
    const payload: TestPayload = { id: '236_11', value: 456 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 236', async () => {
    const payload: TestPayload = { id: '236_12', value: 29 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
