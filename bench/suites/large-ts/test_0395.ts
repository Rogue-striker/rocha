import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 395', () => {
  it('async TS test 0 of file 395', async () => {
    const payload: TestPayload = { id: '395_0', value: 102 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 395', async () => {
    const payload: TestPayload = { id: '395_1', value: 342 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 395', () => {
    const payload: TestPayload = { id: '395_2', value: 135 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 395', async () => {
    const payload: TestPayload = { id: '395_3', value: 483 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 395', async () => {
    const payload: TestPayload = { id: '395_4', value: 407 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 395', async () => {
    const payload: TestPayload = { id: '395_5', value: 225 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 395', async () => {
    const payload: TestPayload = { id: '395_6', value: 78 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 395', async () => {
    const payload: TestPayload = { id: '395_7', value: 327 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 395', async () => {
    const payload: TestPayload = { id: '395_8', value: 399 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 395', () => {
    const payload: TestPayload = { id: '395_9', value: 418 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 395', async () => {
    const payload: TestPayload = { id: '395_10', value: 389 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 395', async () => {
    const payload: TestPayload = { id: '395_11', value: 249 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 395', async () => {
    const payload: TestPayload = { id: '395_12', value: 61 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
