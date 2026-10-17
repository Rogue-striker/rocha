import assert from 'node:assert';
import { computeMetric15, type Model15 } from './src/helper_15.ts';
import { computeMetric18 } from './src/helper_18.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 975', () => {
  it('sync TS test 0 of file 975', () => {
    const payload: TestPayload = { id: '975_0', value: 184 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 975', () => {
    const payload: TestPayload = { id: '975_1', value: 438 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 975', async () => {
    const payload: TestPayload = { id: '975_2', value: 308 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 975', async () => {
    const payload: TestPayload = { id: '975_3', value: 264 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 975', () => {
    const payload: TestPayload = { id: '975_4', value: 98 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 5 of file 975', () => {
    const payload: TestPayload = { id: '975_5', value: 328 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 6 of file 975', async () => {
    const payload: TestPayload = { id: '975_6', value: 322 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 7 of file 975', () => {
    const payload: TestPayload = { id: '975_7', value: 167 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 975', () => {
    const payload: TestPayload = { id: '975_8', value: 149 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 975', async () => {
    const payload: TestPayload = { id: '975_9', value: 451 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 975', async () => {
    const payload: TestPayload = { id: '975_10', value: 150 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 11 of file 975', async () => {
    const payload: TestPayload = { id: '975_11', value: 240 };
    const res1 = computeMetric15(payload.value);
    const res2 = computeMetric18(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 975', () => {
    const payload: TestPayload = { id: '975_12', value: 41 };
    const res = computeMetric15(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
