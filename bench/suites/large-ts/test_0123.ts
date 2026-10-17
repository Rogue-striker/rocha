import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 123', () => {
  it('async TS test 0 of file 123', async () => {
    const payload: TestPayload = { id: '123_0', value: 31 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 123', () => {
    const payload: TestPayload = { id: '123_1', value: 358 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 123', () => {
    const payload: TestPayload = { id: '123_2', value: 200 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 123', () => {
    const payload: TestPayload = { id: '123_3', value: 418 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 123', () => {
    const payload: TestPayload = { id: '123_4', value: 225 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 123', () => {
    const payload: TestPayload = { id: '123_5', value: 387 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 123', async () => {
    const payload: TestPayload = { id: '123_6', value: 442 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 123', () => {
    const payload: TestPayload = { id: '123_7', value: 422 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 123', async () => {
    const payload: TestPayload = { id: '123_8', value: 487 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 123', async () => {
    const payload: TestPayload = { id: '123_9', value: 146 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 123', () => {
    const payload: TestPayload = { id: '123_10', value: 281 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 123', () => {
    const payload: TestPayload = { id: '123_11', value: 10 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 123', async () => {
    const payload: TestPayload = { id: '123_12', value: 163 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
