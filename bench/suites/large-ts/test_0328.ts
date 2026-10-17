import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 328', () => {
  it('async TS test 0 of file 328', async () => {
    const payload: TestPayload = { id: '328_0', value: 379 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 328', () => {
    const payload: TestPayload = { id: '328_1', value: 93 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 328', () => {
    const payload: TestPayload = { id: '328_2', value: 421 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 328', () => {
    const payload: TestPayload = { id: '328_3', value: 115 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 328', () => {
    const payload: TestPayload = { id: '328_4', value: 452 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 328', async () => {
    const payload: TestPayload = { id: '328_5', value: 169 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 328', async () => {
    const payload: TestPayload = { id: '328_6', value: 286 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 328', () => {
    const payload: TestPayload = { id: '328_7', value: 494 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 328', async () => {
    const payload: TestPayload = { id: '328_8', value: 70 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 328', () => {
    const payload: TestPayload = { id: '328_9', value: 436 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 328', () => {
    const payload: TestPayload = { id: '328_10', value: 93 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 328', async () => {
    const payload: TestPayload = { id: '328_11', value: 173 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 328', () => {
    const payload: TestPayload = { id: '328_12', value: 358 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
