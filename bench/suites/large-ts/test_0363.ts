import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 363', () => {
  it('sync TS test 0 of file 363', () => {
    const payload: TestPayload = { id: '363_0', value: 366 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 363', async () => {
    const payload: TestPayload = { id: '363_1', value: 111 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 363', () => {
    const payload: TestPayload = { id: '363_2', value: 142 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 363', async () => {
    const payload: TestPayload = { id: '363_3', value: 232 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 363', () => {
    const payload: TestPayload = { id: '363_4', value: 286 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 363', () => {
    const payload: TestPayload = { id: '363_5', value: 412 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 363', () => {
    const payload: TestPayload = { id: '363_6', value: 274 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 363', async () => {
    const payload: TestPayload = { id: '363_7', value: 83 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 363', () => {
    const payload: TestPayload = { id: '363_8', value: 343 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 363', async () => {
    const payload: TestPayload = { id: '363_9', value: 399 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 363', async () => {
    const payload: TestPayload = { id: '363_10', value: 169 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 363', () => {
    const payload: TestPayload = { id: '363_11', value: 469 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 363', async () => {
    const payload: TestPayload = { id: '363_12', value: 314 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
