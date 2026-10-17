import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 983', () => {
  it('async TS test 0 of file 983', async () => {
    const payload: TestPayload = { id: '983_0', value: 173 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 983', async () => {
    const payload: TestPayload = { id: '983_1', value: 388 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 983', async () => {
    const payload: TestPayload = { id: '983_2', value: 6 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 983', () => {
    const payload: TestPayload = { id: '983_3', value: 163 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 983', () => {
    const payload: TestPayload = { id: '983_4', value: 495 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 983', () => {
    const payload: TestPayload = { id: '983_5', value: 440 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 983', async () => {
    const payload: TestPayload = { id: '983_6', value: 44 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 983', () => {
    const payload: TestPayload = { id: '983_7', value: 83 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 983', () => {
    const payload: TestPayload = { id: '983_8', value: 338 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 983', async () => {
    const payload: TestPayload = { id: '983_9', value: 396 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 983', async () => {
    const payload: TestPayload = { id: '983_10', value: 208 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 983', async () => {
    const payload: TestPayload = { id: '983_11', value: 390 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 983', () => {
    const payload: TestPayload = { id: '983_12', value: 162 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
