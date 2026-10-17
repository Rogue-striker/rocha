'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { Blake3Hasher, blake3 } = require('./blake3.cjs');

const ROCHA_TRANSFORM_VERSION = '0.1.0';
const OXC_VERSION = '0.152.0';
const DEFAULT_CANONICAL_OPTIONS_JSON = '{"commonjs":true,"jsx":"automatic","target":"es2022"}';

function findProjectRoot(startDir = process.cwd()) {
  let curr = path.resolve(startDir);
  while (true) {
    if (fs.existsSync(path.join(curr, '.rocha')) ||
        fs.existsSync(path.join(curr, 'package.json')) ||
        fs.existsSync(path.join(curr, '.git')) ||
        fs.existsSync(path.join(curr, 'Cargo.toml'))) {
      return curr;
    }
    const parent = path.dirname(curr);
    if (parent === curr) break;
    curr = parent;
  }
  return process.cwd();
}

function getCacheDir() {
  if (process.env.ROCHA_CACHE_DIR) {
    return path.resolve(process.env.ROCHA_CACHE_DIR);
  }
  const root = findProjectRoot();
  return path.join(root, '.rocha', 'cache', 'v1');
}

function getNodeVersionClass() {
  if (process.env.ROCHA_NODE_CLASS) {
    return process.env.ROCHA_NODE_CLASS;
  }
  const major = process.versions.node.split('.')[0];
  return `node${major}`;
}

function computeCacheKey(sourceBytes, ext, canonicalOptsJson = DEFAULT_CANONICAL_OPTIONS_JSON, nodeClass = getNodeVersionClass()) {
  const hasher = new Blake3Hasher();
  hasher.update(sourceBytes);
  hasher.update(Buffer.from([0x00]));
  hasher.update(ext);
  hasher.update(Buffer.from([0x00]));
  hasher.update(canonicalOptsJson);
  hasher.update(Buffer.from([0x00]));
  hasher.update(ROCHA_TRANSFORM_VERSION);
  hasher.update(Buffer.from([0x00]));
  hasher.update(OXC_VERSION);
  hasher.update(Buffer.from([0x00]));
  hasher.update(nodeClass);
  return hasher.digestHex();
}

let loadedManifest = null;
function getManifest() {
  if (loadedManifest !== null) return loadedManifest;
  const manifestPath = process.env.ROCHA_MANIFEST || path.join(findProjectRoot(), '.rocha', 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      loadedManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (_) {
      loadedManifest = false;
    }
  } else {
    loadedManifest = false;
  }
  return loadedManifest;
}

function findRochaBinary() {
  if (process.env.ROCHA_BIN && fs.existsSync(process.env.ROCHA_BIN)) {
    return process.env.ROCHA_BIN;
  }
  const root = findProjectRoot();
  const candidates = [
    path.join(root, 'target', 'release', 'rocha'),
    path.join(root, 'target', 'debug', 'rocha'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return 'rocha';
}

/**
 * Retrieve transformed code and source map for a file, using disk cache.
 * On cache miss, transforms the file via Rocha native transform.
 */
function getOrTransform(filePath, options = {}) {
  const absPath = path.resolve(filePath);
  const ext = path.extname(absPath).slice(1).toLowerCase();

  const manifest = getManifest();
  if (manifest && manifest[absPath]) {
    const entry = manifest[absPath];
    if (entry.code) {
      return {
        code: entry.code,
        sourceMap: entry.sourceMap || null,
        key: entry.key || '',
        fromCache: true,
      };
    }
  }

  const sourceBytes = fs.readFileSync(absPath);
  const canonicalOpts = options.canonicalOptionsJson || DEFAULT_CANONICAL_OPTIONS_JSON;
  const nodeClass = getNodeVersionClass();
  const key = computeCacheKey(sourceBytes, ext, canonicalOpts, nodeClass);

  const cacheDir = getCacheDir();
  const shard = key.slice(0, 2);
  const base = path.join(cacheDir, shard, key);
  const jsPath = `${base}.js`;
  const metaPath = `${base}.meta`;
  const mapPath = `${base}.map`;

  if (fs.existsSync(jsPath) && fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      if (meta && meta.version === 1) {
        const code = fs.readFileSync(jsPath, 'utf8');
        const sourceMap = fs.existsSync(mapPath) ? fs.readFileSync(mapPath, 'utf8') : null;
        return {
          code,
          sourceMap,
          key,
          fromCache: true,
        };
      }
    } catch (_) {
      // Corrupt cache entry - will transform
    }
  }

  // Cache miss: invoke native rocha transform
  const rochaBin = findRochaBinary();
  const env = {
    ...process.env,
    ROCHA_PROJECT_ROOT: findProjectRoot(),
    ROCHA_CACHE_DIR: cacheDir,
    ROCHA_NODE_CLASS: nodeClass,
  };

  try {
    const stdout = execFileSync(rochaBin, ['--transform', absPath], {
      env,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'inherit'],
    });

    const sourceMap = fs.existsSync(mapPath) ? fs.readFileSync(mapPath, 'utf8') : null;
    return {
      code: stdout,
      sourceMap,
      key,
      fromCache: false,
    };
  } catch (err) {
    throw new Error(`Failed to transform ${absPath} using ${rochaBin}: ${err.message}`);
  }
}

module.exports = {
  findProjectRoot,
  getCacheDir,
  getNodeVersionClass,
  computeCacheKey,
  getOrTransform,
  ROCHA_TRANSFORM_VERSION,
  OXC_VERSION,
  DEFAULT_CANONICAL_OPTIONS_JSON,
};
