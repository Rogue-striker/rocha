'use strict';

const fs = require('fs');
const { spawn, spawnSync } = require('child_process');
const { getBinaryPath, ensureBinary } = require('./scripts/install-binary');

function getRochaBin() {
  let bin = getBinaryPath();
  if (!bin || !fs.existsSync(bin)) {
    bin = ensureBinary();
  }
  if (!bin || !fs.existsSync(bin)) {
    throw new Error('Rocha native binary could not be found. Please set ROCHA_BINARY_PATH to your compiled binary.');
  }
  return bin;
}

function runSync(args = [], options = {}) {
  const bin = getRochaBin();
  return spawnSync(bin, args, {
    stdio: 'inherit',
    ...options,
  });
}

function run(args = [], options = {}) {
  const bin = getRochaBin();
  return spawn(bin, args, {
    stdio: 'inherit',
    ...options,
  });
}

module.exports = {
  getBinaryPath: getRochaBin,
  run,
  runSync,
};
