import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1468', () => {
  it('sync TS test 0 of file 1468', () => {
    const payload: TestPayload = { id: '1468_0', value: 144 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_1', value: 473 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_2', value: 433 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_3', value: 141 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1468', () => {
    const payload: TestPayload = { id: '1468_4', value: 499 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_5', value: 271 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_6', value: 225 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_7', value: 199 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_8', value: 58 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_9', value: 233 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1468', () => {
    const payload: TestPayload = { id: '1468_10', value: 84 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1468', () => {
    const payload: TestPayload = { id: '1468_11', value: 271 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_12', value: 485 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1468', async () => {
    const payload: TestPayload = { id: '1468_13', value: 406 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
