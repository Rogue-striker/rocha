import assert from 'node:assert';
import { computeMetric7, type Model7 } from './src/helper_7.ts';
import { computeMetric10 } from './src/helper_10.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1407', () => {
  it('async TS test 0 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_0', value: 483 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_1', value: 389 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_2', value: 354 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_3', value: 313 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_4', value: 157 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_5', value: 447 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1407', () => {
    const payload: TestPayload = { id: '1407_6', value: 423 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_7', value: 436 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_8', value: 395 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1407', () => {
    const payload: TestPayload = { id: '1407_9', value: 132 };
    const res = computeMetric7(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_10', value: 211 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_11', value: 123 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_12', value: 468 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1407', async () => {
    const payload: TestPayload = { id: '1407_13', value: 99 };
    const res1 = computeMetric7(payload.value);
    const res2 = computeMetric10(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
