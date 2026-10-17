import assert from 'node:assert';
import { computeMetric19, type Model19 } from './src/helper_19.ts';
import { computeMetric2 } from './src/helper_2.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1379', () => {
  it('async TS test 0 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_0', value: 374 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_1', value: 204 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1379', () => {
    const payload: TestPayload = { id: '1379_2', value: 285 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_3', value: 134 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 1379', () => {
    const payload: TestPayload = { id: '1379_4', value: 121 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_5', value: 480 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1379', () => {
    const payload: TestPayload = { id: '1379_6', value: 464 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 7 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_7', value: 296 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 1379', () => {
    const payload: TestPayload = { id: '1379_8', value: 488 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 1379', () => {
    const payload: TestPayload = { id: '1379_9', value: 105 };
    const res = computeMetric19(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_10', value: 16 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_11', value: 249 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_12', value: 212 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 13 of file 1379', async () => {
    const payload: TestPayload = { id: '1379_13', value: 130 };
    const res1 = computeMetric19(payload.value);
    const res2 = computeMetric2(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
