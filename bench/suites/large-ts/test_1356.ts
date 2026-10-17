import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1356', () => {
  it('async TS test 0 of file 1356', async () => {
    const payload: TestPayload = { id: '1356_0', value: 42 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1356', async () => {
    const payload: TestPayload = { id: '1356_1', value: 179 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1356', () => {
    const payload: TestPayload = { id: '1356_2', value: 440 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1356', async () => {
    const payload: TestPayload = { id: '1356_3', value: 156 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1356', () => {
    const payload: TestPayload = { id: '1356_4', value: 477 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1356', async () => {
    const payload: TestPayload = { id: '1356_5', value: 282 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1356', async () => {
    const payload: TestPayload = { id: '1356_6', value: 165 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 1356', () => {
    const payload: TestPayload = { id: '1356_7', value: 33 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 1356', () => {
    const payload: TestPayload = { id: '1356_8', value: 170 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 1356', async () => {
    const payload: TestPayload = { id: '1356_9', value: 250 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1356', () => {
    const payload: TestPayload = { id: '1356_10', value: 89 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 1356', () => {
    const payload: TestPayload = { id: '1356_11', value: 453 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 1356', () => {
    const payload: TestPayload = { id: '1356_12', value: 37 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1356', () => {
    const payload: TestPayload = { id: '1356_13', value: 451 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
