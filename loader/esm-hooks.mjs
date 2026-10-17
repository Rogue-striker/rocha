import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { getOrTransform } = require('./cache.cjs');

if (typeof process.setSourceMapsEnabled === 'function') {
  process.setSourceMapsEnabled(true);
}

const TS_EXTS = ['.ts', '.tsx', '.mts', '.cts'];

function isTsUrl(url) {
  try {
    const { pathname } = new URL(url);
    return TS_EXTS.some(ext => pathname.endsWith(ext));
  } catch (_) {
    return false;
  }
}

export async function resolve(specifier, context, nextResolve) {
  // If specifier is a relative path without extension, check for .ts / .tsx
  if (specifier.startsWith('./') || specifier.startsWith('../')) {
    if (context.parentURL && context.parentURL.startsWith('file:')) {
      const parentDir = path.dirname(fileURLToPath(context.parentURL));
      const targetPath = path.resolve(parentDir, specifier);
      for (const ext of TS_EXTS) {
        if (fs.existsSync(targetPath + ext)) {
          return {
            url: pathToFileURL(targetPath + ext).href,
            format: 'module',
            shortCircuit: true,
          };
        }
      }
    }
  }

  let resolved;
  try {
    resolved = await nextResolve(specifier, context);
  } catch (err) {
    throw err;
  }

  if (isTsUrl(resolved.url)) {
    return {
      url: resolved.url,
      format: 'module',
      shortCircuit: true,
    };
  }

  return resolved;
}

export async function load(url, context, nextLoad) {
  if (isTsUrl(url)) {
    const filePath = fileURLToPath(url);
    const { code, sourceMap } = getOrTransform(filePath);
    let finalCode = code;

    if (sourceMap && !finalCode.includes('sourceMappingURL=')) {
      const base64Map = Buffer.from(sourceMap, 'utf8').toString('base64');
      finalCode += `\n//# sourceMappingURL=data:application/json;base64,${base64Map}\n//# sourceURL=${filePath}\n`;
    }

    return {
      format: 'module',
      source: finalCode,
      shortCircuit: true,
    };
  }

  return nextLoad(url, context);
}
