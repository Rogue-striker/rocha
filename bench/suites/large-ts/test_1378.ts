import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1378', () => {
  it('async TS test 0 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_0', value: 301 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1378', () => {
    const payload: TestPayload = { id: '1378_1', value: 470 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1378', () => {
    const payload: TestPayload = { id: '1378_2', value: 91 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1378', () => {
    const payload: TestPayload = { id: '1378_3', value: 60 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_4', value: 491 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_5', value: 308 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_6', value: 110 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_7', value: 368 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1378', () => {
    const payload: TestPayload = { id: '1378_8', value: 48 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_9', value: 146 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_10', value: 60 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1378', () => {
    const payload: TestPayload = { id: '1378_11', value: 278 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1378', () => {
    const payload: TestPayload = { id: '1378_12', value: 204 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1378', async () => {
    const payload: TestPayload = { id: '1378_13', value: 232 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
