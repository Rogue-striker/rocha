'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { getTargetTriple, getBinaryName, verifyChecksum } = require('../../scripts/install-binary');

test('packaging: getTargetTriple resolves supported targets', () => {
  assert.equal(getTargetTriple('darwin', 'arm64'), 'aarch64-apple-darwin');
  assert.equal(getTargetTriple('darwin', 'x64'), 'x86_64-apple-darwin');
  assert.equal(getTargetTriple('linux', 'arm64'), 'aarch64-unknown-linux-gnu');
  assert.equal(getTargetTriple('linux', 'x64'), 'x86_64-unknown-linux-gnu');
  assert.equal(getTargetTriple('win32', 'x64'), 'x86_64-pc-windows-msvc');
  assert.throws(() => getTargetTriple('freebsd', 'x64'), /Unsupported platform/);
});

test('packaging: getBinaryName returns correct binary name', () => {
  assert.equal(getBinaryName('win32'), 'rocha.exe');
  assert.equal(getBinaryName('darwin'), 'rocha');
  assert.equal(getBinaryName('linux'), 'rocha');
});

test('packaging: verifyChecksum validates SHA-256', () => {
  const dummyBuffer = Buffer.from('hello rocha');
  // SHA-256 for 'hello rocha': 95ba887f...
  const expectedHash = require('crypto').createHash('sha256').update(dummyBuffer).digest('hex');
  assert.equal(verifyChecksum(dummyBuffer, expectedHash), true);

  // Mismatched checksum throws error
  assert.throws(
    () => verifyChecksum(dummyBuffer, '0000000000000000000000000000000000000000000000000000000000000000'),
    /Checksum mismatch/
  );
});

test('packaging: bin/rocha --version executes native binary', () => {
  const binRocha = path.resolve(__dirname, '../../bin/rocha');
  const result = spawnSync('node', [binRocha, '--version'], { encoding: 'utf-8' });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /rocha \d+\.\d+\.\d+/);
});

test('packaging: npx . --version executes successfully via package.json bin', () => {
  const projectRoot = path.resolve(__dirname, '../..');
  const result = spawnSync('npx', ['.', '--version'], { cwd: projectRoot, encoding: 'utf-8' });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /rocha \d+\.\d+\.\d+/);
});
