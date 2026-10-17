import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 348', () => {
  it('sync TS test 0 of file 348', () => {
    const payload: TestPayload = { id: '348_0', value: 185 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 348', async () => {
    const payload: TestPayload = { id: '348_1', value: 365 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 348', async () => {
    const payload: TestPayload = { id: '348_2', value: 249 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 348', async () => {
    const payload: TestPayload = { id: '348_3', value: 242 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 348', () => {
    const payload: TestPayload = { id: '348_4', value: 350 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 348', () => {
    const payload: TestPayload = { id: '348_5', value: 400 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 348', async () => {
    const payload: TestPayload = { id: '348_6', value: 25 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 348', () => {
    const payload: TestPayload = { id: '348_7', value: 249 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 348', () => {
    const payload: TestPayload = { id: '348_8', value: 22 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 348', async () => {
    const payload: TestPayload = { id: '348_9', value: 290 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 348', () => {
    const payload: TestPayload = { id: '348_10', value: 266 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 348', () => {
    const payload: TestPayload = { id: '348_11', value: 132 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 348', async () => {
    const payload: TestPayload = { id: '348_12', value: 499 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
