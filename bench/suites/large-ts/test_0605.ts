import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 605', () => {
  it('async TS test 0 of file 605', async () => {
    const payload: TestPayload = { id: '605_0', value: 312 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 605', async () => {
    const payload: TestPayload = { id: '605_1', value: 74 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 605', () => {
    const payload: TestPayload = { id: '605_2', value: 191 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 605', () => {
    const payload: TestPayload = { id: '605_3', value: 104 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 605', async () => {
    const payload: TestPayload = { id: '605_4', value: 24 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 605', async () => {
    const payload: TestPayload = { id: '605_5', value: 63 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 605', () => {
    const payload: TestPayload = { id: '605_6', value: 496 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 605', () => {
    const payload: TestPayload = { id: '605_7', value: 157 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 605', async () => {
    const payload: TestPayload = { id: '605_8', value: 158 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 605', async () => {
    const payload: TestPayload = { id: '605_9', value: 34 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 605', () => {
    const payload: TestPayload = { id: '605_10', value: 239 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 605', async () => {
    const payload: TestPayload = { id: '605_11', value: 482 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 605', () => {
    const payload: TestPayload = { id: '605_12', value: 92 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
