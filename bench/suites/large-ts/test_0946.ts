import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 946', () => {
  it('async TS test 0 of file 946', async () => {
    const payload: TestPayload = { id: '946_0', value: 456 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 946', () => {
    const payload: TestPayload = { id: '946_1', value: 93 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 946', async () => {
    const payload: TestPayload = { id: '946_2', value: 155 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 946', async () => {
    const payload: TestPayload = { id: '946_3', value: 381 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 946', async () => {
    const payload: TestPayload = { id: '946_4', value: 239 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 946', async () => {
    const payload: TestPayload = { id: '946_5', value: 401 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 946', () => {
    const payload: TestPayload = { id: '946_6', value: 123 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 946', () => {
    const payload: TestPayload = { id: '946_7', value: 342 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 946', () => {
    const payload: TestPayload = { id: '946_8', value: 54 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 946', () => {
    const payload: TestPayload = { id: '946_9', value: 424 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 946', () => {
    const payload: TestPayload = { id: '946_10', value: 371 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 946', () => {
    const payload: TestPayload = { id: '946_11', value: 20 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 946', async () => {
    const payload: TestPayload = { id: '946_12', value: 331 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
