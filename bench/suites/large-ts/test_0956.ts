import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 956', () => {
  it('async TS test 0 of file 956', async () => {
    const payload: TestPayload = { id: '956_0', value: 167 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 1 of file 956', () => {
    const payload: TestPayload = { id: '956_1', value: 32 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 2 of file 956', () => {
    const payload: TestPayload = { id: '956_2', value: 364 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 3 of file 956', async () => {
    const payload: TestPayload = { id: '956_3', value: 393 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 956', async () => {
    const payload: TestPayload = { id: '956_4', value: 20 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 956', async () => {
    const payload: TestPayload = { id: '956_5', value: 7 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 6 of file 956', async () => {
    const payload: TestPayload = { id: '956_6', value: 410 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 7 of file 956', async () => {
    const payload: TestPayload = { id: '956_7', value: 294 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 8 of file 956', async () => {
    const payload: TestPayload = { id: '956_8', value: 353 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 9 of file 956', () => {
    const payload: TestPayload = { id: '956_9', value: 494 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 10 of file 956', () => {
    const payload: TestPayload = { id: '956_10', value: 333 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 11 of file 956', () => {
    const payload: TestPayload = { id: '956_11', value: 218 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 956', () => {
    const payload: TestPayload = { id: '956_12', value: 275 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
