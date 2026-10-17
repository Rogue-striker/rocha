import assert from 'node:assert';
import { computeMetric2, type Model2 } from './src/helper_2.ts';
import { computeMetric5 } from './src/helper_5.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 702', () => {
  it('async TS test 0 of file 702', async () => {
    const payload: TestPayload = { id: '702_0', value: 210 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 702', () => {
    const payload: TestPayload = { id: '702_1', value: 281 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 702', () => {
    const payload: TestPayload = { id: '702_2', value: 451 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 702', async () => {
    const payload: TestPayload = { id: '702_3', value: 296 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 702', async () => {
    const payload: TestPayload = { id: '702_4', value: 490 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 702', async () => {
    const payload: TestPayload = { id: '702_5', value: 373 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 702', async () => {
    const payload: TestPayload = { id: '702_6', value: 447 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 702', () => {
    const payload: TestPayload = { id: '702_7', value: 427 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 702', async () => {
    const payload: TestPayload = { id: '702_8', value: 173 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 702', () => {
    const payload: TestPayload = { id: '702_9', value: 19 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 702', async () => {
    const payload: TestPayload = { id: '702_10', value: 310 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 702', () => {
    const payload: TestPayload = { id: '702_11', value: 249 };
    const res = computeMetric2(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 702', async () => {
    const payload: TestPayload = { id: '702_12', value: 385 };
    const res1 = computeMetric2(payload.value);
    const res2 = computeMetric5(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
