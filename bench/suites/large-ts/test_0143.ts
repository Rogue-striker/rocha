import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 143', () => {
  it('async TS test 0 of file 143', async () => {
    const payload: TestPayload = { id: '143_0', value: 139 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 143', () => {
    const payload: TestPayload = { id: '143_1', value: 82 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 143', async () => {
    const payload: TestPayload = { id: '143_2', value: 193 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 143', () => {
    const payload: TestPayload = { id: '143_3', value: 241 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 143', async () => {
    const payload: TestPayload = { id: '143_4', value: 249 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 143', async () => {
    const payload: TestPayload = { id: '143_5', value: 478 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 143', () => {
    const payload: TestPayload = { id: '143_6', value: 150 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 143', () => {
    const payload: TestPayload = { id: '143_7', value: 198 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 143', () => {
    const payload: TestPayload = { id: '143_8', value: 203 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 143', () => {
    const payload: TestPayload = { id: '143_9', value: 317 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 143', async () => {
    const payload: TestPayload = { id: '143_10', value: 193 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 143', async () => {
    const payload: TestPayload = { id: '143_11', value: 248 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 143', () => {
    const payload: TestPayload = { id: '143_12', value: 71 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
