import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1155', () => {
  it('async TS test 0 of file 1155', async () => {
    const payload: TestPayload = { id: '1155_0', value: 199 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1155', () => {
    const payload: TestPayload = { id: '1155_1', value: 244 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1155', () => {
    const payload: TestPayload = { id: '1155_2', value: 300 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1155', async () => {
    const payload: TestPayload = { id: '1155_3', value: 424 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1155', async () => {
    const payload: TestPayload = { id: '1155_4', value: 247 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1155', () => {
    const payload: TestPayload = { id: '1155_5', value: 448 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1155', () => {
    const payload: TestPayload = { id: '1155_6', value: 89 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1155', () => {
    const payload: TestPayload = { id: '1155_7', value: 414 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1155', () => {
    const payload: TestPayload = { id: '1155_8', value: 216 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1155', async () => {
    const payload: TestPayload = { id: '1155_9', value: 366 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1155', () => {
    const payload: TestPayload = { id: '1155_10', value: 312 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1155', async () => {
    const payload: TestPayload = { id: '1155_11', value: 258 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1155', () => {
    const payload: TestPayload = { id: '1155_12', value: 315 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1155', async () => {
    const payload: TestPayload = { id: '1155_13', value: 228 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
