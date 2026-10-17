import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1243', () => {
  it('sync TS test 0 of file 1243', () => {
    const payload: TestPayload = { id: '1243_0', value: 359 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_1', value: 479 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_2', value: 304 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_3', value: 26 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1243', () => {
    const payload: TestPayload = { id: '1243_4', value: 461 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_5', value: 46 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1243', () => {
    const payload: TestPayload = { id: '1243_6', value: 403 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1243', () => {
    const payload: TestPayload = { id: '1243_7', value: 192 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_8', value: 181 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_9', value: 158 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1243', () => {
    const payload: TestPayload = { id: '1243_10', value: 242 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1243', () => {
    const payload: TestPayload = { id: '1243_11', value: 313 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_12', value: 296 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1243', async () => {
    const payload: TestPayload = { id: '1243_13', value: 47 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
