import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1136', () => {
  it('async TS test 0 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_0', value: 90 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_1', value: 409 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_2', value: 0 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1136', () => {
    const payload: TestPayload = { id: '1136_3', value: 492 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1136', () => {
    const payload: TestPayload = { id: '1136_4', value: 254 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_5', value: 349 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_6', value: 139 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_7', value: 404 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_8', value: 468 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_9', value: 118 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_10', value: 66 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_11', value: 79 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_12', value: 96 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1136', async () => {
    const payload: TestPayload = { id: '1136_13', value: 429 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
