import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1248', () => {
  it('async TS test 0 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_0', value: 99 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1248', () => {
    const payload: TestPayload = { id: '1248_1', value: 364 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_2', value: 261 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1248', () => {
    const payload: TestPayload = { id: '1248_3', value: 284 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_4', value: 43 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_5', value: 434 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_6', value: 260 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1248', () => {
    const payload: TestPayload = { id: '1248_7', value: 408 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_8', value: 378 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_9', value: 230 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1248', () => {
    const payload: TestPayload = { id: '1248_10', value: 3 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_11', value: 75 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1248', async () => {
    const payload: TestPayload = { id: '1248_12', value: 370 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1248', () => {
    const payload: TestPayload = { id: '1248_13', value: 91 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
