import assert from 'node:assert';
import { computeMetric12, type Model12 } from './src/helper_12.ts';
import { computeMetric15 } from './src/helper_15.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 132', () => {
  it('sync TS test 0 of file 132', () => {
    const payload: TestPayload = { id: '132_0', value: 420 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 132', () => {
    const payload: TestPayload = { id: '132_1', value: 123 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 132', () => {
    const payload: TestPayload = { id: '132_2', value: 468 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 132', () => {
    const payload: TestPayload = { id: '132_3', value: 232 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 132', () => {
    const payload: TestPayload = { id: '132_4', value: 274 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 132', async () => {
    const payload: TestPayload = { id: '132_5', value: 43 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 132', () => {
    const payload: TestPayload = { id: '132_6', value: 24 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 132', () => {
    const payload: TestPayload = { id: '132_7', value: 406 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 132', () => {
    const payload: TestPayload = { id: '132_8', value: 350 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 132', () => {
    const payload: TestPayload = { id: '132_9', value: 316 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 132', async () => {
    const payload: TestPayload = { id: '132_10', value: 176 };
    const res1 = computeMetric12(payload.value);
    const res2 = computeMetric15(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 132', () => {
    const payload: TestPayload = { id: '132_11', value: 420 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 132', () => {
    const payload: TestPayload = { id: '132_12', value: 139 };
    const res = computeMetric12(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
