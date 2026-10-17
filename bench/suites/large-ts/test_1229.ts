import assert from 'node:assert';
import { computeMetric9, type Model9 } from './src/helper_9.ts';
import { computeMetric12 } from './src/helper_12.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1229', () => {
  it('sync TS test 0 of file 1229', () => {
    const payload: TestPayload = { id: '1229_0', value: 270 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1229', () => {
    const payload: TestPayload = { id: '1229_1', value: 487 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1229', async () => {
    const payload: TestPayload = { id: '1229_2', value: 88 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1229', () => {
    const payload: TestPayload = { id: '1229_3', value: 124 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1229', () => {
    const payload: TestPayload = { id: '1229_4', value: 152 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1229', async () => {
    const payload: TestPayload = { id: '1229_5', value: 224 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1229', () => {
    const payload: TestPayload = { id: '1229_6', value: 354 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1229', async () => {
    const payload: TestPayload = { id: '1229_7', value: 97 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1229', () => {
    const payload: TestPayload = { id: '1229_8', value: 220 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1229', async () => {
    const payload: TestPayload = { id: '1229_9', value: 312 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1229', async () => {
    const payload: TestPayload = { id: '1229_10', value: 9 };
    const res1 = computeMetric9(payload.value);
    const res2 = computeMetric12(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1229', () => {
    const payload: TestPayload = { id: '1229_11', value: 177 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1229', () => {
    const payload: TestPayload = { id: '1229_12', value: 494 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1229', () => {
    const payload: TestPayload = { id: '1229_13', value: 169 };
    const res = computeMetric9(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
