'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const PKG_ROOT = path.resolve(__dirname, '..');
const CHECKSUMS_PATH = path.join(__dirname, 'checksums.json');

function getTargetTriple(platform = process.platform, arch = process.arch) {
  if (platform === 'darwin') {
    if (arch === 'arm64') return 'aarch64-apple-darwin';
    if (arch === 'x64') return 'x86_64-apple-darwin';
  } else if (platform === 'linux') {
    if (arch === 'arm64') return 'aarch64-unknown-linux-gnu';
    if (arch === 'x64') return 'x86_64-unknown-linux-gnu';
  } else if (platform === 'win32') {
    if (arch === 'x64') return 'x86_64-pc-windows-msvc';
  }
  throw new Error(`Unsupported platform/architecture: ${platform}-${arch}`);
}

function getBinaryName(platform = process.platform) {
  return platform === 'win32' ? 'rocha.exe' : 'rocha';
}

function getBinaryPath() {
  const binaryName = getBinaryName();
  const nativeBin = path.join(PKG_ROOT, 'bin', 'rocha-native' + (process.platform === 'win32' ? '.exe' : ''));
  if (fs.existsSync(nativeBin)) {
    return nativeBin;
  }

  // Check vendor package directory
  try {
    const target = getTargetTriple();
    const vendorBin = path.join(PKG_ROOT, 'vendor', target, binaryName);
    if (fs.existsSync(vendorBin)) {
      return vendorBin;
    }
  } catch (_) {
    // Ignore unsupported target during simple check
  }

  // Check local release/debug builds
  const releaseBin = path.join(PKG_ROOT, 'target', 'release', binaryName);
  if (fs.existsSync(releaseBin)) {
    return releaseBin;
  }

  const debugBin = path.join(PKG_ROOT, 'target', 'debug', binaryName);
  if (fs.existsSync(debugBin)) {
    return debugBin;
  }

  return null;
}

function verifyChecksum(buffer, expectedHex) {
  if (!expectedHex || expectedHex === 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855') {
    // Empty / initial placeholder checksum
    return true;
  }
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  if (hash !== expectedHex) {
    throw new Error(`Checksum mismatch! Expected ${expectedHex}, got ${hash}`);
  }
  return true;
}

function ensureBinary() {
  let existing = getBinaryPath();
  if (existing) {
    return existing;
  }

  const target = getTargetTriple();
  const binaryName = getBinaryName();
  const nativeBin = path.join(PKG_ROOT, 'bin', 'rocha-native' + (process.platform === 'win32' ? '.exe' : ''));

  // If Cargo.toml exists, build release binary locally
  const cargoToml = path.join(PKG_ROOT, 'Cargo.toml');
  if (fs.existsSync(cargoToml)) {
    try {
      console.log('Building rocha release binary via cargo...');
      execSync('cargo build --release -p rocha-cli --bin rocha', {
        cwd: PKG_ROOT,
        stdio: 'inherit',
      });
      const builtBin = path.join(PKG_ROOT, 'target', 'release', binaryName);
      if (fs.existsSync(builtBin)) {
        try {
          fs.copyFileSync(builtBin, nativeBin);
          if (process.platform !== 'win32') {
            fs.chmodSync(nativeBin, 0o755);
          }
          return nativeBin;
        } catch (_) {
          return builtBin;
        }
      }
    } catch (e) {
      console.warn('Local cargo build failed or cargo not available:', e.message);
    }
  }

  // In production / clean container, look for vendor or downloaded bundle
  throw new Error(
    `Rocha native binary could not be found or built for target '${target}'. Please install cargo or download the binary.`
  );
}

if (require.main === module) {
  try {
    const bin = ensureBinary();
    console.log(`Rocha native binary ready at: ${bin}`);
  } catch (err) {
    console.error(`Postinstall warning: ${err.message}`);
    // Non-fatal during install in offline / dev setups
  }
}

module.exports = {
  getTargetTriple,
  getBinaryName,
  getBinaryPath,
  verifyChecksum,
  ensureBinary,
};
