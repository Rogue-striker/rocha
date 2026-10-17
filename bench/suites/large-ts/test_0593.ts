import assert from 'node:assert';
import { computeMetric13, type Model13 } from './src/helper_13.ts';
import { computeMetric16 } from './src/helper_16.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 593', () => {
  it('async TS test 0 of file 593', async () => {
    const payload: TestPayload = { id: '593_0', value: 193 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 593', async () => {
    const payload: TestPayload = { id: '593_1', value: 4 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 593', async () => {
    const payload: TestPayload = { id: '593_2', value: 90 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 593', () => {
    const payload: TestPayload = { id: '593_3', value: 136 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 593', async () => {
    const payload: TestPayload = { id: '593_4', value: 490 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 593', () => {
    const payload: TestPayload = { id: '593_5', value: 226 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 593', async () => {
    const payload: TestPayload = { id: '593_6', value: 88 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 593', async () => {
    const payload: TestPayload = { id: '593_7', value: 385 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 593', () => {
    const payload: TestPayload = { id: '593_8', value: 188 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 593', () => {
    const payload: TestPayload = { id: '593_9', value: 437 };
    const res = computeMetric13(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 593', async () => {
    const payload: TestPayload = { id: '593_10', value: 232 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 593', async () => {
    const payload: TestPayload = { id: '593_11', value: 123 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 593', async () => {
    const payload: TestPayload = { id: '593_12', value: 142 };
    const res1 = computeMetric13(payload.value);
    const res2 = computeMetric16(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
