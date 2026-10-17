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

export function resolve(specifier, context, nextResolve) {
  const parentURL = context.parentURL || pathToFileURL(path.join(process.cwd(), 'entry.js')).href;

  if (specifier.startsWith('./') || specifier.startsWith('../') || specifier.startsWith('/')) {
    const resolvedUrl = new URL(specifier, parentURL).href;
    if (isTsUrl(resolvedUrl)) {
      return {
        url: resolvedUrl,
        format: 'module',
        shortCircuit: true,
      };
    }

    if (parentURL.startsWith('file:')) {
      const parentDir = path.dirname(fileURLToPath(parentURL));
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

  const resolved = nextResolve(specifier, context);
  if (resolved && resolved.url && isTsUrl(resolved.url)) {
    return {
      url: resolved.url,
      format: 'module',
      shortCircuit: true,
    };
  }

  return {
    ...resolved,
    shortCircuit: true,
  };
}

export function load(url, context, nextLoad) {
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
