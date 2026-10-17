import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1178', () => {
  it('sync TS test 0 of file 1178', () => {
    const payload: TestPayload = { id: '1178_0', value: 468 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_1', value: 244 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1178', () => {
    const payload: TestPayload = { id: '1178_2', value: 251 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1178', () => {
    const payload: TestPayload = { id: '1178_3', value: 300 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1178', () => {
    const payload: TestPayload = { id: '1178_4', value: 205 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_5', value: 443 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_6', value: 434 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_7', value: 462 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_8', value: 13 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_9', value: 402 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_10', value: 498 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_11', value: 482 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_12', value: 36 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1178', async () => {
    const payload: TestPayload = { id: '1178_13', value: 162 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
