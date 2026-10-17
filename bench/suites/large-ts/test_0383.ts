import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 383', () => {
  it('sync TS test 0 of file 383', () => {
    const payload: TestPayload = { id: '383_0', value: 204 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 383', async () => {
    const payload: TestPayload = { id: '383_1', value: 371 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 383', async () => {
    const payload: TestPayload = { id: '383_2', value: 491 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 383', async () => {
    const payload: TestPayload = { id: '383_3', value: 247 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 383', () => {
    const payload: TestPayload = { id: '383_4', value: 286 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 383', () => {
    const payload: TestPayload = { id: '383_5', value: 383 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 383', () => {
    const payload: TestPayload = { id: '383_6', value: 326 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 383', async () => {
    const payload: TestPayload = { id: '383_7', value: 421 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 383', () => {
    const payload: TestPayload = { id: '383_8', value: 497 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 383', async () => {
    const payload: TestPayload = { id: '383_9', value: 401 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 383', () => {
    const payload: TestPayload = { id: '383_10', value: 24 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 383', () => {
    const payload: TestPayload = { id: '383_11', value: 371 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 383', () => {
    const payload: TestPayload = { id: '383_12', value: 141 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
