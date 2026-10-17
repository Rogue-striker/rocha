import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1108', () => {
  it('async TS test 0 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_0', value: 242 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_1', value: 416 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1108', () => {
    const payload: TestPayload = { id: '1108_2', value: 326 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 1108', () => {
    const payload: TestPayload = { id: '1108_3', value: 222 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1108', () => {
    const payload: TestPayload = { id: '1108_4', value: 331 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1108', () => {
    const payload: TestPayload = { id: '1108_5', value: 291 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_6', value: 473 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_7', value: 428 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1108', () => {
    const payload: TestPayload = { id: '1108_8', value: 105 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_9', value: 111 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_10', value: 254 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1108', () => {
    const payload: TestPayload = { id: '1108_11', value: 19 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1108', () => {
    const payload: TestPayload = { id: '1108_12', value: 244 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1108', async () => {
    const payload: TestPayload = { id: '1108_13', value: 242 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
