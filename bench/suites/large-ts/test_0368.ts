import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 368', () => {
  it('async TS test 0 of file 368', async () => {
    const payload: TestPayload = { id: '368_0', value: 439 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 368', async () => {
    const payload: TestPayload = { id: '368_1', value: 47 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 368', async () => {
    const payload: TestPayload = { id: '368_2', value: 21 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 368', () => {
    const payload: TestPayload = { id: '368_3', value: 329 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 368', () => {
    const payload: TestPayload = { id: '368_4', value: 493 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 368', () => {
    const payload: TestPayload = { id: '368_5', value: 308 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 368', () => {
    const payload: TestPayload = { id: '368_6', value: 450 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 368', async () => {
    const payload: TestPayload = { id: '368_7', value: 492 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 368', async () => {
    const payload: TestPayload = { id: '368_8', value: 318 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 368', async () => {
    const payload: TestPayload = { id: '368_9', value: 55 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 368', () => {
    const payload: TestPayload = { id: '368_10', value: 198 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 368', async () => {
    const payload: TestPayload = { id: '368_11', value: 475 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 368', async () => {
    const payload: TestPayload = { id: '368_12', value: 217 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
