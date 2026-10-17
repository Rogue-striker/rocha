import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1463', () => {
  it('sync TS test 0 of file 1463', () => {
    const payload: TestPayload = { id: '1463_0', value: 267 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1463', () => {
    const payload: TestPayload = { id: '1463_1', value: 40 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1463', () => {
    const payload: TestPayload = { id: '1463_2', value: 21 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1463', async () => {
    const payload: TestPayload = { id: '1463_3', value: 309 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1463', async () => {
    const payload: TestPayload = { id: '1463_4', value: 288 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 5 of file 1463', () => {
    const payload: TestPayload = { id: '1463_5', value: 375 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 1463', async () => {
    const payload: TestPayload = { id: '1463_6', value: 251 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1463', () => {
    const payload: TestPayload = { id: '1463_7', value: 83 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1463', () => {
    const payload: TestPayload = { id: '1463_8', value: 126 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1463', async () => {
    const payload: TestPayload = { id: '1463_9', value: 171 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1463', async () => {
    const payload: TestPayload = { id: '1463_10', value: 84 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1463', async () => {
    const payload: TestPayload = { id: '1463_11', value: 140 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1463', () => {
    const payload: TestPayload = { id: '1463_12', value: 127 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1463', () => {
    const payload: TestPayload = { id: '1463_13', value: 246 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
