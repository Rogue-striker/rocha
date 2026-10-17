import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1305', () => {
  it('sync TS test 0 of file 1305', () => {
    const payload: TestPayload = { id: '1305_0', value: 367 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_1', value: 82 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_2', value: 11 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_3', value: 244 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_4', value: 76 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_5', value: 473 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_6', value: 219 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_7', value: 455 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_8', value: 128 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1305', () => {
    const payload: TestPayload = { id: '1305_9', value: 154 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_10', value: 477 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1305', () => {
    const payload: TestPayload = { id: '1305_11', value: 208 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1305', async () => {
    const payload: TestPayload = { id: '1305_12', value: 168 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1305', () => {
    const payload: TestPayload = { id: '1305_13', value: 287 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
