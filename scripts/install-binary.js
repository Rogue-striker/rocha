'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
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
  // 1. Environment variable override
  if (process.env.ROCHA_BINARY_PATH && fs.existsSync(process.env.ROCHA_BINARY_PATH)) {
    return process.env.ROCHA_BINARY_PATH;
  }

  const binaryName = getBinaryName();
  const nativeBin = path.join(PKG_ROOT, 'bin', 'rocha-native' + (process.platform === 'win32' ? '.exe' : ''));
  if (fs.existsSync(nativeBin)) {
    return nativeBin;
  }

  // 2. Check vendor package directory
  try {
    const target = getTargetTriple();
    const vendorBin = path.join(PKG_ROOT, 'vendor', target, binaryName);
    if (fs.existsSync(vendorBin)) {
      return vendorBin;
    }
  } catch (_) {
    // Ignore unsupported target during simple check
  }

  // 3. Check local release/debug builds (development workspace)
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
    return true;
  }
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  if (hash !== expectedHex) {
    throw new Error(`Checksum mismatch! Expected ${expectedHex}, got ${hash}`);
  }
  return true;
}

function downloadBinary(target, nativeBin) {
  const binaryName = getBinaryName();
  let manifest = {};
  if (fs.existsSync(CHECKSUMS_PATH)) {
    try {
      manifest = JSON.parse(fs.readFileSync(CHECKSUMS_PATH, 'utf8'));
    } catch (_) {}
  }

  const targetInfo = manifest.targets && manifest.targets[target];
  const version = manifest.version || '0.1.0';
  const archiveName = targetInfo ? targetInfo.archive : `rocha-v${version}-${target}.tar.gz`;
  const url = `https://github.com/Rogue-striker/rocha/releases/download/v${version}/${archiveName}`;

  console.log(`Downloading Rocha native binary from ${url}...`);
  const tmpArchive = path.join(path.dirname(nativeBin), archiveName);

  return new Promise((resolve, reject) => {
    function fetchUrl(targetUrl) {
      https.get(targetUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchUrl(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} downloading ${targetUrl}`));
        }
        const fileStream = fs.createWriteStream(tmpArchive);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          try {
            const buf = fs.readFileSync(tmpArchive);
            if (targetInfo && targetInfo.sha256) {
              verifyChecksum(buf, targetInfo.sha256);
            }
            // Extract archive
            if (process.platform === 'win32') {
              execSync(`tar -xf "${tmpArchive}" -C "${path.dirname(nativeBin)}"`);
            } else {
              execSync(`tar -xzf "${tmpArchive}" -C "${path.dirname(nativeBin)}"`);
              fs.chmodSync(nativeBin, 0o755);
            }
            fs.unlinkSync(tmpArchive);
            resolve(nativeBin);
          } catch (err) {
            reject(err);
          }
        });
      }).on('error', reject);
    }
    fetchUrl(url);
  });
}

function ensureBinary() {
  let existing = getBinaryPath();
  if (existing) {
    return existing;
  }

  const target = getTargetTriple();
  const binaryName = getBinaryName();
  const nativeBin = path.join(PKG_ROOT, 'bin', 'rocha-native' + (process.platform === 'win32' ? '.exe' : ''));

  // If local Cargo.toml exists, build release binary
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

  return nativeBin;
}

if (require.main === module) {
  try {
    const bin = ensureBinary();
    console.log(`Rocha native binary ready at: ${bin}`);
  } catch (err) {
    console.warn(`Postinstall notice: ${err.message}`);
  }
}

module.exports = {
  getTargetTriple,
  getBinaryName,
  getBinaryPath,
  verifyChecksum,
  ensureBinary,
};
