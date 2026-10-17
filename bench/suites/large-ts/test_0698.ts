import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 698', () => {
  it('sync TS test 0 of file 698', () => {
    const payload: TestPayload = { id: '698_0', value: 433 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 698', async () => {
    const payload: TestPayload = { id: '698_1', value: 309 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 698', async () => {
    const payload: TestPayload = { id: '698_2', value: 185 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 698', async () => {
    const payload: TestPayload = { id: '698_3', value: 94 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 698', async () => {
    const payload: TestPayload = { id: '698_4', value: 466 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 698', async () => {
    const payload: TestPayload = { id: '698_5', value: 480 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 698', () => {
    const payload: TestPayload = { id: '698_6', value: 53 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 698', () => {
    const payload: TestPayload = { id: '698_7', value: 144 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 698', async () => {
    const payload: TestPayload = { id: '698_8', value: 319 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 698', () => {
    const payload: TestPayload = { id: '698_9', value: 377 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 698', () => {
    const payload: TestPayload = { id: '698_10', value: 238 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 698', async () => {
    const payload: TestPayload = { id: '698_11', value: 179 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 698', async () => {
    const payload: TestPayload = { id: '698_12', value: 410 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
