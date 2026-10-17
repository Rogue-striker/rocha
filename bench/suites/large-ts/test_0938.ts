import assert from 'node:assert';
import { computeMetric18, type Model18 } from './src/helper_18.ts';
import { computeMetric1 } from './src/helper_1.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 938', () => {
  it('sync TS test 0 of file 938', () => {
    const payload: TestPayload = { id: '938_0', value: 247 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 938', () => {
    const payload: TestPayload = { id: '938_1', value: 273 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 938', async () => {
    const payload: TestPayload = { id: '938_2', value: 127 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 938', () => {
    const payload: TestPayload = { id: '938_3', value: 189 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 938', async () => {
    const payload: TestPayload = { id: '938_4', value: 189 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 938', () => {
    const payload: TestPayload = { id: '938_5', value: 361 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 938', async () => {
    const payload: TestPayload = { id: '938_6', value: 139 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 938', async () => {
    const payload: TestPayload = { id: '938_7', value: 100 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 938', async () => {
    const payload: TestPayload = { id: '938_8', value: 218 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 938', async () => {
    const payload: TestPayload = { id: '938_9', value: 122 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 938', async () => {
    const payload: TestPayload = { id: '938_10', value: 225 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 938', () => {
    const payload: TestPayload = { id: '938_11', value: 484 };
    const res = computeMetric18(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 938', async () => {
    const payload: TestPayload = { id: '938_12', value: 8 };
    const res1 = computeMetric18(payload.value);
    const res2 = computeMetric1(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
