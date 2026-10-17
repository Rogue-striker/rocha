import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1303', () => {
  it('async TS test 0 of file 1303', async () => {
    const payload: TestPayload = { id: '1303_0', value: 264 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1303', () => {
    const payload: TestPayload = { id: '1303_1', value: 125 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1303', async () => {
    const payload: TestPayload = { id: '1303_2', value: 96 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1303', () => {
    const payload: TestPayload = { id: '1303_3', value: 265 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 4 of file 1303', () => {
    const payload: TestPayload = { id: '1303_4', value: 392 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1303', () => {
    const payload: TestPayload = { id: '1303_5', value: 44 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1303', () => {
    const payload: TestPayload = { id: '1303_6', value: 411 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1303', () => {
    const payload: TestPayload = { id: '1303_7', value: 21 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1303', () => {
    const payload: TestPayload = { id: '1303_8', value: 490 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1303', () => {
    const payload: TestPayload = { id: '1303_9', value: 60 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1303', async () => {
    const payload: TestPayload = { id: '1303_10', value: 365 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1303', () => {
    const payload: TestPayload = { id: '1303_11', value: 242 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1303', () => {
    const payload: TestPayload = { id: '1303_12', value: 232 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1303', () => {
    const payload: TestPayload = { id: '1303_13', value: 371 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
