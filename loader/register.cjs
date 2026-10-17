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

module.exports = {
  compileTsModule,
  TS_EXTENSIONS,
};
