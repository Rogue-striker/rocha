import assert from 'node:assert';
import { computeMetric16, type Model16 } from './src/helper_16.ts';
import { computeMetric19 } from './src/helper_19.ts';

interface TestPayload {
  id: string;
  value: number;
}

describe('Large TS Suite File 836', () => {
  it('sync TS test 0 of file 836', () => {
    const payload: TestPayload = { id: '836_0', value: 295 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 1 of file 836', async () => {
    const payload: TestPayload = { id: '836_1', value: 333 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 2 of file 836', async () => {
    const payload: TestPayload = { id: '836_2', value: 298 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 3 of file 836', async () => {
    const payload: TestPayload = { id: '836_3', value: 101 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 4 of file 836', async () => {
    const payload: TestPayload = { id: '836_4', value: 496 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('async TS test 5 of file 836', async () => {
    const payload: TestPayload = { id: '836_5', value: 3 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 6 of file 836', () => {
    const payload: TestPayload = { id: '836_6', value: 438 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 7 of file 836', () => {
    const payload: TestPayload = { id: '836_7', value: 381 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 8 of file 836', () => {
    const payload: TestPayload = { id: '836_8', value: 188 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 9 of file 836', () => {
    const payload: TestPayload = { id: '836_9', value: 191 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('async TS test 10 of file 836', async () => {
    const payload: TestPayload = { id: '836_10', value: 79 };
    const res1 = computeMetric16(payload.value);
    const res2 = computeMetric19(payload.value);
    assert.ok(res1 > 0 && res2 > 0);
  });
  it('sync TS test 11 of file 836', () => {
    const payload: TestPayload = { id: '836_11', value: 236 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
  it('sync TS test 12 of file 836', () => {
    const payload: TestPayload = { id: '836_12', value: 22 };
    const res = computeMetric16(payload.value);
    assert.strictEqual(typeof res, 'number');
  });
});
