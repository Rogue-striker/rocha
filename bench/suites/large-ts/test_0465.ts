import assert from 'node:assert';
import { computeMetric5, type Model5 } from './src/helper_5.ts';
import { computeMetric8 } from './src/helper_8.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 465', () => {
  it('async TS test 0 of file 465', async () => {
    const payload: TestPayload = { id: '465_0', value: 140 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 465', () => {
    const payload: TestPayload = { id: '465_1', value: 90 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 465', () => {
    const payload: TestPayload = { id: '465_2', value: 449 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 465', async () => {
    const payload: TestPayload = { id: '465_3', value: 287 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 465', async () => {
    const payload: TestPayload = { id: '465_4', value: 467 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 465', () => {
    const payload: TestPayload = { id: '465_5', value: 272 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 465', () => {
    const payload: TestPayload = { id: '465_6', value: 76 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 465', () => {
    const payload: TestPayload = { id: '465_7', value: 72 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 465', async () => {
    const payload: TestPayload = { id: '465_8', value: 87 };
    const res1 = computeMetric5(payload.value);
    const res2 = computeMetric8(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 465', () => {
    const payload: TestPayload = { id: '465_9', value: 45 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 465', () => {
    const payload: TestPayload = { id: '465_10', value: 384 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 465', () => {
    const payload: TestPayload = { id: '465_11', value: 294 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 465', () => {
    const payload: TestPayload = { id: '465_12', value: 181 };
    const res = computeMetric5(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
