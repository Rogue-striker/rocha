import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1335', () => {
  it('async TS test 0 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_0', value: 487 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_1', value: 291 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1335', () => {
    const payload: TestPayload = { id: '1335_2', value: 73 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_3', value: 11 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_4', value: 256 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_5', value: 97 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_6', value: 18 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1335', () => {
    const payload: TestPayload = { id: '1335_7', value: 463 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_8', value: 37 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1335', () => {
    const payload: TestPayload = { id: '1335_9', value: 84 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1335', () => {
    const payload: TestPayload = { id: '1335_10', value: 381 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1335', () => {
    const payload: TestPayload = { id: '1335_11', value: 174 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1335', () => {
    const payload: TestPayload = { id: '1335_12', value: 258 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1335', async () => {
    const payload: TestPayload = { id: '1335_13', value: 43 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
