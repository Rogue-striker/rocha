import assert from 'node:assert';
import { computeMetric6, type Model6 } from './src/helper_6.ts';
import { computeMetric9 } from './src/helper_9.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 826', () => {
  it('async TS test 0 of file 826', async () => {
    const payload: TestPayload = { id: '826_0', value: 62 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 826', () => {
    const payload: TestPayload = { id: '826_1', value: 102 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 826', async () => {
    const payload: TestPayload = { id: '826_2', value: 457 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 826', async () => {
    const payload: TestPayload = { id: '826_3', value: 131 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 826', () => {
    const payload: TestPayload = { id: '826_4', value: 122 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 826', async () => {
    const payload: TestPayload = { id: '826_5', value: 60 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 826', async () => {
    const payload: TestPayload = { id: '826_6', value: 232 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 826', async () => {
    const payload: TestPayload = { id: '826_7', value: 308 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 826', async () => {
    const payload: TestPayload = { id: '826_8', value: 381 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 826', () => {
    const payload: TestPayload = { id: '826_9', value: 145 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 826', async () => {
    const payload: TestPayload = { id: '826_10', value: 172 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 826', async () => {
    const payload: TestPayload = { id: '826_11', value: 421 };
    const res1 = computeMetric6(payload.value);
    const res2 = computeMetric9(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 826', () => {
    const payload: TestPayload = { id: '826_12', value: 159 };
    const res = computeMetric6(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
