import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1443', () => {
  it('sync TS test 0 of file 1443', () => {
    const payload: TestPayload = { id: '1443_0', value: 113 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 1443', () => {
    const payload: TestPayload = { id: '1443_1', value: 45 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_2', value: 338 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 1443', () => {
    const payload: TestPayload = { id: '1443_3', value: 416 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_4', value: 129 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_5', value: 216 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1443', () => {
    const payload: TestPayload = { id: '1443_6', value: 60 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_7', value: 5 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_8', value: 346 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 1443', () => {
    const payload: TestPayload = { id: '1443_9', value: 416 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 1443', () => {
    const payload: TestPayload = { id: '1443_10', value: 338 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_11', value: 132 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_12', value: 337 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1443', async () => {
    const payload: TestPayload = { id: '1443_13', value: 133 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
