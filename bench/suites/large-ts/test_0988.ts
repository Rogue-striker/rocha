import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 988', () => {
  it('sync TS test 0 of file 988', () => {
    const payload: TestPayload = { id: '988_0', value: 463 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 988', () => {
    const payload: TestPayload = { id: '988_1', value: 187 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 988', () => {
    const payload: TestPayload = { id: '988_2', value: 166 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 988', async () => {
    const payload: TestPayload = { id: '988_3', value: 140 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 988', () => {
    const payload: TestPayload = { id: '988_4', value: 451 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 988', async () => {
    const payload: TestPayload = { id: '988_5', value: 304 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 988', () => {
    const payload: TestPayload = { id: '988_6', value: 166 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 988', () => {
    const payload: TestPayload = { id: '988_7', value: 271 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 988', () => {
    const payload: TestPayload = { id: '988_8', value: 376 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 988', async () => {
    const payload: TestPayload = { id: '988_9', value: 449 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 988', () => {
    const payload: TestPayload = { id: '988_10', value: 186 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 988', () => {
    const payload: TestPayload = { id: '988_11', value: 475 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 988', () => {
    const payload: TestPayload = { id: '988_12', value: 139 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
