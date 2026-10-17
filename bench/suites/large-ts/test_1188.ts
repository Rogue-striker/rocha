import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1188', () => {
  it('async TS test 0 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_0', value: 81 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 1188', () => {
    const payload: TestPayload = { id: '1188_1', value: 115 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 1188', () => {
    const payload: TestPayload = { id: '1188_2', value: 241 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_3', value: 269 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1188', () => {
    const payload: TestPayload = { id: '1188_4', value: 429 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_5', value: 292 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_6', value: 368 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_7', value: 282 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1188', () => {
    const payload: TestPayload = { id: '1188_8', value: 483 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1188', () => {
    const payload: TestPayload = { id: '1188_9', value: 244 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_10', value: 13 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_11', value: 277 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1188', async () => {
    const payload: TestPayload = { id: '1188_12', value: 17 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 13 of file 1188', () => {
    const payload: TestPayload = { id: '1188_13', value: 466 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
