import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1388', () => {
  it('sync TS test 0 of file 1388', () => {
    const payload: TestPayload = { id: '1388_0', value: 61 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1388', () => {
    const payload: TestPayload = { id: '1388_1', value: 393 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1388', () => {
    const payload: TestPayload = { id: '1388_2', value: 220 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_3', value: 447 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_4', value: 433 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_5', value: 125 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_6', value: 418 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1388', () => {
    const payload: TestPayload = { id: '1388_7', value: 131 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_8', value: 307 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_9', value: 46 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_10', value: 436 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_11', value: 221 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1388', async () => {
    const payload: TestPayload = { id: '1388_12', value: 241 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1388', () => {
    const payload: TestPayload = { id: '1388_13', value: 121 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
