#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function parseArgs() {
  const args = process.argv.slice(2);
  let suite = 'all';
  let seed = 42;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--suite' && args[i + 1]) suite = args[++i];
    if (args[i] === '--seed' && args[i + 1]) seed = parseInt(args[++i], 10);
  }
  return { suite, seed };
}

function generateSmall(baseDir, seed) {
  const rng = mulberry32(seed);
  const suiteDir = path.join(baseDir, 'suites', 'small');
  fs.rmSync(suiteDir, { recursive: true, force: true });
  fs.mkdirSync(suiteDir, { recursive: true });

  const numFiles = 50;
  const testsPerFile = 10; // Total 500 tests

  for (let f = 0; f < numFiles; f++) {
    const fileName = `test_${String(f).padStart(3, '0')}.js`;
    const filePath = path.join(suiteDir, fileName);
    let code = `const assert = require('node:assert');\n\n`;
    code += `describe('Small Suite File ${f}', () => {\n`;
    for (let t = 0; t < testsPerFile; t++) {
      const val1 = Math.floor(rng() * 100);
      const val2 = Math.floor(rng() * 100);
      const sum = val1 + val2;
      code += `  it('test ${t} should calculate ${val1} + ${val2}', () => {\n`;
      code += `    assert.strictEqual(${val1} + ${val2}, ${sum});\n`;
      code += `  });\n`;
    }
    code += `});\n`;
    fs.writeFileSync(filePath, code, 'utf8');
  }
}

function generateMedium(baseDir, seed) {
  const rng = mulberry32(seed);
  const suiteDir = path.join(baseDir, 'suites', 'medium');
  fs.rmSync(suiteDir, { recursive: true, force: true });
  fs.mkdirSync(suiteDir, { recursive: true });

  const numFiles = 400;
  // 400 files * 12.5 tests = 5000 tests. Let's do 12 or 13 tests per file (half 12, half 13 = 5000)
  for (let f = 0; f < numFiles; f++) {
    const fileName = `test_${String(f).padStart(3, '0')}.js`;
    const filePath = path.join(suiteDir, fileName);
    const testCount = f % 2 === 0 ? 12 : 13;
    let code = `const assert = require('node:assert');\n\n`;
    code += `describe('Medium Suite File ${f}', () => {\n`;
    code += `  let contextValue = 0;\n\n`;
    code += `  before(() => {\n    contextValue = 10;\n  });\n\n`;
    code += `  beforeEach(() => {\n    contextValue += 1;\n  });\n\n`;
    code += `  afterEach(() => {\n    contextValue -= 1;\n  });\n\n`;
    code += `  after(() => {\n    contextValue = 0;\n  });\n\n`;

    for (let t = 0; t < testCount; t++) {
      const isAsync = rng() > 0.5;
      const val = Math.floor(rng() * 1000);
      if (isAsync) {
        code += `  it('async test ${t} with value ${val}', async () => {\n`;
        code += `    assert.ok(contextValue >= 10);\n`;
        code += `    await Promise.resolve(${val});\n`;
        code += `  });\n`;
      } else {
        code += `  it('sync test ${t} with value ${val}', () => {\n`;
        code += `    assert.ok(contextValue >= 10);\n`;
        code += `    assert.strictEqual(typeof ${val}, 'number');\n`;
        code += `  });\n`;
      }
    }
    code += `});\n`;
    fs.writeFileSync(filePath, code, 'utf8');
  }
}

function generateLargeTs(baseDir, seed) {
  const rng = mulberry32(seed);
  const suiteDir = path.join(baseDir, 'suites', 'large-ts');
  fs.rmSync(suiteDir, { recursive: true, force: true });
  fs.mkdirSync(path.join(suiteDir, 'src'), { recursive: true });

  // Generate shared helper library modules for heavy imports
  for (let m = 0; m < 20; m++) {
    let modCode = `export interface Model${m} {\n  id: string;\n  count: number;\n  tags: string[];\n}\n\n`;
    modCode += `export function computeMetric${m}(input: number): number {\n  return input * ${m + 1} + 7;\n}\n`;
    fs.writeFileSync(path.join(suiteDir, 'src', `helper_${m}.ts`), modCode, 'utf8');
  }

  const numFiles = 1500;
  // 1500 files * ~13.33 tests = 20,000 tests.
  // 1000 files with 13 tests, 500 files with 14 tests: 1000*13 + 500*14 = 13000 + 7000 = 20000 tests!
  for (let f = 0; f < numFiles; f++) {
    const fileName = `test_${String(f).padStart(4, '0')}.ts`;
    const filePath = path.join(suiteDir, fileName);
    const testCount = f < 1000 ? 13 : 14;
    const helperIndex1 = f % 20;
    const helperIndex2 = (f + 3) % 20;

    let code = `import assert from 'node:assert';\n`;
    code += `import { computeMetric${helperIndex1}, type Model${helperIndex1} } from './src/helper_${helperIndex1}.ts';\n`;
    code += `import { computeMetric${helperIndex2} } from './src/helper_${helperIndex2}.ts';\n\n`;
    code += `interface TestPayload {\n  id: string;\n  value: number;\n}\n\n`;
    code += `describe('Large TS Suite File ${f}', () => {\n`;

    for (let t = 0; t < testCount; t++) {
      const isAsync = rng() > 0.4;
      const num = Math.floor(rng() * 500);
      if (isAsync) {
        code += `  it('async TS test ${t} of file ${f}', async () => {\n`;
        code += `    const payload: TestPayload = { id: '${f}_${t}', value: ${num} };\n`;
        code += `    const res1 = computeMetric${helperIndex1}(payload.value);\n`;
        code += `    const res2 = computeMetric${helperIndex2}(payload.value);\n`;
        code += `    assert.ok(res1 > 0 && res2 > 0);\n`;
        code += `  });\n`;
      } else {
        code += `  it('sync TS test ${t} of file ${f}', () => {\n`;
        code += `    const payload: TestPayload = { id: '${f}_${t}', value: ${num} };\n`;
        code += `    const res = computeMetric${helperIndex1}(payload.value);\n`;
        code += `    assert.strictEqual(typeof res, 'number');\n`;
        code += `  });\n`;
      }
    }
    code += `});\n`;
    fs.writeFileSync(filePath, code, 'utf8');
  }
}

const { suite, seed } = parseArgs();
const benchDir = __dirname;

if (suite === 'all' || suite === 'small') {
  generateSmall(benchDir, seed);
}
if (suite === 'all' || suite === 'medium') {
  generateMedium(benchDir, seed);
}
if (suite === 'all' || suite === 'large-ts') {
  generateLargeTs(benchDir, seed);
}

console.log(`Suites generated successfully (seed=${seed}, suite=${suite}).`);
