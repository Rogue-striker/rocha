import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1363', () => {
  it('async TS test 0 of file 1363', async () => {
    const payload: TestPayload = { id: '1363_0', value: 102 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1363', async () => {
    const payload: TestPayload = { id: '1363_1', value: 46 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1363', () => {
    const payload: TestPayload = { id: '1363_2', value: 166 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1363', async () => {
    const payload: TestPayload = { id: '1363_3', value: 109 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1363', () => {
    const payload: TestPayload = { id: '1363_4', value: 200 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1363', () => {
    const payload: TestPayload = { id: '1363_5', value: 371 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1363', () => {
    const payload: TestPayload = { id: '1363_6', value: 126 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1363', () => {
    const payload: TestPayload = { id: '1363_7', value: 261 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1363', async () => {
    const payload: TestPayload = { id: '1363_8', value: 412 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1363', () => {
    const payload: TestPayload = { id: '1363_9', value: 2 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1363', () => {
    const payload: TestPayload = { id: '1363_10', value: 69 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1363', () => {
    const payload: TestPayload = { id: '1363_11', value: 339 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1363', () => {
    const payload: TestPayload = { id: '1363_12', value: 37 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 13 of file 1363', async () => {
    const payload: TestPayload = { id: '1363_13', value: 165 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
