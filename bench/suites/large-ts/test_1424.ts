import assert from 'node:assert';
import { computeMetric4, type Model4 } from './src/helper_4.ts';
import { computeMetric7 } from './src/helper_7.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1424', () => {
  it('async TS test 0 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_0', value: 356 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_1', value: 237 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1424', () => {
    const payload: TestPayload = { id: '1424_2', value: 159 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1424', () => {
    const payload: TestPayload = { id: '1424_3', value: 211 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1424', () => {
    const payload: TestPayload = { id: '1424_4', value: 111 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_5', value: 466 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_6', value: 3 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_7', value: 7 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_8', value: 247 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_9', value: 237 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1424', () => {
    const payload: TestPayload = { id: '1424_10', value: 119 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_11', value: 61 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1424', async () => {
    const payload: TestPayload = { id: '1424_12', value: 323 };
    const res1 = computeMetric4(payload.value);
    const res2 = computeMetric7(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1424', () => {
    const payload: TestPayload = { id: '1424_13', value: 312 };
    const res = computeMetric4(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
