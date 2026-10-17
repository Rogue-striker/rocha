import assert from 'node:assert';
import { computeMetric0, type Model0 } from './src/helper_0.ts';
import { computeMetric3 } from './src/helper_3.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 1480', () => {
  it('async TS test 0 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_0', value: 183 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 1 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_1', value: 455 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 2 of file 1480', () => {
    const payload: TestPayload = { id: '1480_2', value: 82 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_3', value: 293 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_4', value: 361 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_5', value: 307 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 1480', () => {
    const payload: TestPayload = { id: '1480_6', value: 185 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 1480', () => {
    const payload: TestPayload = { id: '1480_7', value: 89 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 8 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_8', value: 97 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_9', value: 446 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 10 of file 1480', () => {
    const payload: TestPayload = { id: '1480_10', value: 409 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 11 of file 1480', async () => {
    const payload: TestPayload = { id: '1480_11', value: 266 };
    const res1 = computeMetric0(payload.value);
    const res2 = computeMetric3(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 12 of file 1480', () => {
    const payload: TestPayload = { id: '1480_12', value: 229 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 13 of file 1480', () => {
    const payload: TestPayload = { id: '1480_13', value: 341 };
    const res = computeMetric0(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
