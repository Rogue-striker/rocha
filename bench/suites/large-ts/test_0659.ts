import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 659', () => {
  it('sync TS test 0 of file 659', () => {
    const payload: TestPayload = { id: '659_0', value: 37 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 659', () => {
    const payload: TestPayload = { id: '659_1', value: 66 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 659', async () => {
    const payload: TestPayload = { id: '659_2', value: 137 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 659', async () => {
    const payload: TestPayload = { id: '659_3', value: 350 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 659', () => {
    const payload: TestPayload = { id: '659_4', value: 439 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 659', () => {
    const payload: TestPayload = { id: '659_5', value: 147 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 659', () => {
    const payload: TestPayload = { id: '659_6', value: 432 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 659', () => {
    const payload: TestPayload = { id: '659_7', value: 271 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 659', async () => {
    const payload: TestPayload = { id: '659_8', value: 252 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 659', () => {
    const payload: TestPayload = { id: '659_9', value: 351 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 659', async () => {
    const payload: TestPayload = { id: '659_10', value: 296 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 659', () => {
    const payload: TestPayload = { id: '659_11', value: 146 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 659', async () => {
    const payload: TestPayload = { id: '659_12', value: 298 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
