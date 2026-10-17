import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 268', () => {
  it('sync TS test 0 of file 268', () => {
    const payload: TestPayload = { id: '268_0', value: 6 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 268', () => {
    const payload: TestPayload = { id: '268_1', value: 266 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 268', async () => {
    const payload: TestPayload = { id: '268_2', value: 24 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 268', () => {
    const payload: TestPayload = { id: '268_3', value: 240 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 268', () => {
    const payload: TestPayload = { id: '268_4', value: 466 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 268', async () => {
    const payload: TestPayload = { id: '268_5', value: 32 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 268', async () => {
    const payload: TestPayload = { id: '268_6', value: 397 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 268', async () => {
    const payload: TestPayload = { id: '268_7', value: 7 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 268', () => {
    const payload: TestPayload = { id: '268_8', value: 18 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 268', () => {
    const payload: TestPayload = { id: '268_9', value: 142 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 268', () => {
    const payload: TestPayload = { id: '268_10', value: 42 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 268', () => {
    const payload: TestPayload = { id: '268_11', value: 275 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 268', async () => {
    const payload: TestPayload = { id: '268_12', value: 0 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
