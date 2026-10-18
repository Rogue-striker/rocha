'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const https = require('https');
const { execSync } = require('child_process');

const PKG_ROOT = path.resolve(__dirname, '..');
const CHECKSUMS_PATH = path.join(__dirname, 'checksums.json');
const PKG_JSON_PATH = path.join(PKG_ROOT, 'package.json');

function getPackageVersion() {
  try {
    if (fs.existsSync(PKG_JSON_PATH)) {
      const pkg = JSON.parse(fs.readFileSync(PKG_JSON_PATH, 'utf8'));
      if (pkg.version) return pkg.version;
    }
  } catch (_) {}
  return '2.5.12';
}

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

  // 2. Check vendor package directory for exact target match
  try {
    const target = getTargetTriple();
    const vendorBin = path.join(PKG_ROOT, 'vendor', target, binaryName);
    if (fs.existsSync(vendorBin)) {
      return vendorBin;
    }
  } catch (_) {
    // Unsupported platform during simple probe
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

function findFileRecursive(dir, filename) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isFile() && entry.name === filename) {
      return fullPath;
    }
    if (entry.isDirectory()) {
      const found = findFileRecursive(fullPath, filename);
      if (found) return found;
    }
  }
  return null;
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
  const version = manifest.version || getPackageVersion();
  const archiveName = targetInfo ? targetInfo.archive : `rocha-v${version}-${target}.${process.platform === 'win32' ? 'zip' : 'tar.gz'}`;
  const url = `https://github.com/Rogue-striker/rocha/releases/download/v${version}/${archiveName}`;

  console.log(`Downloading Rocha native binary from ${url}...`);

  fs.mkdirSync(path.dirname(nativeBin), { recursive: true });
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'rocha-dl-'));
  const tmpArchive = path.join(tmpDir, archiveName);

  // Attempt download using curl first (built into macOS, Linux, and Windows 10+)
  let downloaded = false;
  try {
    execSync(`curl -fLsS "${url}" -o "${tmpArchive}"`, { stdio: 'inherit' });
    downloaded = fs.existsSync(tmpArchive) && fs.statSync(tmpArchive).size > 0;
  } catch (_) {
    downloaded = false;
  }

  // Fallback to Node.js https if curl is unavailable or failed
  const fetchPromise = downloaded
    ? Promise.resolve()
    : new Promise((resolve, reject) => {
        function fetchUrl(targetUrl, redirects = 0) {
          if (redirects > 5) return reject(new Error('Too many redirects'));
          https.get(targetUrl, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
              return fetchUrl(res.headers.location, redirects + 1);
            }
            if (res.statusCode !== 200) {
              return reject(new Error(`HTTP ${res.statusCode} downloading ${targetUrl}`));
            }
            const fileStream = fs.createWriteStream(tmpArchive);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
              fileStream.close();
              resolve();
            });
            fileStream.on('error', reject);
          }).on('error', reject);
        }
        fetchUrl(url);
      });

  return fetchPromise.then(() => {
    const buf = fs.readFileSync(tmpArchive);
    if (targetInfo && targetInfo.sha256) {
      verifyChecksum(buf, targetInfo.sha256);
    }

    const extractDir = path.join(tmpDir, 'extracted');
    fs.mkdirSync(extractDir, { recursive: true });

    if (archiveName.endsWith('.zip')) {
      try {
        execSync(`tar -xf "${tmpArchive}" -C "${extractDir}"`);
      } catch (_) {
        execSync(`powershell -command "Expand-Archive -Path '${tmpArchive}' -DestinationPath '${extractDir}' -Force"`);
      }
    } else {
      execSync(`tar -xzf "${tmpArchive}" -C "${extractDir}"`);
    }

    const extractedBinary = findFileRecursive(extractDir, binaryName);
    if (!extractedBinary) {
      throw new Error(`Archive ${archiveName} did not contain executable '${binaryName}'`);
    }

    fs.copyFileSync(extractedBinary, nativeBin);
    if (process.platform !== 'win32') {
      fs.chmodSync(nativeBin, 0o755);
    }

    // Clean up
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (_) {}

    return nativeBin;
  });
}

function ensureBinary() {
  let existing = getBinaryPath();
  if (existing && fs.existsSync(existing)) {
    return existing;
  }

  const target = getTargetTriple();
  const binaryName = getBinaryName();
  const nativeBin = path.join(PKG_ROOT, 'bin', 'rocha-native' + (process.platform === 'win32' ? '.exe' : ''));

  // 1. Check if matching pre-bundled vendor binary exists
  const vendorBin = path.join(PKG_ROOT, 'vendor', target, binaryName);
  if (fs.existsSync(vendorBin)) {
    try {
      fs.mkdirSync(path.dirname(nativeBin), { recursive: true });
      fs.copyFileSync(vendorBin, nativeBin);
      if (process.platform !== 'win32') {
        fs.chmodSync(nativeBin, 0o755);
      }
      return nativeBin;
    } catch (_) {
      return vendorBin;
    }
  }

  // 2. If Cargo.toml exists, build release binary locally
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
          fs.mkdirSync(path.dirname(nativeBin), { recursive: true });
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

  // 3. Try to download from GitHub Releases
  try {
    downloadBinarySync(target, nativeBin);
    if (fs.existsSync(nativeBin)) {
      return nativeBin;
    }
  } catch (err) {
    console.warn(`Failed to download prebuilt binary: ${err.message}`);
  }

  throw new Error(
    `Rocha native binary could not be found or downloaded for target '${target}'.\n` +
    `Please set the ROCHA_BINARY_PATH environment variable to your compiled binary, or check https://github.com/Rogue-striker/rocha/releases.`
  );
}

function downloadBinarySync(target, nativeBin) {
  const binaryName = getBinaryName();
  let manifest = {};
  if (fs.existsSync(CHECKSUMS_PATH)) {
    try {
      manifest = JSON.parse(fs.readFileSync(CHECKSUMS_PATH, 'utf8'));
    } catch (_) {}
  }

  const targetInfo = manifest.targets && manifest.targets[target];
  const version = manifest.version || getPackageVersion();
  const archiveName = targetInfo ? targetInfo.archive : `rocha-v${version}-${target}.${process.platform === 'win32' ? 'zip' : 'tar.gz'}`;
  const url = `https://github.com/Rogue-striker/rocha/releases/download/v${version}/${archiveName}`;

  console.log(`Downloading Rocha native binary from ${url}...`);

  fs.mkdirSync(path.dirname(nativeBin), { recursive: true });
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'rocha-dl-'));
  const tmpArchive = path.join(tmpDir, archiveName);

  execSync(`curl -fLsS "${url}" -o "${tmpArchive}"`, { stdio: 'inherit' });

  const extractDir = path.join(tmpDir, 'extracted');
  fs.mkdirSync(extractDir, { recursive: true });

  if (archiveName.endsWith('.zip')) {
    try {
      execSync(`tar -xf "${tmpArchive}" -C "${extractDir}"`);
    } catch (_) {
      execSync(`powershell -command "Expand-Archive -Path '${tmpArchive}' -DestinationPath '${extractDir}' -Force"`);
    }
  } else {
    execSync(`tar -xzf "${tmpArchive}" -C "${extractDir}"`);
  }

  const extractedBinary = findFileRecursive(extractDir, binaryName);
  if (!extractedBinary) {
    throw new Error(`Archive ${archiveName} did not contain executable '${binaryName}'`);
  }

  fs.copyFileSync(extractedBinary, nativeBin);
  if (process.platform !== 'win32') {
    fs.chmodSync(nativeBin, 0o755);
  }

  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch (_) {}

  return nativeBin;
}

function stagePrebuiltVendor() {
  const target = getTargetTriple();
  const binaryName = getBinaryName();
  const vendorTargetDir = path.join(PKG_ROOT, 'vendor', target);
  const targetBin = path.join(vendorTargetDir, binaryName);

  // If already exists, we are good
  if (fs.existsSync(targetBin)) {
    console.log(`Prebuilt vendor binary present at: ${targetBin}`);
    return;
  }

  // Look for target/release/rocha
  const releaseBin = path.join(PKG_ROOT, 'target', 'release', binaryName);
  if (fs.existsSync(releaseBin)) {
    fs.mkdirSync(vendorTargetDir, { recursive: true });
    fs.copyFileSync(releaseBin, targetBin);
    if (process.platform !== 'win32') {
      try { execSync(`strip "${targetBin}"`); } catch (_) {}
      fs.chmodSync(targetBin, 0o755);
    }
    console.log(`Staged vendor binary at: ${targetBin}`);
  }
}

if (require.main === module) {
  const isPrep = process.argv.includes('--prep');
  if (isPrep) {
    stagePrebuiltVendor();
  } else {
    try {
      const bin = ensureBinary();
      console.log(`Rocha native binary ready at: ${bin}`);
    } catch (err) {
      console.warn(`Postinstall notice: ${err.message}`);
    }
  }
}

module.exports = {
  getTargetTriple,
  getBinaryName,
  getBinaryPath,
  verifyChecksum,
  downloadBinary,
  ensureBinary,
};
