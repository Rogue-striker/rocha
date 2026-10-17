import assert from 'node:assert';
import { computeMetric3, type Model3 } from './src/helper_3.ts';
import { computeMetric6 } from './src/helper_6.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 623', () => {
  it('async TS test 0 of file 623', async () => {
    const payload: TestPayload = { id: '623_0', value: 410 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 623', async () => {
    const payload: TestPayload = { id: '623_1', value: 147 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 623', async () => {
    const payload: TestPayload = { id: '623_2', value: 416 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 623', async () => {
    const payload: TestPayload = { id: '623_3', value: 224 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 623', () => {
    const payload: TestPayload = { id: '623_4', value: 160 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 623', async () => {
    const payload: TestPayload = { id: '623_5', value: 1 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 623', async () => {
    const payload: TestPayload = { id: '623_6', value: 123 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 623', () => {
    const payload: TestPayload = { id: '623_7', value: 82 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 623', () => {
    const payload: TestPayload = { id: '623_8', value: 205 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 623', async () => {
    const payload: TestPayload = { id: '623_9', value: 441 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 623', async () => {
    const payload: TestPayload = { id: '623_10', value: 194 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 623', () => {
    const payload: TestPayload = { id: '623_11', value: 187 };
    const res = computeMetric3(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 623', async () => {
    const payload: TestPayload = { id: '623_12', value: 29 };
    const res1 = computeMetric3(payload.value);
    const res2 = computeMetric6(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
