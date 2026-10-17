import assert from 'node:assert';
import { add, type CalculationResult } from './calc.ts';

const res: CalculationResult = add(15, 27);
assert.strictEqual(res.operation, 'add');
assert.strictEqual(res.result, 42);
assert.deepStrictEqual(res.operands, [15, 27]);

console.log('TS_FIXTURE_SUITE_PASSED');
