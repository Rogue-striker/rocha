import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1288', () => {
  it('async TS test 0 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_0', value: 303 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_1', value: 160 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_2', value: 465 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_3', value: 237 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1288', () => {
    const payload: TestPayload = { id: '1288_4', value: 404 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 1288', () => {
    const payload: TestPayload = { id: '1288_5', value: 443 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 6 of file 1288', () => {
    const payload: TestPayload = { id: '1288_6', value: 339 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1288', () => {
    const payload: TestPayload = { id: '1288_7', value: 385 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_8', value: 329 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_9', value: 127 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_10', value: 96 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 1288', () => {
    const payload: TestPayload = { id: '1288_11', value: 346 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_12', value: 40 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1288', async () => {
    const payload: TestPayload = { id: '1288_13', value: 377 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
