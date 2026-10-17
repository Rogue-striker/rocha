import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1208', () => {
  it('async TS test 0 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_0', value: 178 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1208', () => {
    const payload: TestPayload = { id: '1208_1', value: 93 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_2', value: 258 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1208', () => {
    const payload: TestPayload = { id: '1208_3', value: 310 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_4', value: 89 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_5', value: 331 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_6', value: 346 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1208', () => {
    const payload: TestPayload = { id: '1208_7', value: 407 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1208', () => {
    const payload: TestPayload = { id: '1208_8', value: 133 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_9', value: 18 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1208', () => {
    const payload: TestPayload = { id: '1208_10', value: 242 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_11', value: 149 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_12', value: 125 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1208', async () => {
    const payload: TestPayload = { id: '1208_13', value: 21 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
