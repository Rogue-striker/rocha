import assert from 'node:assert';
import { computeMetric1, type Model1 } from './src/helper_1.ts';
import { computeMetric4 } from './src/helper_4.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1481', () => {
  it('async TS test 0 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_0', value: 27 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1481', () => {
    const payload: TestPayload = { id: '1481_1', value: 481 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_2', value: 465 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1481', () => {
    const payload: TestPayload = { id: '1481_3', value: 355 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1481', () => {
    const payload: TestPayload = { id: '1481_4', value: 236 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_5', value: 143 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_6', value: 229 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1481', () => {
    const payload: TestPayload = { id: '1481_7', value: 296 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_8', value: 79 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1481', () => {
    const payload: TestPayload = { id: '1481_9', value: 368 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_10', value: 30 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1481', async () => {
    const payload: TestPayload = { id: '1481_11', value: 6 };
    const res1 = computeMetric1(payload.value);
    const res2 = computeMetric4(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1481', () => {
    const payload: TestPayload = { id: '1481_12', value: 217 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1481', () => {
    const payload: TestPayload = { id: '1481_13', value: 85 };
    const res = computeMetric1(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
