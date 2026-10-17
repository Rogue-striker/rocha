import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1056', () => {
  it('async TS test 0 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_0', value: 384 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1056', () => {
    const payload: TestPayload = { id: '1056_1', value: 447 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_2', value: 339 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_3', value: 392 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1056', () => {
    const payload: TestPayload = { id: '1056_4', value: 435 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_5', value: 485 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_6', value: 119 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_7', value: 78 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_8', value: 463 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1056', () => {
    const payload: TestPayload = { id: '1056_9', value: 423 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_10', value: 367 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_11', value: 153 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_12', value: 171 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1056', async () => {
    const payload: TestPayload = { id: '1056_13', value: 134 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
