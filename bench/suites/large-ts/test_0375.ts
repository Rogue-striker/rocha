import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 375', () => {
  it('async TS test 0 of file 375', async () => {
    const payload: TestPayload = { id: '375_0', value: 383 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 375', async () => {
    const payload: TestPayload = { id: '375_1', value: 333 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 375', () => {
    const payload: TestPayload = { id: '375_2', value: 299 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 375', () => {
    const payload: TestPayload = { id: '375_3', value: 269 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 375', () => {
    const payload: TestPayload = { id: '375_4', value: 428 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 375', async () => {
    const payload: TestPayload = { id: '375_5', value: 235 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 375', async () => {
    const payload: TestPayload = { id: '375_6', value: 275 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 375', () => {
    const payload: TestPayload = { id: '375_7', value: 41 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 375', async () => {
    const payload: TestPayload = { id: '375_8', value: 362 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 375', () => {
    const payload: TestPayload = { id: '375_9', value: 496 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 375', async () => {
    const payload: TestPayload = { id: '375_10', value: 339 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 375', () => {
    const payload: TestPayload = { id: '375_11', value: 245 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 375', async () => {
    const payload: TestPayload = { id: '375_12', value: 28 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
