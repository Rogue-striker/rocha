import assert from 'node:assert';
import { computeMetric8, type Model8 } from './src/helper_8.ts';
import { computeMetric11 } from './src/helper_11.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 928', () => {
  it('async TS test 0 of file 928', async () => {
    const payload: TestPayload = { id: '928_0', value: 177 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 928', async () => {
    const payload: TestPayload = { id: '928_1', value: 29 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 928', () => {
    const payload: TestPayload = { id: '928_2', value: 41 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 3 of file 928', () => {
    const payload: TestPayload = { id: '928_3', value: 273 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 928', async () => {
    const payload: TestPayload = { id: '928_4', value: 49 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 928', async () => {
    const payload: TestPayload = { id: '928_5', value: 486 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 928', () => {
    const payload: TestPayload = { id: '928_6', value: 154 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 928', () => {
    const payload: TestPayload = { id: '928_7', value: 424 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 928', () => {
    const payload: TestPayload = { id: '928_8', value: 470 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 928', () => {
    const payload: TestPayload = { id: '928_9', value: 376 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 928', async () => {
    const payload: TestPayload = { id: '928_10', value: 160 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 928', () => {
    const payload: TestPayload = { id: '928_11', value: 192 };
    const res = computeMetric8(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 12 of file 928', async () => {
    const payload: TestPayload = { id: '928_12', value: 187 };
    const res1 = computeMetric8(payload.value);
    const res2 = computeMetric11(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
