import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1076', () => {
  it('async TS test 0 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_0', value: 111 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_1', value: 298 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_2', value: 5 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_3', value: 341 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1076', () => {
    const payload: TestPayload = { id: '1076_4', value: 61 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1076', () => {
    const payload: TestPayload = { id: '1076_5', value: 278 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1076', () => {
    const payload: TestPayload = { id: '1076_6', value: 388 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1076', () => {
    const payload: TestPayload = { id: '1076_7', value: 241 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_8', value: 492 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_9', value: 205 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1076', () => {
    const payload: TestPayload = { id: '1076_10', value: 378 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1076', () => {
    const payload: TestPayload = { id: '1076_11', value: 53 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_12', value: 52 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1076', async () => {
    const payload: TestPayload = { id: '1076_13', value: 70 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
