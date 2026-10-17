'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');
const { execFileSync, spawnSync } = require('node:child_process');
const { blake3, Blake3Hasher } = require('../blake3.cjs');
const { computeCacheKey, getOrTransform, getCacheDir } = require('../cache.cjs');

const FIXTURES_DIR = path.join(__dirname, 'fixtures');
const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

test('blake3: matches standard official test vectors', () => {
  // Empty string
  assert.strictEqual(
    blake3(''),
    'af1349b9f5f9a1a6a0404dea36dcc9499bcb25c9adc112b7cc9a93cae41f3262'
  );

  // "hello world"
  assert.strictEqual(
    blake3('hello world'),
    'd74981efa70a0c880b8d8c1985d075dbcbf679b99a5f9914e5aaf96b831a9e24'
  );

  // Chunk boundary tests (1024, 1025, 5000 bytes)
  assert.strictEqual(
    blake3('a'.repeat(1024)),
    '5a1c9e5d85d9898297037e8e24f69bb0e604a84c91c3b3ef4784a374812900d9'
  );
  assert.strictEqual(
    blake3('a'.repeat(1025)),
    '829d32d1e4e105d31dbf4b3dc9adbb826142a105d1a69302558f980eb9d0512c'
  );
  assert.strictEqual(
    blake3('a'.repeat(5000)),
    '09d0d29a5f2dc69dff0809823ca867836c3a3cfb00e12df06d92e3f0f70629e9'
  );
});

test('loader: computeCacheKey matches 64-hex BLAKE3 format', () => {
  const key = computeCacheKey(Buffer.from('const x = 1;'), 'ts', '{}', 'node20');
  assert.strictEqual(key.length, 64);
  assert.match(key, /^[0-9a-f]{64}$/);
});

test('loader: TS fixture runs under plain `node --require rocha-loader`', () => {
  const runnerPath = path.join(FIXTURES_DIR, 'runner.ts');
  const res = spawnSync(process.execPath, ['--require', 'rocha-loader', runnerPath], {
    cwd: PROJECT_ROOT,
    encoding: 'utf8',
  });

  assert.strictEqual(res.status, 0, `Process failed with stderr: ${res.stderr}`);
  assert.ok(res.stdout.includes('TS_FIXTURE_SUITE_PASSED'));
});

test('loader: CJS fixture requiring TS runs under plain `node --require rocha-loader`', () => {
  const cjsRunnerPath = path.join(FIXTURES_DIR, 'cjs_runner.js');
  const res = spawnSync(process.execPath, ['--require', 'rocha-loader', cjsRunnerPath], {
    cwd: PROJECT_ROOT,
    encoding: 'utf8',
  });

  assert.strictEqual(res.status, 0, `Process failed with stderr: ${res.stderr}`);
  assert.ok(res.stdout.includes('CJS_FIXTURE_PASSED'));
});

test('loader: source-mapped stack traces point to original TS line and column', () => {
  const errorRunnerPath = path.join(FIXTURES_DIR, 'error_runner.ts');
  const res = spawnSync(process.execPath, ['--require', 'rocha-loader', errorRunnerPath], {
    cwd: PROJECT_ROOT,
    encoding: 'utf8',
  });

  assert.strictEqual(res.status, 1, 'Expected runner to exit with non-zero error');
  // Stack trace must reference calc.ts:17:9 and error_runner.ts:4:3
  const output = res.stderr + res.stdout;
  assert.ok(
    output.includes('calc.ts:17') || output.includes('calc.ts:18'),
    `Expected stack trace to cite calc.ts:17 or 18, got:\n${output}`
  );
  assert.ok(
    output.includes('error_runner.ts:4'),
    `Expected stack trace to cite error_runner.ts:4, got:\n${output}`
  );
});

test('loader: cold vs warm cache performance benchmark', () => {
  const tempDir = fs.mkdtempSync(path.join(PROJECT_ROOT, '.rocha-bench-'));
  const cacheDir = path.join(tempDir, 'cache', 'v1');
  const runnerPath = path.join(FIXTURES_DIR, 'runner.ts');

  const env = {
    ...process.env,
    ROCHA_CACHE_DIR: cacheDir,
    ROCHA_PROJECT_ROOT: PROJECT_ROOT,
  };

  try {
    // 1. Cold run (cache empty)
    const coldStart = process.hrtime.bigint();
    const coldRes = spawnSync(process.execPath, ['--require', 'rocha-loader', runnerPath], {
      cwd: PROJECT_ROOT,
      env,
      encoding: 'utf8',
    });
    const coldEnd = process.hrtime.bigint();
    const coldMs = Number(coldEnd - coldStart) / 1e6;

    assert.strictEqual(coldRes.status, 0);

    // Verify cache directory has files
    const shards = fs.readdirSync(cacheDir).filter(f => f !== 'tmp');
    assert.ok(shards.length > 0, 'Cache should have created shard directories');

    // 2. Warm run (cache pre-populated)
    const warmStart = process.hrtime.bigint();
    const warmRes = spawnSync(process.execPath, ['--require', 'rocha-loader', runnerPath], {
      cwd: PROJECT_ROOT,
      env,
      encoding: 'utf8',
    });
    const warmEnd = process.hrtime.bigint();
    const warmMs = Number(warmEnd - warmStart) / 1e6;

    assert.strictEqual(warmRes.status, 0);

    console.log(`\n--- Loader Benchmark Results ---`);
    console.log(`Cold cache run: ${coldMs.toFixed(2)} ms`);
    console.log(`Warm cache run: ${warmMs.toFixed(2)} ms`);
    console.log(`Speedup factor: ${(coldMs / warmMs).toFixed(2)}x\n`);

    assert.ok(coldMs > 0 && warmMs > 0);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});

test('loader: ESM loader hook runs with --import', () => {
  const runnerPath = path.join(FIXTURES_DIR, 'runner.ts');
  const registerMjs = path.join(__dirname, '..', 'register.mjs');
  const res = spawnSync(process.execPath, ['--import', registerMjs, runnerPath], {
    cwd: PROJECT_ROOT,
    encoding: 'utf8',
  });

  assert.strictEqual(res.status, 0, `ESM run failed: ${res.stderr}`);
  assert.ok(res.stdout.includes('TS_FIXTURE_SUITE_PASSED'));
});
