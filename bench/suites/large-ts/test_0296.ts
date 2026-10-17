import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 296', () => {
  it('sync TS test 0 of file 296', () => {
    const payload: TestPayload = { id: '296_0', value: 463 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 296', async () => {
    const payload: TestPayload = { id: '296_1', value: 405 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 296', () => {
    const payload: TestPayload = { id: '296_2', value: 155 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 296', async () => {
    const payload: TestPayload = { id: '296_3', value: 430 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 296', () => {
    const payload: TestPayload = { id: '296_4', value: 249 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 296', () => {
    const payload: TestPayload = { id: '296_5', value: 454 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 296', () => {
    const payload: TestPayload = { id: '296_6', value: 323 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 296', () => {
    const payload: TestPayload = { id: '296_7', value: 373 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 296', async () => {
    const payload: TestPayload = { id: '296_8', value: 237 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 296', () => {
    const payload: TestPayload = { id: '296_9', value: 367 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 296', () => {
    const payload: TestPayload = { id: '296_10', value: 447 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 296', () => {
    const payload: TestPayload = { id: '296_11', value: 256 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 296', async () => {
    const payload: TestPayload = { id: '296_12', value: 336 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
