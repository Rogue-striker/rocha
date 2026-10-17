import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1430', () => {
  it('async TS test 0 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_0', value: 397 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_1', value: 167 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_2', value: 210 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1430', () => {
    const payload: TestPayload = { id: '1430_3', value: 258 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1430', () => {
    const payload: TestPayload = { id: '1430_4', value: 365 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1430', () => {
    const payload: TestPayload = { id: '1430_5', value: 405 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_6', value: 491 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1430', () => {
    const payload: TestPayload = { id: '1430_7', value: 227 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_8', value: 330 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_9', value: 466 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_10', value: 385 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1430', () => {
    const payload: TestPayload = { id: '1430_11', value: 150 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1430', () => {
    const payload: TestPayload = { id: '1430_12', value: 276 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1430', async () => {
    const payload: TestPayload = { id: '1430_13', value: 169 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
