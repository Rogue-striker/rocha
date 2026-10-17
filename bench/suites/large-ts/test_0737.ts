import assert from 'node:assert';
import { computeMetric17, type Model17 } from './src/helper_17.ts';
import { computeMetric0 } from './src/helper_0.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 737', () => {
  it('sync TS test 0 of file 737', () => {
    const payload: TestPayload = { id: '737_0', value: 89 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 737', async () => {
    const payload: TestPayload = { id: '737_1', value: 291 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 737', async () => {
    const payload: TestPayload = { id: '737_2', value: 27 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 3 of file 737', () => {
    const payload: TestPayload = { id: '737_3', value: 379 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 4 of file 737', async () => {
    const payload: TestPayload = { id: '737_4', value: 299 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 737', async () => {
    const payload: TestPayload = { id: '737_5', value: 43 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 737', async () => {
    const payload: TestPayload = { id: '737_6', value: 131 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 737', async () => {
    const payload: TestPayload = { id: '737_7', value: 472 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 8 of file 737', () => {
    const payload: TestPayload = { id: '737_8', value: 80 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 9 of file 737', async () => {
    const payload: TestPayload = { id: '737_9', value: 320 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 737', () => {
    const payload: TestPayload = { id: '737_10', value: 237 };
    const res = computeMetric17(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 737', async () => {
    const payload: TestPayload = { id: '737_11', value: 466 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 12 of file 737', async () => {
    const payload: TestPayload = { id: '737_12', value: 256 };
    const res1 = computeMetric17(payload.value);
    const res2 = computeMetric0(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
});
