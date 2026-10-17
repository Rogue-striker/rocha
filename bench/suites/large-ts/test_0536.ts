import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 536', () => {
  it('sync TS test 0 of file 536', () => {
    const payload: TestPayload = { id: '536_0', value: 474 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 536', () => {
    const payload: TestPayload = { id: '536_1', value: 232 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 536', () => {
    const payload: TestPayload = { id: '536_2', value: 330 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 536', () => {
    const payload: TestPayload = { id: '536_3', value: 303 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 536', () => {
    const payload: TestPayload = { id: '536_4', value: 110 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 536', async () => {
    const payload: TestPayload = { id: '536_5', value: 24 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 536', async () => {
    const payload: TestPayload = { id: '536_6', value: 234 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 536', async () => {
    const payload: TestPayload = { id: '536_7', value: 143 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 536', async () => {
    const payload: TestPayload = { id: '536_8', value: 38 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 536', () => {
    const payload: TestPayload = { id: '536_9', value: 182 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 536', async () => {
    const payload: TestPayload = { id: '536_10', value: 213 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 536', async () => {
    const payload: TestPayload = { id: '536_11', value: 233 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 536', async () => {
    const payload: TestPayload = { id: '536_12', value: 385 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
