'use strict';

const { getOrTransform } = require('./cache.cjs');

// Enable native Node.js source map support for clean stack traces
if (typeof process.setSourceMapsEnabled === 'function') {
  process.setSourceMapsEnabled(true);
}

function compileTsModule(module, filename) {
  const { code, sourceMap } = getOrTransform(filename);
  let finalCode = code;

  if (sourceMap && !finalCode.includes('sourceMappingURL=')) {
    const base64Map = Buffer.from(sourceMap, 'utf8').toString('base64');
    finalCode += `\n//# sourceMappingURL=data:application/json;base64,${base64Map}\n//# sourceURL=${filename}\n`;
  }

  module._compile(finalCode, filename);
}

const TS_EXTENSIONS = ['.ts', '.tsx', '.mts', '.cts'];

for (const ext of TS_EXTENSIONS) {
  require.extensions[ext] = compileTsModule;
}

// Register ESM hooks so that files imported via import() or ESM loaders in Node are also transformed
try {
  const mod = require('node:module');
  if (typeof mod.registerHooks === 'function') {
    const hooks = require('./esm-hooks.mjs');
    mod.registerHooks(hooks);
  } else if (typeof mod.register === 'function') {
    mod.register('./esm-hooks.mjs', require('node:url').pathToFileURL(__filename).href);
  }
} catch (_) {
  // ESM registration fallback on older Node environments
}

module.exports = {
  compileTsModule,
  TS_EXTENSIONS,
};
