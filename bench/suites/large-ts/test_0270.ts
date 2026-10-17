import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 270', () => {
  it('async TS test 0 of file 270', async () => {
    const payload: TestPayload = { id: '270_0', value: 454 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 270', async () => {
    const payload: TestPayload = { id: '270_1', value: 405 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 270', () => {
    const payload: TestPayload = { id: '270_2', value: 427 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 270', async () => {
    const payload: TestPayload = { id: '270_3', value: 420 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 270', async () => {
    const payload: TestPayload = { id: '270_4', value: 272 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 270', async () => {
    const payload: TestPayload = { id: '270_5', value: 106 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 270', () => {
    const payload: TestPayload = { id: '270_6', value: 479 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 270', () => {
    const payload: TestPayload = { id: '270_7', value: 222 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 270', () => {
    const payload: TestPayload = { id: '270_8', value: 384 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 270', () => {
    const payload: TestPayload = { id: '270_9', value: 10 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 270', async () => {
    const payload: TestPayload = { id: '270_10', value: 69 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 270', async () => {
    const payload: TestPayload = { id: '270_11', value: 84 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 270', () => {
    const payload: TestPayload = { id: '270_12', value: 166 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
