const assert = require('node:assert');
const { add } = require('./calc.ts');

const res = add(10, 20);
assert.strictEqual(res.result, 30);
console.log('CJS_FIXTURE_PASSED');
