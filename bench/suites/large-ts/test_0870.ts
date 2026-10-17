import assert from 'node:assert';
import { computeMetric10, type Model10 } from './src/helper_10.ts';
import { computeMetric13 } from './src/helper_13.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 870', () => {
  it('sync TS test 0 of file 870', () => {
    const payload: TestPayload = { id: '870_0', value: 433 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 1 of file 870', () => {
    const payload: TestPayload = { id: '870_1', value: 236 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 2 of file 870', async () => {
    const payload: TestPayload = { id: '870_2', value: 204 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 870', async () => {
    const payload: TestPayload = { id: '870_3', value: 260 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 4 of file 870', () => {
    const payload: TestPayload = { id: '870_4', value: 436 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 5 of file 870', async () => {
    const payload: TestPayload = { id: '870_5', value: 231 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 870', async () => {
    const payload: TestPayload = { id: '870_6', value: 240 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 870', async () => {
    const payload: TestPayload = { id: '870_7', value: 210 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 870', async () => {
    const payload: TestPayload = { id: '870_8', value: 47 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 9 of file 870', async () => {
    const payload: TestPayload = { id: '870_9', value: 346 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 10 of file 870', async () => {
    const payload: TestPayload = { id: '870_10', value: 470 };
    const res1 = computeMetric10(payload.value);
    const res2 = computeMetric13(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 870', () => {
    const payload: TestPayload = { id: '870_11', value: 214 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 870', () => {
    const payload: TestPayload = { id: '870_12', value: 73 };
    const res = computeMetric10(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
