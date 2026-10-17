import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 665', () => {
  it('async TS test 0 of file 665', async () => {
    const payload: TestPayload = { id: '665_0', value: 339 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 665', async () => {
    const payload: TestPayload = { id: '665_1', value: 111 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 665', () => {
    const payload: TestPayload = { id: '665_2', value: 340 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 665', async () => {
    const payload: TestPayload = { id: '665_3', value: 342 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 665', () => {
    const payload: TestPayload = { id: '665_4', value: 296 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 665', () => {
    const payload: TestPayload = { id: '665_5', value: 97 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 665', () => {
    const payload: TestPayload = { id: '665_6', value: 128 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 665', async () => {
    const payload: TestPayload = { id: '665_7', value: 127 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 665', async () => {
    const payload: TestPayload = { id: '665_8', value: 192 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 665', async () => {
    const payload: TestPayload = { id: '665_9', value: 118 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 665', async () => {
    const payload: TestPayload = { id: '665_10', value: 403 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 665', async () => {
    const payload: TestPayload = { id: '665_11', value: 180 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 665', () => {
    const payload: TestPayload = { id: '665_12', value: 262 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
