import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 248', () => {
  it('sync TS test 0 of file 248', () => {
    const payload: TestPayload = { id: '248_0', value: 74 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 248', async () => {
    const payload: TestPayload = { id: '248_1', value: 497 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 248', async () => {
    const payload: TestPayload = { id: '248_2', value: 355 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 248', async () => {
    const payload: TestPayload = { id: '248_3', value: 231 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 248', async () => {
    const payload: TestPayload = { id: '248_4', value: 152 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 248', () => {
    const payload: TestPayload = { id: '248_5', value: 467 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 248', async () => {
    const payload: TestPayload = { id: '248_6', value: 300 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 248', async () => {
    const payload: TestPayload = { id: '248_7', value: 341 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 248', async () => {
    const payload: TestPayload = { id: '248_8', value: 457 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 248', async () => {
    const payload: TestPayload = { id: '248_9', value: 332 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 248', () => {
    const payload: TestPayload = { id: '248_10', value: 337 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 248', () => {
    const payload: TestPayload = { id: '248_11', value: 377 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 248', async () => {
    const payload: TestPayload = { id: '248_12', value: 360 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
