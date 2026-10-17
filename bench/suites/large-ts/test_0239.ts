import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 239', () => {
  it('sync TS test 0 of file 239', () => {
    const payload: TestPayload = { id: '239_0', value: 35 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 239', async () => {
    const payload: TestPayload = { id: '239_1', value: 254 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 239', async () => {
    const payload: TestPayload = { id: '239_2', value: 203 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 239', () => {
    const payload: TestPayload = { id: '239_3', value: 496 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 239', () => {
    const payload: TestPayload = { id: '239_4', value: 62 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 239', async () => {
    const payload: TestPayload = { id: '239_5', value: 388 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 239', async () => {
    const payload: TestPayload = { id: '239_6', value: 279 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 239', async () => {
    const payload: TestPayload = { id: '239_7', value: 376 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 239', () => {
    const payload: TestPayload = { id: '239_8', value: 448 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 239', () => {
    const payload: TestPayload = { id: '239_9', value: 123 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 239', () => {
    const payload: TestPayload = { id: '239_10', value: 95 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 239', () => {
    const payload: TestPayload = { id: '239_11', value: 48 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 239', async () => {
    const payload: TestPayload = { id: '239_12', value: 57 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
